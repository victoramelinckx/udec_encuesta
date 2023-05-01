import Link from 'next/link';
import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import { useState } from 'react';
import sendEmail from './api/sendinblue';

const No = () => {
  
  
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Texto enviado:', inputValue);
    await sendEmail('vickx2000@gmail.com', inputValue);
    setInputValue('');
  };
  
  return (
    <>
      <Head>
        <title>Encuesta</title>
        <meta
          name="landing si"
          content="Encuesta para Money Trip"
        />
      </Head>
      <TransitionEffect />
      <div className="flex flex-col items-center min-h-screen bg-dark">
        <div className="pt-60">
          <div className="text-center">
              <div
                className="p-3 px-8 text-lg text-light/90 font-semibold mb-4 
               flex items-center justify-center"
              >
            ¿Qué problemas ves donde tu o tus familiares trabajas que impiden a la empresa generar más ingresos?              </div>
          </div>
        </div>

        <div className='w-[20%] lg:w-[30%] md:w-[30%] sm:w-[30%] flex flex-row justify-center pt-2 space-x-4'>
       
          <div className={`mx-auto flex flex-col gap-6`}>

            <form onSubmit={handleSubmit} className="flex flex-col md:items-center gap-5">
              <textarea
                value={inputValue}
                onChange={handleInputChange}
                className="py-4 px-6 bg-light/10 rounded-[32px] text-light flex-grow"
                placeholder="Enter the subject"
                rows={3}
              />

              <div className="flex">
                <button
                  type="submit"
                  className="flex items-center h-fit py-3 px-4 bg-dark/10 border border-solid border-light/90 hover:scale-105 rounded-[32px] gap-[12px]"
                >
                  <span className="font-bold text-[16px] text-light">Enviar</span>
                </button>
              </div>
            </form>

          </div>

        </div>

      </div>
        
    </>
  )
}

export default No


