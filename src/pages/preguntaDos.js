import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import { useRouter } from 'next/router';
import { TypingText } from '@/components/context/othersComponents';

const PreguntaDos = () => {
  const router = useRouter();
  const selectedArea = router.query.data;
  const areaText = router.query.areaText;

  const options = {
    ventas: [
      'Generación de tráfico de clientes potenciales',
      'Conversión de clientes potenciales en ventas efectivas',
      'Retención de clientes existentes',
      'Fidelización de clientes a largo plazo',
      'Otros aspectos relacionados con las ventas y el marketing',
    ],
    financiera: [
      'Control y reducción de costos operativos',
      'Mejora en la gestión de flujos de efectivo y cuentas por pagar',
      'Generación de reportes financieros y de desempeño en tiempo y forma',
      'Establecimiento de presupuestos y metas financieras claras',
      'Otros aspectos relacionados con la gestión financiera y administrativa',
    ],
    produccion: [
      'Optimización de procesos de producción y de la cadena de suministro',
      'Control de calidad de productos y servicios ofrecidos',
      'Reducción de tiempos de entrega y/o producción',
      'Gestión de inventarios y control de costos de producción',
      'Otros aspectos relacionados con la producción y operaciones',
    ],
    humanos: [
      'Selección y retención del personal adecuado',
      'Desarrollo de habilidades y competencias en el personal existente',
      'Mejora en la gestión del clima laboral y de la motivación del personal',
      'Implementar políticas y programas de capacitación y desarrollo',
      'Otros aspectos relacionados con la gestión del talento y los recursos humanos',
    ],
    data: [
      'Integración de sistemas informáticos y análisis de datos',
      'Seguridad de la información y prevención de riesgos informáticos',
      'Acceso y disponibilidad de la información en tiempo y forma',
      'Mejora en la calidad de los datos y su gestión',
      'Otros aspectos relacionados con la gestión de datos e informática',
    ],
  };

  const renderOptions = () => (
    <>
      {options[selectedArea]?.map((option, index) => (
        <Link
          href={{
            pathname: '/preguntaTres',
            query: { area: areaText, data: option },
          }}
          passHref
          key={option}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            <div className="flex items-center justify-center h-fit py-3 px-4 text-lg md:!text-sm sm:!text-sm text-light bg-dark/10 border border-solid border-light/90 hover:scale-105 rounded-[32px] gap-[12px]">
              {option}
            </div>
          </motion.div>
        </Link>
      ))}
    </>
  );

  return (
    <>
      <Head>
        <title>Segunda Pregunta</title>
        <meta name="landing si" content="Encuesta para Money Trip" />
      </Head>
      <TransitionEffect />
      <div className="flex flex-col items-center min-h-screen bg-dark">
        <div className="pt-vh-20">
          <TypingText title={`| ${areaText}`} textStyles="text-center text-xs text-light/40" />
          <div className="text-center">
            <div className="p-3 px-8 text-lg text-light/90 font-semibold mb-4 flex items-center justify-center">
              Dentro del área de {areaText}, el PRINCIPAL obstáculo es:{' '}
            </div>
          </div>
        </div>

        <div className="w-[40%] lg:w-[50%] md:w-[60%] sm:w-[80%] flex flex-row justify-center text-center pt-2 space-x-4">
          <div className={`mx-auto flex flex-col space-y-2`}>{renderOptions()}</div>
        </div>
      </div>
    </>
  );
};

export default PreguntaDos;
