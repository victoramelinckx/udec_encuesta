
import { motion } from 'framer-motion';
import styles from '../../context/styless';
import { fadeIn } from '../../../../utils/motion';
import Image from 'next/image';


const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <div className="absolute w-full h-full">
      <Image
        src={imgUrl}
        alt="planet-04"
        width={1000}
        height={1000}
        layout="responsive"
        className="rounded-[24px]"
      />
    </div>
    {active !== id ? (
      <h3 className="font-semibold sm:text-[16px] text-[26px] text-white absolute z-0 md:bottom-2 sm:bottom-3 bottom-20 md:rotate-[0deg] rotate-[-90deg] origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <div
          className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
        >
          <div className="w-1/2 h-1/2">
            <Image
              src="/images/sections/headset.svg"
              alt="headset"
              width={30}
              height={30}
            />
          </div>
        </div>
        <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
          Enter Metaverse
        </p>
        <h2 className="mt-[24px] font-semibold sm:text-[18px] text-[32px] text-white">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);



export default ExploreCard;
