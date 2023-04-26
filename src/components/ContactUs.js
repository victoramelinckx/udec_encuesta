import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from '../components/context/styless';
import { footerVariants } from '../../utils/motion';

const GetInTouch = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && name && subject && number) {
      const apiKey = '1f27e4024423aab49f54879cbe4de37a-us17';
      const listId = 'ca6fc31049';
      const mailchimpURL = `https://us17.api.mailchimp.com/3.0/lists/${listId}/members`;
  
      const subscriber = {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: name,
          PHONE: number,
          SUBJECT: subject,
        },
      };
  
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `apikey ${apiKey}`,
        },
        body: JSON.stringify(subscriber),
      };
  
      try {
        const response = await fetch(mailchimpURL, requestOptions);
        if (response.ok) {
          console.log('Form submitted:', { email, name, subject, number });
          setEmail('');
          setName('');
          setSubject('');
          setNumber('');
        } else {
          console.log('Error submitting form:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      console.log('Please fill out all the fields');
    }
  };
  

  return (
    <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-[90%] sm:w-[80%]'>
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



