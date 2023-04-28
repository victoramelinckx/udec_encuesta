import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion'
import Lilcon from './Lilcon'


const Details = ({type, time, place, info}) => {
  
  const ref = useRef(null);

  return <li ref={ref} className='my-8 first:mt-0 last:nb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:wd-[80%]'>
    <Lilcon reference={ref}/>
    <motion.div
    initial={{y:50}}
    whileInView={{y:0}}
    transition={{duration:0.5, type:"spring"}}
    >
      <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
        {type}
      </h3>
      <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
        {time} | {place}
      </span>
      <p className='font-medium w-full md:text-sm'>
        {info}
      </p>
    </motion.div>
  </li>
}

const Education = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )

  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
        Services
      </h2>

      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

        <motion.div 
        style={{scaleY: scrollYProgress}}
        className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light
        md:w-[2px] md:left-[30px] xs:left-[20px]
        "/>

        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>

        <Details
          type="One on One Lessons"
          time="6-20+ years old"
          place="IQ Zone Plus"
          info="Personalized lessons tailored to each student's individual needs and learning pace, covering a wide range of subjects and skills. Our experienced instructors work closely with students to help them achieve their academic and personal goals."
        />

        <Details
          type="Morning Micro School"
          time="6-20+ years old"
          place="IQ Zone Plus"
          info="A small-group learning environment that focuses on fostering creativity, critical thinking, and collaboration. Morning Micro School is designed to complement traditional schooling by offering engaging, project-based learning experiences in a supportive and interactive setting."
        />

        <Details
          type="SAT / ACT / FSA Prep"
          time="14-20+ years old"
          place="IQ Zone Plus"
          info="Our comprehensive test preparation program aims to equip students with the knowledge, strategies, and confidence needed to excel in the SAT, ACT, and FSA exams. Our expert instructors provide personalized guidance, insights, and practice materials to help students reach their full potential."
        />

        </ul>

      </div>

    </div>
  )
}

export default Education
