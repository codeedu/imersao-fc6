import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-8 sm:px-24">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
