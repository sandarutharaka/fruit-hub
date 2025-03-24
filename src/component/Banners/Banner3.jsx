import React from 'react'
import BannerImg from '../../assets/banner-bg.jpg'
import { motion } from 'framer-motion'
import { FadeLeft } from '../../utility/animation'
import { FaShare } from 'react-icons/fa';
import { IoBagHandleOutline } from 'react-icons/io5';

const bgStyle = {
  backgroundImage: `url(${BannerImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};
const Banner3 = () => {
  return (
     <section className='container mb-12'>
        <div 
        style={bgStyle}
        className="container grid  grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl bg-fixed">
            {/* blank div */}
            <div></div>

            {/* banner info */}
            <div className='flex flex-col justify-center'>
                <div className='text-center md:text-left space-y-4 lg:max-w[400px]'>
                    <motion.h1 
                    variants={FadeLeft(0.5)}
                    initial="hidden"
                    whileInView={"visible"}
                    viewport={{once:true}}
            
                    className='text-3xl lg:text-6xl font-bold uppercase'>Get fresh Fruits Today</motion.h1>
                    <motion.p
                    variants={FadeLeft(0.7)}
                    initial="hidden"
                    whileInView={"visible"}
                    viewport={{once:true}}
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam possimus consectetur nulla provident obcaecati corrupti eligendi quis quaerat, explicabo quidem tenetur repellendus, impedit quia recusandae dolore. Tempora amet a aspernatur.</motion.p>
                    <motion.div 
                     variants={FadeLeft()}
                     initial='hidden'
                     animate='visible'
                     className='flex justify-center md:justify-start'>
                         <button className='primary-btn flex items-center gap-2'>
                             <span><IoBagHandleOutline/> </span>
                             Order Now
                         </button>
                    </motion.div>                   
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner3