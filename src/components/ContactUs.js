import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from '../components/context/styless';
import { footerVariants } from '../../utils/motion';

const GetInTouch = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [number, setNumber] = useState('');
  const [notification, setNotification] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Update the API endpoint and request payload according to your implementation
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, number, subject }),
    });

    // Handle response and update notification state
    if (res.status === 200) {
      setNotification('Message sent successfully.');
    } else {
      setNotification('Invalid input or something went wrong.');
    }

    // Reset input fields
    setName('');
    setEmail('');
    setNumber('');
    setSubject('');
  };
  

  return (
    <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-[90%] sm:w-[80%] my-18'>
      <motion.div
        variants={footerVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} py-8 relative max-w-7xl mx-auto`}
      >
        <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
          <h4 className="font-bold md:text-[40px] md:text-center text-[44px] text-dark dark:text-light">
            Get in touch with us
          </h4>
          {notification && (
            <div className="text-center text-green-500">
              {notification}
            </div>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col md:items-center gap-5">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="py-4 px-6 bg-dark/10 dark:bg-light/10 rounded-[32px] text-dark dark:text-light flex-grow"
              placeholder="Enter your name"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-4 px-6 bg-dark/10 dark:bg-light/10 rounded-[32px] text-dark dark:text-light flex-grow"
              placeholder="Enter your email"
              required
            />
            <input
              type="tel"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="py-4 px-6 bg-dark/10 dark:bg-light/10 rounded-[32px] text-dark dark:text-light flex-grow"
              placeholder="Enter your phone number"
              required
            />
            <textarea
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="py-4 px-6 bg-dark/10 dark:bg-light/10 rounded-[32px] text-dark dark:text-light flex-grow"
              placeholder="Enter the subject"
              required
              rows={3}
            />
            
            <div className="flex">
              <button type="submit" className="flex items-center h-fit py-4 px-4 bg-dark/10 dark:bg-light/10 border border-solid dark:border-light hover:scale-105 rounded-[32px] gap-[12px]">
                <span className="font-bold text-[16px] text-dark dark:text-light">
                  Contact Us
                </span>
              </button>
            </div>
            </form>
          <div className="mb-[50px] h-[2px] bg-dark dark:bg-light opacity-10" />
        </div>
      </motion.div>
    </div>
  );
};

export default GetInTouch;



