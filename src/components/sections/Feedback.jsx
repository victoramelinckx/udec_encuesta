import { motion } from 'framer-motion';
import styles from '../../components/context/styless';
import { staggerContainer, fadeIn, zoomIn } from '../../../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings} max-w-7xl mx-auto`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-row md:flex-col md:items-center gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] max-w-[370px] flex justify-end flex-col items-start bg-dark/5 dark:bg-light/5 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] dark:border-[#a3a3a3] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[32px] sm:leading-[40.32px] leading-[36.32px] text-dark dark:text-light">
            Alexandra
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-dark dark:text-light/50">
            Founder IQ Zone
          </p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[18px] text-[23px] sm:leading-[25.6px] leading-[39.6px] text-dark dark:text-light">
          “Inspired by my family of educators, 
          I founded IQ Zone to help students thrive academically. 
          Join us in unlocking your child&apos;s potential through
          innovative tools and personalized tutoring.”
        </p>
      </motion.div>


      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <img
          src="/founder.jpg"
          alt="planet-09"
          className="w-full h-[610px] min-h-[210px] object-cover rounded-[40px]"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="hidden md:block absolute -left-[10%] top-[3%]"
        >
          <img
            src="/images/sections/stamp.png"
            alt="stamp"
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
