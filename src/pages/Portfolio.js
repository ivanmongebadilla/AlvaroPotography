import React from 'react'
import { useState, useRef } from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare, FaTwitterSquare } from "react-icons/fa";
import { motion } from 'framer-motion';

const Portfolio = () => {

  const [loading, setLoading ] = useState(true);
  const counter = useRef(0)

  const imageLoaded = () => {
    counter.current += 1;
    console.log(counter.current)
    if (counter.current >= 9) {
      // setTimeout(() => { console.log('5 seconds passed'); }, 10000);
      setLoading(false);
      console.log('Finish loading')
    }
  }

  return (
      <div className='portback'>

          <div className='loading' style={{display: loading ? "block" : "none"}}>
            <h2 className='loading__text'>Cargando imagenes, por favor espera...</h2>
            {/* <motion.div 
              className="loader" 
              animate={{ rotate: 360 }}
              transition={{ ease: "linear", duration: 2, repeat: Infinity }} /> */}
            {/* <SyncLoader color='#FFFFFF'/> */}
          </div>
              
          <motion.div className='portfolio' style={{display: loading ? "none" : "grid"}}
            initial={{ opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            exit={{opacity: 0, scale: 0}}
            transition={{ duration: 1.5 }}
          >
            <div className='portfolio__item-1'>
              <img src={require('../assets/img1.jpg')} alt='1' className='portfolio__image' onLoad={imageLoaded} />
            </div>
            <div className='portfolio__item-2'>
              <img src={require('../assets/img2.jpg')} alt='2' className='portfolio__image' onLoad={imageLoaded} />
            </div>
            <div className='portfolio__item-3'>
              <img src={require('../assets/img3.jpg')} alt='3' className='portfolio__image' onLoad={imageLoaded} />
            </div>
            <div className='portfolio__item-4'>
              <img src={require('../assets/img4.jpg')} alt='4' className='portfolio__image' onLoad={imageLoaded} />
            </div>
            <div className='portfolio__item-5'>
              <img src={require('../assets/img5.jpg')} alt='5' className='portfolio__image' onLoad={imageLoaded} />
            </div>
            <div className='portfolio__item-6'>
              <img src={require('../assets/img6.jpg')} alt='6' className='portfolio__image' onLoad={imageLoaded} />
            </div>
            <div className='portfolio__item-7'>
              <img src={require('../assets/img7.jpg')} alt='7' className='portfolio__image' onLoad={imageLoaded} />
            </div>
            <div className='portfolio__item-8'>
              <img src={require('../assets/img8.jpg')} alt='8' className='portfolio__image' onLoad={imageLoaded} />
            </div>
            <div className='portfolio__item-9'>
              <img src={require('../assets/img9.jpg')} alt='9' className='portfolio__image' onLoad={imageLoaded} />
            </div>
          </motion.div>

          <div className='portfolio__footer'>
            <h3 className='portfolio__footer-text'>Ver mas en mis redes</h3>
            <div className='portfolio__footer-icons'>
              <FaFacebookSquare style={{margin: '0px 10px 0px 10px'}} className="mainpage__icons-item" />
              <FaInstagramSquare style={{margin: '0px 10px 0px 10px'}} className="mainpage__icons-item" />
              <FaTwitterSquare style={{margin: '0px 10px 0px 10px'}} className="mainpage__icons-item" />
              <FaYoutubeSquare style={{margin: '0px 10px 0px 10px'}} className="mainpage__icons-item" />
              <span className="mainpage__design">
                By Ivan Monge
            </span>
            </div>
          </div>
      </div>
  )
}

export default Portfolio;
