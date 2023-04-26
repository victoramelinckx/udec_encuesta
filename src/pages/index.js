import Link from 'next/link';
import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect'
import Head from 'next/head';


export default function Landing() {
  return (
    <>
      <Head>
        <title>Awesome Portfolio Built with Nextjs</title>
        <meta
          name="description"
          content="Explore CodeBucks's Next.js developer portfolio and 
        discover the latest webapp projects and software engineering articles. 
        Showcase your skills as a full-stack developer and software engineer."
        />
      </Head>
      <TransitionEffect />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Link href="/main">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-dark text-light p-4 px-8 rounded-lg text-lg font-semibold mb-4 
            dark:bg-light dark:text-dark hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light
            border-2 border-solid border-transparent hover:border-dark
            "
          >
            Iq Zone Plus
          </motion.button>
        </Link>
        <Link href="/main">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-dark text-light p-4 px-8 rounded-lg text-lg font-semibold
            dark:bg-light dark:text-dark hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light
            border-2 border-solid border-transparent hover:border-dark
            "
          >
            Iq Zone Tutoring
          </motion.button>
        </Link>
      </div>

    </>
    
  );
}
