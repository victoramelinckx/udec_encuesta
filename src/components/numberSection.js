import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import Layout from './Layout';


const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const NumberSection = () => {
  return (
    <>
      <div className="w-[80%] mx-auto relative lg:w-[85%] md:w-[85%] dark:text-light">
        <Layout className="pt-16">
          <div className="flex flex-row items-center justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
            <div className="flex flex-col items-center">
              <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                <AnimatedNumbers value={350} />+
              </span>
              <h2
                className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
          xs:text-sm"
              >
                satisfied students
              </h2>
            </div>

            <div className="flex flex-col items-center">
              <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                <AnimatedNumbers value={40} />+
              </span>
              <h2
                className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
          xs:text-sm"
              >
                projects completed
              </h2>
            </div>

            <div className="flex flex-col items-center">
              <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                <AnimatedNumbers value={19} />+
              </span>
              <h2
                className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
          xs:text-sm"
              >
                years of experience
              </h2>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
};


export default NumberSection