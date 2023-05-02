import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';
import Head from 'next/head';
import { useRouter } from 'next/router';

const PreguntaUno = () => {
  const router = useRouter();

  const handleClick = (dataName, areaText) => {
    router.push(`/preguntaDos?data=${dataName}&areaText=${encodeURIComponent(areaText)}`);
  };

  return (
    <>
      <Head>
        <title>Encuesta</title>
        <meta name="landing si" content="Encuesta para Money Trip" />
      </Head>
      <TransitionEffect />
      <div className="flex flex-col items-center min-h-screen bg-dark">
        <div className="pt-vh-20">
          <div className="text-center">
            <div
              className="p-3 px-8 text-lg text-light/90 font-semibold mb-4 
               flex items-center justify-center"
            >
              El principal obstáculo para el éxito y crecimiento de mi empresa se
              encuentra en el área de:
            </div>
          </div>
        </div>

        <div className="w-[40%] lg:w-[50%] md:w-[60%] sm:w-[80%] flex flex-row justify-center pt-2 space-x-4">
          <div className={`mx-auto flex flex-col space-y-2`}>
          {
            [
              { text: 'Área de ventas y marketing', id: 'ventas' },
              { text: 'Área de producción y operaciones', id: 'financiera' },
              { text: 'Área de recursos humanos y talento', id: 'produccion' },
              { text: 'Área informática (data)', id: 'humanos' },
              { text: 'Otras áreas no mencionadas', id: 'data' },
            ].map((area, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer"
                onClick={() => handleClick(area.id, area.text)}
              >
                <div
                  className="flex items-center justify-center h-fit py-3 px-4 text-lg md:!text-sm sm:!text-sm text-light bg-dark/10 border border-solid border-light/90 hover:scale-105 rounded-[32px] gap-[12px]"
                >
                  {area.text}
                </div>
              </motion.div>
            ))
          }
          </div>
        </div>
      </div>
    </>
  );
};

export default PreguntaUno;
