import React, { useEffect, useState } from 'react';
import { close, logo6, menu } from '../assets';
import { Link, useNavigate } from 'react-router-dom';
import { Image, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";


const Navbar = ({ user }) => {
  const [toggle, setToggle] = useState(false);
  const [animateButton, setAnimateButton] = useState(false);
  const navigate = useNavigate();

  const defaultImageUrl = "https://e7.pngegg.com/pngimages/520/472/png-clipart-computer-icons-avatar-man-male-face-head-man-icon-miscellaneous-human.png";
  const imageUrl = user?.photoURL ? user.photoURL : defaultImageUrl;


  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateButton((prevAnimateButton) => !prevAnimateButton);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed top-0 z-50 flex items-center justify-between w-full py-4 navbar backdrop-filter backdrop-blur-lg bg-opacity-70">
      <Link to="/">
        <img src={logo6} alt="logo" className="w-[124px] h-[32px]" />
      </Link>
      <ul className="items-center justify-end hidden space-x-4 sm:flex">
        <li>
          <Link
            to="/"
            className="font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-purple-400 hover:bg-gray-700 px-3 py-2 rounded-md transition-colors duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/candidate"
            className="font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-purple-400 hover:bg-gray-700 px-3 py-2 rounded-md transition-colors duration-300"
          >
            Candidate
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-purple-400 hover:bg-gray-700 px-3 py-2 rounded-md transition-colors duration-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-purple-400 hover:bg-gray-700 px-3 py-2 rounded-md transition-colors duration-300"
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="hidden mr-20 space-x-4 sm:flex">
        <button
          type="button"
          className={`py-4 px-6 font-poppins font-medium text-[14px] text-white bg-purple-gradient rounded-[10px] outline-none ${animateButton ? 'animate-pulse' : ''
            }`}
          onClick={() => window.open('https://personal-portfolio-theta-nine.vercel.app/', '_blank')}
        >
          Hire Me!
        </button>
        <Menu>
          <MenuButton>
            <Image
              src={imageUrl}
              width="40px"
              height="40px"
              rounded="full"
              minWidth={"40px"}
            />
          </MenuButton>
          <MenuList shadow={"lg"}>
            <MenuItem
              flexDirection={"row"}
              alignItems="center"
              gap={4}
              onClick={() => {
                localStorage.clear();
                navigate("/login", { replace: true });
              }}
            >
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </div>

      {/* Mobile Navbar */}
      <div className="flex items-center justify-end flex-1 mr-14 sm:hidden">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => {
            setToggle((prevToggle) => !prevToggle);
          }}
        />

        {toggle && (
          <div className="mr-10 flex flex-col items-center p-6 bg-black-gradient absolute top-full right-0 mt-2 mx-4 min-w-[140px] rounded-xl sidebar">
            <ul className="flex flex-col items-start justify-end flex-1 mb-4 list-none">
              <li className="mb-2">
                <Link
                  to="/"
                  className="font-poppins font-normal cursor-pointer text-[16px] text-white hover:bg-gray-700 px-3 py-2 rounded-md transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/candidate"
                  className="font-poppins font-normal cursor-pointer text-[16px] text-white hover:bg-gray-700 px-3 py-2 rounded-md transition-colors duration-300"
                >
                  Candidate
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/about"
                  className="font-poppins font-normal cursor-pointer text-[16px] text-white hover:bg-gray-700 px-3 py-2 rounded-md transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="font-poppins font-normal cursor-pointer text-[16px] text-white hover:bg-gray-700 px-3 py-2 rounded-md transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>

            <div className="flex flex-col items-center">
              <button
                type="button"
                className="py-3 px-2 mb-6 sm:mb-0 font-poppins font-medium text-[14px] text-primary bg-purple-gradient rounded-[10px] outline-none"
                onClick={() => window.open('https://personal-portfolio-theta-nine.vercel.app/', '_blank')}
              >
                Get Started
              </button>
              <Menu>
                <MenuButton>
                  <Image
                    src={imageUrl}
                    width="40px"
                    height="40px"
                    rounded="full"
                    minWidth={"40px"}
                  />
                </MenuButton>
                <MenuList shadow={"lg"}>
                  <MenuItem
                    flexDirection={"row"}
                    alignItems="center"
                    gap={4}
                    onClick={() => {
                      localStorage.clear();
                      navigate("/login", { replace: true });
                    }}
                  >
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
