import { motion } from 'framer-motion';
import {TitleText, TypingText } from '../context/othersComponents';
import styles from '../../components/context/styless';
import { staggerContainer, fadeIn, planetVariants } from '../../../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10 max-w-7xl mx-auto`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| Where to find us" textStyles="text-center dark:text-light/50" />
      <TitleText
        title={(
          <>Find us at Doral here especifically this location
          </>
        )}
        textStyles="text-center dark:text-light"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/images/sections/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="images/sections/people-01.png" alt="people" className="w-full h-full" />
        </div>
        
      </motion.div>
    </motion.div>
  </section>
);

export default World;
