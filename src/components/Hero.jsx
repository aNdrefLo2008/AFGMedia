import { motion } from 'framer-motion'
import React from 'react'


import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import { ad } from '../assets'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='bg-white transition-colors duration-500 dark:bg-black relative w-full h-screen mx-auto flex justify-center items-center flex-col gap-6'>
      <div className={`${styles.paddingX} max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-gray-800 transition-colors duration-500 dark:bg-gray-200'/>
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-gray-800 to-transparent transition-colors duration-500 dark:from-gray-200'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>Want to <span className='animated-gradient text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-indigo-800 to-slate-500 dark:from-gray-200 dark:via-indigo-300 dark:to-slate-400'>
            10x
          </span> your Sales?</h1>
            <p className={`${styles.heroSubText} mt-2 text-black transition-colors duration-500 dark:text-white-100 xs:block hidden`}>
              We ensure the fastest growth possible through establishing a digital footprint for your business
            </p>
        </div>
      </div>

      {/*<video width="320" height="240" controls className={`${styles.paddingX} absolute inset-0 lg:top-[350px] top-[480px] lg:w-[1000px] w-[800px] mx-auto flex flex-row items-start`}>
        <source src={ad} type="video/ogg"/>
        Your browser does not support the video tag.
      </video>*/}
        <div className="button-shadow transition hover:-translate-y-1 duration-500 hover:scale-110 w-4/5 xl:w-3/5 rounded-3xl">
          <div className='inner-button px-4 py-6 rounded-3xl font-bold dark:hover:bg-gray-200 duration-500 transition hover:bg-gray-900'>
            <Link to={"https://calendly.com/afgmedia15/introductory-call"}>
              <h1 className='lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] font-semibold text-center'>
                Start working with us for free
              </h1>
            </Link>
          </div>
        </div>


        <div className="button-shadow duration-500 transition animated-border w-4/5 xl:w-3/5 rounded-3xl">
          <div className='bg-gray-300 dark:bg-tertiary px-4 py-6 rounded-3xl shadow-card'>
            <a href="#contact">
              <h1 className={`${styles.heroSubText} text-center`}>
                Get in touch
              </h1>
            </a>
          </div>
        </div>


      
      <div className='absolute bottom-0 w-full justify-center flex items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl flex justify-center items-start p-2 border-4 border-gray-800 transition-colors duration-500 dark:border-secondary'>
            <motion.div animate={{
              y: [0, 24, 0]
              }} 
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-gray-800 transition-colors duration-500 dark:bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero