import Head from "next/head";
import GlobalStyle from "../src/theme/GlobalStyle";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
  <Head>
   <title> LP - Esportes </title>
    </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
