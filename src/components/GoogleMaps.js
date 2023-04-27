// components/GoogleMap.js
import React, { useRef } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { motion } from 'framer-motion';
import { TypingText, TitleText } from '../components/context/othersComponents';
import styles from '../components/context/styless';
import { staggerContainer, fadeIn } from '../../utils/motion';
import darkMapStyle from './MapStyle';
import Link from 'next/link';

const defaultCenter = { lat: 25.82682890067057, lng: -80.35751778628457 }; // Replace with your desired location
const defaultZoom = 16;

const MyGoogleMap = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const addressRef = useRef();

  const copyToClipboard = () => {
    const textarea = document.createElement('textarea');
    textarea.value = 'The address to copy to the clipboard';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  };

  return (
    <section className={`${styles.paddings} relative z-10 max-w-7xl mx-auto`}>
      <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Where to find us" textStyles="text-center dark:text-light/50" />
        <TitleText
          title={
            <>Find us in Doral at this specific location</>
          }
          textStyles="text-center dark:text-light"
        />
        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[550px] rounded"
        >
          <div className="w-full h-full rounded-2xl overflow-hidden">
            <LoadScript googleMapsApiKey={apiKey}>
              <GoogleMap
                mapContainerStyle={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 'inherit',
                }}
                center={defaultCenter}
                zoom={defaultZoom}
                options={{
                  styles: darkMapStyle,
                }}
              >
                <Marker position={defaultCenter} />
              </GoogleMap>
            </LoadScript>
          </div>
        </motion.div>
        <div className="flex justify-center mt-6">
        <button
          type="submit"
          className="flex items-center h-fit py-4 px-6 bg-dark/10 hover:scale-105 dark:bg-light/10 dark:text-light rounded-[32px] gap-[12px]"
        >
          <Link href="https://www.google.com/maps/place/I.Q.ZONE/@25.8269685,-80.3558365,19z/data=!3m1!4b1!4m6!3m5!1s0x88d9b954d29939f7:0x3a3b6538667a5009!8m2!3d25.8269673!4d-80.3551928!16s%2Fg%2F1wnf1vmc">
            <div className="font-normal text-[16px] text-dark dark:text-light">
              Location
            </div>
          </Link>
        </button>
        </div>
      </motion.div>

      </div>
      
    </section>
  );
};

export default MyGoogleMap;
