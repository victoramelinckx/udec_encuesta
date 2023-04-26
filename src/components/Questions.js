import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link, width, height }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link href={link} passHref>
      <div
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        className="relative cursor-pointer"
      >
        <h2 className="capitalize text-xl font-semibold hover:underline">
          {title}
        </h2>
        <FramerImage
          style={{ x: x, y: y }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
          ref={imgRef}
          src={img}
          alt={title}
          width={width}
          height={height}
          className="z-10 h-auto hidden absolute rounded-lg md:!hidden"
        />
      </div>
    </Link>
  );
};

const FrequentlyQuestions = () => {
  const questions = [
    {
      title: "How can I pay?",
      img: "/iqzone/logoblueonly.png",
      link: "https://devdreaming.com/blogs/create-efficient-modal-react-portals",
      answer: "Esto es una prueba. Esto deberia ser una resuesta a la pregunta de arriba, si es que es una pregunta",
      width: 400,
      height: 300,
    },
    {
      title: "How long is one session?",
      img: "/iqzone/logoblueonly.png",
      link: "https://devdreaming.com/blogs/create-efficient-modal-react-portals",
      answer: "Esto es una prueba. Esto deberia ser una resuesta a la pregunta de arriba, si es que es una pregunta",
      width: 400,
      height: 300,
    },
    {
      title: "How long is one session?",
      img: "/iqzone/logoblueonly.png",
      link: "https://devdreaming.com/blogs/create-efficient-modal-react-portals",
      answer: "Esto es una prueba. Esto deberia ser una resuesta a la pregunta de arriba, si es que es una pregunta",
      width: 400,
      height: 300,
    },
    // Add more questions here...
  ];

  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 dark:text-light'>
        Questions
      </h2>
      <div className='w-[75%] mx-auto relative lg:w-[80%] md:w-[85%]'>
        {questions.map((question, index) => (
          <QuestionItem key={index} {...question} index={index} />
        ))}
      </div>
    </div>
  );
};

const QuestionItem = ({ title, img, link, answer, width, height, index }) => {
  const [showText, setShowText] = useState(index===0);

  return (
    <>
      <motion.li
        initial={{ y: 200 }}
        whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
        viewport={{ once: true }}
        className="relative w-full p-4 py-6 my-2 rounded-xl flex items-center
          justify-between bg-light text-dark first:mt-0 border border-solid border-dark
          border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light
          sm:flex-row cursor-pointer"
        onClick={() => setShowText(!showText)}
      >
        <MovingImg title={title} img={img} link={link} width={width} height={height} />
        <span
          className="text-primary font-bold pl-4 dark:text-primaryDark sm:pl-0 xs:text-sm text-2xl"
          onClick={() => setShowText(!showText)}
          >
            +
          </span>
      </motion.li>
  
      {showText && (
        <motion.div
          initial={{ y: 200 }}
          whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          viewport={{ once: true }}
          className="relative w-full p-4 py-6 my-2 rounded-xl bg-light text-dark first:mt-0 border border-solid border-dark
            border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light"
          onClick={() => setShowText(!showText)}
        >
          <p className=" text-l font-semibold mb-2">
            {answer}
          </p>
        </motion.div>
      )}
    </>
    );
};
  
export default FrequentlyQuestions;
  


