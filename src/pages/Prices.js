import React from 'react';
import Card from '../components/Card';
import backgroundImg1 from '../assets/dejan-zakic-d2T9fqXjY-A-unsplash.jpg';
import backgroundImg2 from '../assets/claudio-schwarz-wEGTOSx7YW0-unsplash.jpg';
import backgroundImg3 from '../assets/daniel-von-appen-RUnOynFA1Yk-unsplash.jpg';
import { motion } from 'framer-motion';

const Prices = () => {
  return (
    <motion.div className='prices'
      initial={{ opacity: 0, scale: 0}}
      animate={{opacity: 1, scale: 1}}
      exit={{opacity: 0, scale: 0}}
      transition={{ duration: 1.5 }}
    >
      <Card title="Basico" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." price="$150" background={backgroundImg1} />
      <Card title="Intermedio" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." price="$180" background={backgroundImg2} />
      <Card title="Completo" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." price="$200" background={backgroundImg3} />
    </motion.div>
  )
}

export default Prices;