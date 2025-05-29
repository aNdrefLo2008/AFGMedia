import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hco'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full violet-pink-gradient p-[1px] rounded-[20px] shadow-card'
      > 
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='rounded-full w-28 h-28 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} id="about">
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        variants={fadeIn("", "", 0.1, 1)}
      >
        Hi there! We're AFG Media, a team that helps small businesses grow. We do digital marketing to tell more people about your offer. We can post content to grow your audience or create the best ROI Ads on your favourite social media. We offer as a bonus an elegant landing page that describes what you do and we optimize for SEO. All of this means more customers and more money for you. Nice to meet you!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, i) => 
          <ServiceCard title={service.title} key={service.title} index={i} {...service}/>
        )}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")