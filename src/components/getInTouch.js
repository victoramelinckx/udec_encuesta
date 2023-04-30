import { motion } from 'framer-motion';
import { useState } from 'react';
import axios from 'axios';
import styles from '../components/context/styless';
import { footerVariants } from '../../utils/motion';

const GetInTouch = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [notification, setNotification] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    setMessage(data.message);

    // Handle response and update notification state
    if (res.status === 200) {
      setNotification('Email received.');
    } else {
      setNotification('Invalid email or something went wrong.');
    }

    // Reset email input field
    setEmail('');
  }

  return (
    <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
      <motion.div
        variants={footerVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} py-12 relative max-w-7xl mx-auto`}
      >
        <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
          <h4 className="font-bold text-[44px] md:text-[40px] md:text-center text-dark dark:text-light">
            Get in touch with us
          </h4>
          {notification && (
            <div className="text-center text-green-500">
              {notification}
            </div>
          )}
          <form className="flex flex-row md:items-center md:justify-center gap-5 flex-wrap">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-4 px-6 bg-dark/10 dark:bg-light/10 rounded-[32px] text-dark dark:text-light flex-grow"
              placeholder="Enter your email"
              required
            />
    
            <div className="flex max-w-sm md:w-auto mt-5 md:mt-0">
              <button type="button" onClick={handleSubmit} className="flex items-center w-full h-fit py-4 px-4 bg-dark/10 dark:bg-light/10 border border-solid dark:border-light hover:scale-105 rounded-[32px] gap-[12px]">
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
