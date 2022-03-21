import { extendTheme } from "@chakra-ui/react";

// this is an object, we can add the different things that we want to add to our custom theme
export const myNewTheme = extendTheme({
  // this colors are now available to use
  colors: {
    primary: "#84AEED",
    secondary: "#c8b8ff",
    createNewEssay: "#0EA958",
  },
});
