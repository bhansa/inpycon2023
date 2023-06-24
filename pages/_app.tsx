import { AppProps } from "next/app";
import {useEffect} from "react";
import AOS from "aos";
import "../styles/css/style.css";

import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      once: true, // Only animate elements once
    });
  }, []);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1"
        />
        <title>PyCon India 2023</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
