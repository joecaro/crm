import NavBar from "../components/NavBar/NavBar";
import Side from "../components/Side/Side";
import Head from "next/head";
import "../styles/globals.css";
import { ListProvider } from "../Context/ListContext";

function MyApp({ Component, pageProps }) {
  return (
    <ListProvider>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'></meta>
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css'></link>
      </Head>
      <NavBar />
      <Side />
      <Component {...pageProps} />
    </ListProvider>
  );
}

export default MyApp;
