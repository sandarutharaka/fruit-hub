import React from 'react'
import { motion } from 'framer-motion'
import { FaFacebook, FaInstagram, FaLeaf, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-primary/10 mt-12 py-12'>
      <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition= {{duration:1, delay: 0.2}}
      className='container flex justify-between items-center'>
      {/* logo section */}
        <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
          <p className='text-primary'>Fruit</p>
          <p className='text-secondary'>Hub</p>
          <FaLeaf className='text-green-500'/>
        </div>
      {/* Social section */}
      <div className='text-3xl flex gap-4 items-center mt-6 text-gray-700'>
        <FaInstagram/>
        <FaTwitter/>
        <FaFacebook/>
        <FaLinkedin/>
      </div>
      </motion.div>
    </footer>
  )
}

export default Footer