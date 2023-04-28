import Link from 'next/link';
import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';
import Head from 'next/head';
import Logo from '@/components/Logo';
import AnimatedText from '@/components/AnimatedText';
import { TypingText } from '@/components/context/othersComponents';
import styles from '@/components/context/styless';

function CustomButton({ href, text, imageUrl }) {
  return (
    <Link href={href} passHref>
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
          <img
            src={imageUrl}
            alt="icon"
            className="h-8 w-8 ml-[-1] rounded-full object-cover"
          />
          <span className="w-full text-center">{text}</span>
        </div>
      </motion.div>
    </Link>
  );
}

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
              text="IQ Zone Shop"
              className="!text-2xl text-iqblue dark:!text-iqblue
            xl:!text-xl lg:!text-center lg:!text=xl md:!text-xl sm:!text-xl"
            />
            <div className='text-md text-iqblue font-semibold'>
            Select Your School
            </div>
          </div>
        </div>

        <div className='w-[20%] lg:w-[50%] md:w-[45%] sm:w-[70%] justify-center pt-10'>
        
        <CustomButton href="/store" text="Born 2 Learn" imageUrl="/Schools/1.jpg" />
        <CustomButton href="/main" text="Dr Rolando Espinosa K-8" imageUrl="/Schools/2.jpg" />
        <CustomButton href="/main" text="Dr Toni Bilbao K-8" imageUrl="/Schools/3.jpg" />
        <CustomButton href="/main" text="Eugenia B.Thomas K-8" imageUrl="/Schools/4.jpg"/>
        <CustomButton href="/main" text="John I. Smith K-8" imageUrl="/Schools/5.jpg" />
        <CustomButton href="/main" text="Ronald Reagan Sr. High School" imageUrl="/Schools/6.jpg" />

        </div>

      </div>
        
    </>
  );
}