import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../../components/context/styless';
import { StartSteps, TitleText, TypingText } from '../context/othersComponents';
import { staggerContainer, fadeIn, planetVariants } from '../../../utils/motion';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10 max-w-7xl mx-auto`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-row md:flex-col sm:flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <Image
        src="/images/get-started.png"
        width={600}
        height={600}
        alt="Descripción de la imagen"
        className="object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| How IQ Zone Works" textStyles="dark:text-light/50"/>
        <TitleText title={<>Get started with IQ Zone</>} className=" dark:text-light" />

        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          <StartSteps number={1} text="Schedule a free consultation to discuss your child's academic needs and goals" /> 
          <StartSteps number={2} text="We'll match your child with an expert tutor tailored to their learning style and requirements" />
          <StartSteps number={3} text="Begin the transformative journey towards academic success and unlocking your child's full potential" />
        </div>
      
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
