import styles from '../../context/styless';

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-dark/10 dark:bg-light/10`}
    >
      <p className="font-bold text-[20px] text-dark dark:text-light">
        {number}
      </p>
    </div>
    <p className="flex-1 ml-[30px] font-normal sm:text-[16px] text-[18px] text-[#353434] dark:text-light leading-[32.4px]">
      {text}
    </p>
  </div>
);

export default StartSteps;
