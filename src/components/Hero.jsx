import { motion } from 'framer-motion'
import React from 'react'


import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import { ad } from '../assets'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto flex justify-center items-center flex-col gap-6'>
      <div className={`${styles.paddingX} max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#ff00cc]'/>
          <div className='w-1 sm:h-80 h-40 rose-gradient'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, we are <span className='bg-gradient-to-r text-transparent bg-clip-text from-[#ff00cc] to-[#333399]'>AFG Media</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 xs:block hidden`}>
            We take care of all your boring marketing campaigns and ensure the fastest growth possible for your business
          </p>
        </div>
      </div>

      {/*<video width="320" height="240" controls className={`${styles.paddingX} absolute inset-0 lg:top-[350px] top-[480px] lg:w-[1000px] w-[800px] mx-auto flex flex-row items-start`}>
        <source src={ad} type="video/ogg"/>
        Your browser does not support the video tag.
      </video>*/}
        <div className='hover:bg-gray-200 shadow-card px-4 py-6 w-4/5 xl:w-3/5 rounded-3xl bg-white font-bold'>
          <a href="#contact">
            <h1 className={`${styles.heroSubText} text-gray-800 text-center`}>
              Start working with us for free
            </h1>
          </a>
        </div>

        <div className='violet-pink-gradient shadow-card p-[1px] w-4/5 xl:w-3/5 rounded-3xl'>
          <div className='transition-colors duration-500 hover:bg-gradient-to-r from-[#ff00cc] to-[#333399] bg-tertiary shadow-card px-4 py-6 rounded-3xl'>
            <a href="#contact">
              <h1 className={`${styles.heroSubText} text-center`}>
                Get in touch
              </h1>
            </a>
          </div>
        </div>
      
      <div className='absolute bottom-0 w-full justify-center flex items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl flex justify-center items-start p-2 border-4 border-secondary'>
            <motion.div animate={{
              y: [0, 24, 0]
              }} 
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero