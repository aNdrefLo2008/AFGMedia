import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hco'

import { IoPeopleSharp } from "react-icons/io5";
import { FaHeadset } from "react-icons/fa";
import { FaMoneyCheck } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

const icons = [
  <IoPeopleSharp className="text-black dark:text-white w-16 h-16 object-contain" />,
  <FaHeadset className="text-black dark:text-white w-16 h-16 object-contain" />,
  <FaMoneyCheck className="text-black dark:text-white w-16 h-16 object-contain" />,
  <FaMoneyBillTrendUp className="text-black dark:text-white w-16 h-16 object-contain" />,
];

const ServiceCard = ({ index, title }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full transition-colors duration-500 dark:bg-gradient-to-r from-blue-900 to-green-900 p-[1px] rounded-[20px] shadow-experiment-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-white transition-colors duration-500 dark:bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          {icons[index % icons.length]}
          <h3 className='text-black transition-colors duration-500 dark:text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <div className='bg-white transition-colors duration-500 dark:bg-black mb-4'>
      <motion.div variants={textVariant()} id="about">
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        className='mt-4 text-gray-700 transition-colors duration-500 dark:text-secondary text-[17px] max-w-3xl leading-[30px]'
        variants={fadeIn("", "", 0.1, 1)}
      >
        Hi there! We're AFG Media, a team that helps businesses grow. We do digital marketing to tell more people about your offer. We can post content to grow your audience or create websites that will leave your clients positively amazed. All of this means more customers and more money for you. You do not have to worry anymore about the pain of finding new clients because we are going to handle all that stress. We run a zero-risk plan, so if we do not achieve your desired results you do not have to pay nothing. Nice to meet you!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, i) => 
          <ServiceCard title={service.title} key={service.title} index={i} {...service}/>
        )}
      </div>
    </div>
  )
}

export default SectionWrapper(About, "about")