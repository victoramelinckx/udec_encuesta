import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const LoadingPage = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-light dark:bg-dark">
      <div className="flex flex-col items-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-dark text-light p-4 px-8 rounded-lg text-lg font-semibold mb-4 dark:bg-light dark:text-dark hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light"
        >
          <Link href="/subpage1">Subpage 1</Link>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-dark text-light p-4 px-8 rounded-lg text-lg font-semibold dark:bg-light dark:text-dark hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light"
        >
          <Link href="/subpage2">Subpage 2</Link>
        </motion.button>
      </div>
    </div>
  );
};

export default LoadingPage;
