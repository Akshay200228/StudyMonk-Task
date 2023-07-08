import React from 'react';
import styles from '../style';
import { suitModel } from '../assets';
import { motion } from 'framer-motion';

const About = () => {
  const imageVariants = {
    hidden: { opacity: 0, rotateY: -90, transformOrigin: "50% 50%" },
    visible: { opacity: 1, rotateY: 0, transition: { duration: 1, ease: "easeInOut" } }
  };
  
  const textVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
  };

  return (
    <div className={`${styles.paddingY} mt-20 bg-[#6674cc] rounded-3xl py-12 lg:py-24`}>
      <div className="container items-center px-4 mx-auto lg:flex lg:flex-row-reverse">
        <motion.div
          className="lg:w-1/2"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <img src={suitModel} alt="Recruitment" className="w-full h-auto rounded-lg" />
        </motion.div>
        <motion.div
          className="mt-8 lg:w-1/2 lg:pr-12 lg:mt-0"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
            About Our Digital Recruitment Solution
          </h2>
          <p className="mb-6 text-xl text-dimWhite">
            Our digital recruitment solution is a professional platform aimed at providing a seamless hiring experience for multiple MNCs (Multinational Corporations). We understand the challenges faced by hiring teams and HR professionals in finding the right talent efficiently and effectively.
          </p>
          <p className="text-xl text-dimWhite">
            With our platform, you can streamline your recruitment process, access a powerful candidate search, and enable seamless team collaboration. We strive to make hiring easier and more efficient, empowering your organization to find and hire top talent.
          </p>
          <p className="mt-6 text-xl text-dimWhite">
            Experience a new level of recruitment efficiency and professionalism with our digital solution.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
