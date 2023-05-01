import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

// delere Monserrat and ad this Linden_Hill
// <link
// rel="stylesheet"
// href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap"
// />

export default function App({ Component, pageProps }) {
  
  const router = useRouter();

  return (
    <>

      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/faviconQ.ico" />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
      >
        
        <AnimatePresence initial={false} mode="wait">

          <Component key={router.asPath} {...pageProps} />
          
        </AnimatePresence>

      </main>

    </>
  );
}
