import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import AnimatedText from './AnimatedText';
import profilePic from '../../public/images/profile/developer-pic-2.jpg';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TypingText, TitleText } from '../components/context/othersComponents';
import useThemeSwitcher from './hooks/useThemeSwitcher';
import StarRatings from 'react-star-ratings';

SwiperCore.use([Navigation]);

const Testimonial = () => {
  const testimonials = getTestimonials();
  const [mode] = useThemeSwitcher();

  const arrowColor = mode === 'dark' ? '#ffffff' : '#000000'; // Set the arrow color based on the theme

  return (
    <>
      <div className={`text-dark mb-20 ${mode === 'dark' ? 'dark:text-light' : ''}`}>
        <motion.div className="text-center py-10">
          <AnimatedText
            text="Testimonials"
            className="!text-6xl
            xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl"
          />
          <TypingText
            title={<>| read what Our Students Have To Say</>}
            textStyles="mt-4 text-center dark:text-light/50"
          />
        </motion.div>
        <div className="flex max-w-5xl mx-auto text-center group">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          navigation={testimonials.length > 3 ? true : false}
          className="w-full"
          containerClassName={mode === 'dark' ? 'swiper-dark' : 'swiper-light'}
          style={{
            '--swiper-navigation-color': arrowColor,
            '--swiper-navigation-size': '22px',
            '--swiper-navigation-prev-transform': 'translateX(-15px)', // Add padding for the previous arrow
            '--swiper-navigation-next-transform': 'translateX(15px)',
          }}
          breakpoints={{
            // When the screen width is >= 640px (sm), show 1 slide
            10: { slidesPerView: 1, spaceBetween: 10 },
            // When the screen width is >= 768px (md), show 2 slides
            545: { slidesPerView: 2, spaceBetween: 20 },
            // When the screen width is >= 1024px (lg), show 3 slides
            900: { slidesPerView: 3, spaceBetween: 20 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>{testimonial}</SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
    </>
  );
};

const getTestimonials = () => {
  const data = [
    {
      name: 'John Doe',
      testimonial: 'Lorem ipsu whatever Lorem ipsu whatever Lorem ipsu whatever Lorem ipsu whatever Lorem ipsu whatever Lorem ipsu whatever Lorem ipsu whatever',
      rating: 4.5,
    },
    {
      name: 'Jane Smith',
      testimonial: 'Lorem ipsu whatever Lorem ipsu whatever Lorem ipsu whatever Lorem ipsu whatever Lorem ipsu whatever Lorem ipsu whatever Lorem ipsu whatever',
      rating: 4.5,
    },
    {
      name: 'Mark Johnson',
      testimonial: 'Lorem ipsu whatever Lorem ipsu whatever Lorem ipsu whatever Lorem ipsu whatever Lorem ipsu whatever Lorem ipsu whatever Lorem ipsu whatever',
      rating: 5,
    },
    {
      name: 'Sara Adams',
      testimonial: 'Lorem ipsu whatever Lorem ipsu whatever Lorem ipsu whatever Lorem ipsu whatever Lorem ipsu whatever Lorem ipsu whatever Lorem ipsu whatever',
      rating: 4.5,
    },
    {
      name: 'David Brown',
      testimonial: 'Lorem ipsu whatever Lorem ipsu whatever Lorem ipsu whatever Lorem ipsu whatever Lorem ipsu whatever Lorem ipsu whatever Lorem ipsu whatever',
      rating: 3.5,
    }
  ];

  const primaryColor = "#0464eb";

  return data.map(({ name, testimonial, rating }, index) => (
    <div className='w-[100%] mx-auto relative lg:w-[95%] md:w-[85%]' key={index}>
      <div
        className="bg-dark/10 dark:bg-light/5 cursor-pointer p-8 group-hover:blur-sm hover:!blur-none transform 
        group-hover:scale-85 hover:!scale-100 transition-all duration-500 rounded-xl
        min-w-[300px] md:min-w-[250px] sm:min-w-[180px] xs:min-w-[140px]
        "
      >
        <Image
          src={profilePic}
          alt="Codebucks"
          className="w-20 lg:w-16 md:w-14 sm:w-12 mx-auto rounded-full border-2 border-solid border-transparent dark:border-light"
        />
        <h4 className="uppercase text-xl lg:text-lg md:text-base sm:text-sm font-bold">{name}</h4>
        <p className="text-base lg:text-sm md:text-xs sm:text-2xs leading-7 lg:leading-6 md:leading-5 sm:leading-4 my-3 font-normal dark:opacity-70">
          {testimonial}
        </p>
        <StarRatings
          rating={rating}
          starRatedColor={primaryColor}
          numberOfStars={5}
          name="rating"
          starDimension="20px"
          starSpacing="2px"
          className="items-center"
        />
      </div>
    </div>
  ));
};

export default Testimonial;

