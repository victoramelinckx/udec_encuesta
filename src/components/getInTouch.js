import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from '../components/context/styless';
import { footerVariants } from '../../utils/motion';

const GetInTouch = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      const googleSheetURL = 'https://script.google.com/macros/s/AKfycby6V4KG9qOxfxOongR02G2RXbdgMau149nPiSxWDd7rPnJXGRc0BIdSLzEcwq1fx74/exec';

      const response = await fetch(googleSheetURL, {
        method: 'POST',
        mode: 'no-cors',
        body: new URLSearchParams({ email }),
      });

      console.log('Email submitted:', email);
      setEmail('');
    } else {
      console.log('Please enter a valid email address');
    }
  };

  return (
    <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
      <motion.div
        variants={footerVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} py-8 relative max-w-7xl mx-auto`}
      >
        <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
          <h4 className="font-bold text-[44px] md:text-[40px] md:text-center text-dark dark:text-light">
            Get in touch with us
          </h4>
          <form onSubmit={handleSubmit} className="flex flex-row md:items-center  md:justify-center gap-5 flex-wrap">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-4 px-6 bg-dark/10 dark:bg-light/10 rounded-[32px] text-dark dark:text-light flex-grow"
              placeholder="Enter your email"
              required
            />
    
            <div className="flex max-w-sm md:w-auto mt-5 md:mt-0">
              <button type="submit" className="flex items-center w-full h-fit py-4 px-4 bg-dark/10 dark:bg-light/10 border border-solid dark:border-light hover:scale-105 rounded-[32px] gap-[12px]">
                <span className="font-bold text-[16px] text-dark dark:text-light">
                  Contact Us
                </span>
              </button>
            </div>
    
          </form>
          <div className="mb-[50px] h-[2px] bg-dark opacity-10" />
        </div>
      </motion.div>
    </div>
    
  );
  
};

export default GetInTouch;
