import { extendTheme } from "@chakra-ui/react";

import { ButtonStyles as Button } from "./components/ButtonStyles";

// this is an object, we can add the different things that we want to add to our custom theme
export const myNewTheme = extendTheme({
  // this colors are now available to use
  colors: {
    primaryLight: "#84AEED",
    primary: "#4182E3",
    secondary: "#8D6BFF",
    green: "#0EA958",
    lightGrey: "#EDF2F7",
  },
  components: {
    Button,
  },
});
