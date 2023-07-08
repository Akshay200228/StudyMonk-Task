import React, { useEffect, useState } from 'react';
import styles from './style';
import { Footer, Navbar } from './components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Contact, Candidate, Home, About, Login } from './pages';
import Preloader from './constants/Preloader';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { fetchUser, userAccessToken } from "./utils/fetchUser";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Simulating a delay to show the preloader
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clean up the timeout on unmount
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      offset: 100,
    });
  }, []);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const accessToken = userAccessToken();
    if (!accessToken) {
      navigate("/login", { replace: true });
    } else {
      const [userInfo] = fetchUser();
      setUser(userInfo);
    }
  }, [navigate]);


  return (
    <>
      <div className="w-full overflow-hidden scroll-smooth" style={{ backgroundColor: '#0C0E15' }}>
        {isLoading ? (
          // Preloader component
          <Preloader />
        ) : (
          <>
            {!location.pathname.includes('/login') && (
              <div className={`w-[100vh] ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                  <Navbar user={user} />
                </div>
              </div>
            )}

            <div className={`${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route exact path="/" element={<Home />} />
                  <Route path="/candidate" element={<Candidate />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </div>
            </div>

            {!location.pathname.includes('/login') && (
              <div className={`${styles.paddingX} ${styles.flexStart} mt-24 border-t border-gray-500 rounded-t-[100px] rounded-b-none shadow-md bg-[#29347a]`} data-aos="fade">
                <div className={`${styles.boxWidth}`}>
                  <Footer />
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default App;
