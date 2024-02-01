import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare, FaTwitterSquare } from "react-icons/fa";
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.div className='aboutme'
      initial={{ opacity: 0, scale: 0}}
      animate={{opacity: 1, scale: 1}}
      exit={{opacity: 0, scale: 0}}
      transition={{ duration: 1.5 }}
    >
      <div className='aboutme__left'>
        <p className='aboutme__left-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className='aboutme__icons'>
          <FaFacebookSquare style={{margin: '0px 10px 0px 10px'}} className="mainpage__icons-item" />
          <FaInstagramSquare style={{margin: '0px 10px 0px 10px'}} className="mainpage__icons-item" />
          <FaTwitterSquare style={{margin: '0px 10px 0px 10px'}} className="mainpage__icons-item" />
          <FaYoutubeSquare style={{margin: '0px 10px 0px 10px'}} className="mainpage__icons-item" />
          <span className="mainpage__design">
              By Ivan Monge
          </span>
        </div>
      </div>
      <div className='aboutme__right'>
          <div className='gradient'></div>
          <img src={require("../assets/model_img.PNG")} alt='model' className='aboutme__right-model' />
      </div>
    </motion.div>
  )
}

export default AboutMe;