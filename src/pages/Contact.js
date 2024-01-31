import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare, FaTwitterSquare } from "react-icons/fa";
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div className='contact'
      initial={{ opacity: 0, scale: 0}}
      animate={{opacity: 1, scale: 1}}
      exit={{opacity: 0, scale: 0}}
      transition={{ duration: 1.5 }}
    >
        <div className='contact__footer'>
          <h3 className='contact__footer-text'>Telefono:</h3>
          <p>123456789</p>
          <h3 className='contact__footer-text'>Whatsapp:</h3>
          <p>123456789</p>
        </div>
        <div className='contact__container'>
          <FaFacebookSquare className='contact__container-icon' />
          <FaInstagramSquare className='contact__container-icon' />
          <FaYoutubeSquare className='contact__container-icon' />
          <FaTwitterSquare className='contact__container-icon' />
        </div>
        {/* <div className='contact__footer'>
          <h3 className='contact__footer-text'>Telefono: 123456789</h3>
          <h3 className='contact__footer-text'>Whatsapp: 123456789</h3>
        </div> */}
    </motion.div>
  )
}

export default Contact;