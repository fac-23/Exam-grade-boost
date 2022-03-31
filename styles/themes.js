import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

import { ButtonStyles as Button } from "./components/ButtonStyles";
import { LinkStyles as Link } from "./components/LinkStyles";

const styles = {
  global: (props) => ({
    body: {
      color: mode("gray.800", "white")(props),
      bg: mode("white", "#1A1F2C")(props),
    },
    _placeholder: {
      color: mode("gray.800", "#9b9b9b")(props),
    },
  }),
};

// this is an object, we can add the different things that we want to add to our custom theme
export const myNewTheme = extendTheme({
  // this colors are now available to use
  colors: {
    primaryLight: "#84AEED",
    primary: "#1B55AC",
    secondaryLight: "#cbbcff",
    secondary: "#5633D3",
    green: "#0EA958",
    lightGrey: "#EDF2F7",
    gold: "#ffae00",
  },
  fonts: {
    body: "Tahoma, Geneva, Verdana, sans-serif",
    heading: "Tahoma, Geneva, Verdana, sans-serif",
  },
  styles,
  // components,
  components: {
    Link,
    Button,
  },
});
