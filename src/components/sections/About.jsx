import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../../components/context/styless';
import { StartSteps, TitleText, TypingText } from '../context/othersComponents';
import { staggerContainer, fadeIn, planetVariants } from '../../../utils/motion';
import { ArrowDown } from '../Icons';

const About = () => (
  <section className={`${styles.paddings} relative z-10 max-w-7xl mx-auto`}>
    <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About IQ Zone" textStyles="text-center dark:text-light/50" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal 2xl:text-[24px] xl:text-[24px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[24px] text-center text-secondary-white dark:text-light"
      >
        <span className="font-extrabold text-dark dark:text-light">
          IQ Zone</span>
          {" is your child's key to unlocking academic success and realizing their full potential. "}
         {"Our one-on-one tutoring approach, combined with innovative methodologies, "}
         {"helps students feel confident and excel in the world of learning."}
        {"At "} <span className="font-extrabold text-dark dark:text-light">{"IQ Zone"}</span>{", "}
        {"we empower children to overcome challenges and embrace the "}
        <span className="font-extrabold text-dark dark:text-light">{"excitement of education"}</span>
        {" by providing tailored support for all K-12 subjects."}
        {"With our certified and experienced educators, you can trust that your child's academic dreams will become a reality."}
        {"Let's "} <span className="font-extrabold text-dark dark:text-light">{"discover"}</span>
         {" your child's potential together by scrolling down."}
      </motion.p>

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      >
        <ArrowDown className={"fill-dark/50 dark:fill-light/50"} />
      </motion.div>

    </motion.div>

    </div>

  </section>
);

export default About;
