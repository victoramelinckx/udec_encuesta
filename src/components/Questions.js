import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { TypingText, TitleText } from '../components/context/othersComponents';

const FramerImage = motion(Image);

const MovingImg = ({ title, img, width, height, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);
  const zIndex = 10 - index;

  function handleMouse(event) {
    const boundingRect = event.currentTarget.getBoundingClientRect();
    imgRef.current.style.display = "inline-block";
    x.set(event.clientX - boundingRect.left);
    y.set(event.clientY - boundingRect.top - 10);
  }
  
  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <div>
      <div
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        className="relative cursor-pointer"
      >
        <h2 className="capitalize text-xl sm:text-base font-semibold hover:underline">
          {title}
        </h2>
        <FramerImage
          style={{ x: x, y: y, zIndex: zIndex }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
          ref={imgRef}
          src={img}
          alt={title}
          width={width}
          height={height}
          className=" z-50 h-auto hidden absolute rounded-lg md:!hidden"
        />
      </div>
    </div>
  );
};

const FrequentlyQuestions = () => {
  const questions = [
    // ... questions array ...
    {
      title: "How can I pay?",
      img: "/iqzone/logoblueonly.png",
      answer: "Payments can be made at the store. You can call anytime during normal working hours.",
      width: 200,
      height: 150,
    },
    {
      title: "How long is one session?",
      img: "/iqzone/logoblueonly.png",
      answer: "One session typically lasts for 60 minutes, but it can vary depending on the program and the individual needs of the student.",
      width: 200,
      height: 150,
    },
    {
      title: "What age group do you cater to?",
      img: "/iqzone/logoblueonly.png",
      answer: "We cater to students from ages 6 to 20+ years old, offering personalized educational services for all K-12 subjects.",
      width: 200,
      height: 150,
    },
    {
      title: "Do you offer group sessions?",
      img: "/iqzone/logoblueonly.png",
      answer: "Yes, we offer group sessions, such as our Morning Micro School, which provides an enriching and engaging learning environment in a small-group setting.",
      width: 200,
      height: 150,
    },
    {
      title: "What is the teacher-to-student ratio?",
      img: "/iqzone/logoblueonly.png",
      answer: "Our teacher-to-student ratio varies depending on the program. In one-on-one sessions, the ratio is 1:1, while in our Morning Micro School, we maintain a low teacher-to-student ratio to ensure personalized attention.",
      width: 200,
      height: 150,
    },
    {
      title: "Do you provide support for standardized tests?",
      img: "/iqzone/logoblueonly.png",
      answer: "Yes, we offer comprehensive test preparation programs for standardized tests like the SAT, ACT, and FSA, helping students build knowledge, strategies, and confidence.",
      width: 200,
      height: 150,
    }
  ];

  const [openedQuestion, setOpenedQuestion] = useState(-1);

  return (
    <div className='my-18'>
      <TypingText title="| Questions You Might Have" textStyles=" mb-1 text-center dark:text-light/50" />
      <h2 className='font-bold text-8xl mb-12 w-full text-center md:text-6xl xs:text-4xl md:mb-12 dark:text-light'>
        Questions
      </h2>
      <div className='w-[75%] mx-auto relative lg:w-[80%] md:w-[85%]'>
        {questions.map((question, index) => (
          <QuestionItem
            key={index}
            {...question}
            index={index}
            openedQuestion={openedQuestion}
            setOpenedQuestion={setOpenedQuestion}
          />
        ))}
      </div>
    </div>
  );
};

const QuestionItem = ({
  title,
  img,
  answer,
  width,
  height,
  index,
  openedQuestion,
  setOpenedQuestion,
}) => {
  const handleClick = () => {
    if (openedQuestion === index) {
      setOpenedQuestion(-1);
    } else {
      setOpenedQuestion(index);
    }
  };

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
        onClick={handleClick}
      >
        <MovingImg title={title} img={img} width={width} height={height} />
        <span
          className="text-primary font-bold pl-4 dark:text-primaryDark sm:pl-0 xs:text-sm text-2xl"
          onClick={handleClick}
          >
            +
          </span>
      </motion.li>
  
      {openedQuestion === index && (
        <motion.div
          initial={{ y: 200 }}
          whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          viewport={{ once: true }}
          className="relative w-full p-4 py-6 my-2 rounded-xl bg-light text-dark first:mt-0 border border-solid border-dark
            border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light"
          onClick={handleClick}
        >
          <p className=" text-l sm:text-sm font-semibold mb-2">
            {answer}
          </p>
        </motion.div>
      )}
    </>
  );
};
  
export default FrequentlyQuestions;

