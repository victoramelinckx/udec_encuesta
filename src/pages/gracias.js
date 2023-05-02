import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import { useRouter } from 'next/router';
import GetInTouch from '@/components/getInTouch';

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
        <div className="pt-vh-20">
          <div className="text-center">
            <div
              className="p-3 px-8 text-2xl text-light/90 font-semibold 
              flex items-center justify-center"
            >
              ¡Gracias por compartir tu experiencia!
            </div>

            <div
              className="p-3 px-8 text-lg text-light/90 font-normal mb-4 
              flex items-center justify-center md:!text-base sm:!text-sm"
            >
              No olvides enviar el enlace a colegas y amigos empresarios. Muy pronto recibirás un informe exclusivo con estrategias e insights para impulsar tu éxito empresarial. 
            </div>
            <GetInTouch/>
          </div>
        </div>
      </div>
  
        
    </>
  )
}

export default Gracias;