import Link from 'next/link';
import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';


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
      <div className="flex flex-col items-center min-h-screen bg-dark">
        <div className="pt-60">
          <div className="text-center">
            <AnimatedText
              text="Pregunta rápida"
              className="!text-2xl !text-light/90
            xl:!text-xl lg:!text-center lg:!text=xl md:!text-xl sm:!text-xl"
            />
              <div
                className="p-3 px-8 text-lg text-light/90 font-semibold mb-4 
               flex items-center justify-center"
              >
                ¿Eres dueño de alguna empresa?
              </div>
          </div>
        </div>

        <div className='w-[20%] lg:w-[30%] md:w-[30%] sm:w-[30%] flex flex-row justify-center pt-2 space-x-4'>
        <Link href="/si" passHref>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            <div
              className="bg-light/90 text-dark p-3 px-6 rounded-full text-lg font-semibold mb-4 
             hover:bg-dark hover:text-light/90
              border-2 border-solid border-transparent hover:border-light/90 flex items-center justify-center"
            >
              Si
            </div>
          </motion.div>
        </Link>
        <Link href="/no" passHref>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="w-full cursor-pointer"
          >
            <div
              className="bg-light/90 text-dark p-3 px-6 rounded-full text-lg font-semibold mb-4 
             hover:bg-dark hover:text-light/90
              border-2 border-solid border-transparent hover:border-light/90 flex items-center justify-center"
            >
              No
            </div>
          </motion.div>
        </Link>

        </div>

      </div>
        
    </>
  );
}