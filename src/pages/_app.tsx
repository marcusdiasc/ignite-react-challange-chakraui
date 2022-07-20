import { ChakraProvider, Container } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import { theme } from "../styles/theme";

import "swiper/css/bundle";
import "../styles/swiper/styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
