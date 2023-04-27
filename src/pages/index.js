import Link from 'next/link';
import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';
import Head from 'next/head';
import Logo from '@/components/Logo';
import AnimatedText from '@/components/AnimatedText';
import { TypingText } from '@/components/context/othersComponents';
import styles from '@/components/context/styless';

export default function LandingTwo() {
  return (
    <>
      <Head>
        <title>IQ Zone Tutoring and School Supplies Website</title>
        <meta
          name="landing"
          content="Explore CodeBucks's Next.js developer portfolio and 
        discover the latest webapp projects and software engineering articles. 
        Showcase your skills as a full-stack developer and software engineer."
        />
      </Head>
      <TransitionEffect />
      <div className="flex flex-col items-center min-h-screen bg-iqblue/10">
        <div className="flex justify-center w-full mt-20">
          <Logo />
        </div>
        <div className="pt-10">
          <div className="text-center">
            <AnimatedText
              text="IQ Zone"
              className="!text-2xl text-iqblue
            xl:!text-xl lg:!text-center lg:!text=xl md:!text-xl sm:!text-xl"
            />
            <div className='text-md text-iqblue font-semibold'>
            Your Child is Our Priority!
            </div>
          </div>
        </div>

        <div className='w-[20%] lg:w-[45%] md:w-[40%] sm:w-[65%] justify-center pt-10'>
        <Link href="/store" passHref>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="w-full cursor-pointer"
          >
            <div
              className="bg-iqblue text-light p-3 px-8 rounded-full text-lg font-semibold mb-4 
             hover:bg-iqzone hover:text-iqblue
              border-2 border-solid border-transparent hover:border-iqblue flex items-center justify-center"
            >
              IQ Zone
            </div>
          </motion.div>
        </Link>
        <Link href="/main" passHref>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="w-full cursor-pointer"
          >
            <div
              className="bg-iqblue text-light p-3 px-8 rounded-full text-lg font-semibold mb-4 
              hover:bg-iqzone hover:text-iqblue
               border-2 border-solid border-transparent hover:border-iqblue flex items-center justify-center"
            >
              IQ Zone Plus
            </div>
          </motion.div>
        </Link>

        </div>

      </div>
        
    </>
  );
}