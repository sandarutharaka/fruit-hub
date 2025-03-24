import React from 'react'
import BannerImg from '../../assets/fruit-plate2.png'
import { motion } from 'framer-motion'
import { FadeLeft, FadeUp } from '../../utility/animation'


const Banner2 = () => {
  return (
    <section className=''>
        <div className="container grid grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24">
          
            {/* banner info */}
            <div className='flex flex-col justify-center'>
                <div className='text-center md:text-left space-y-4 lg:max-w[400px]'>
                    <motion.h1 
                    variants={FadeUp(0.5)}
                    initial="hidden"
                    whileInView={"visible"}
                    viewport={{once:true}}
            
                    className='text-3xl lg:text-6xl font-bold uppercase'>Online fruit Store</motion.h1>
                    <motion.p
                    variants={FadeUp(0.7)}
                    initial="hidden"
                    whileInView={"visible"}
                    viewport={{once:true}}
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam possimus consectetur nulla provident obcaecati corrupti eligendi quis quaerat, explicabo quidem tenetur repellendus, impedit quia recusandae dolore. Tempora amet a aspernatur.</motion.p>
                    <motion.p
                    variants={FadeUp(0.9)}
                    initial="hidden"
                    whileInView={"visible"}
                    viewport={{once:true}}
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis facere voluptas harum necessitatibus veniam unde.</motion.p>
                    <motion.div 
                     variants={FadeUp(1.5)}
                     initial='hidden'
                     animate='visible'
                     className='flex justify-center md:justify-start'>
                         <button className='primary-btn '>
                             
                             Download The App
                         </button>
                    </motion.div>                   
                </div>
            </div>
              {/* banner img */}
            <div className='flex justify-center items-center'>
                <motion.img 
                initial={{opacity:0, x:200, rotate: 75}}
                whileInView={{opacity:1, x:0, rotate: 0}}
                transition={{duration:1 ,delay:0.2}}
                src={BannerImg} alt="" className='w-[350px] md:max-[500px] h-full object-cover drop-shadow' />
            </div>

        </div>
    </section>
  )
}

export default Banner2