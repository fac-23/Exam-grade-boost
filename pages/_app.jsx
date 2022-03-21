import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

//import custom theme
import { myNewTheme } from "../styles/themes.ts";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={myNewTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
