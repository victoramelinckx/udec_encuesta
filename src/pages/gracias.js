import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import { useRouter } from 'next/router';

const Gracias = () => {
  return (
    <>
      <Head>
        <title>Gracias</title>
        <meta
          name="landing si"
          content="Encuesta para Money Trip"
        />
      </Head>
      <TransitionEffect />
      <div className="flex flex-col items-center min-h-screen bg-dark">
        <div className="pt-80">
          <div className="text-center">
              <div
                className="p-3 px-8 text-lg text-light/90 font-semibold mb-4 
               flex items-center justify-center"
              >
                Gracias!
              </div>
          </div>
        </div>
      </div>
  
        
    </>
  )
}

export default Gracias;