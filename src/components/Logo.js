import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion";
import { IQZoneIcon } from './Icons';

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
      <MotionLink href="/main"
      className='w-24 h-24 md:w-16 md:h-16 bg-iqzone text-light flex items-center justify-center
      rounded-full text-2x1 font-bold border border-solid border-transparent dark:border-light
      '    
      whileHover={{
        scale:1.1,
        backgroundColor: ["#fcb045", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#9abe62"],
        transition:{duration:2, repeat: Infinity}
      }}
      >
      <IQZoneIcon/>
      </MotionLink>
    </div>
  )
}

export default Logo