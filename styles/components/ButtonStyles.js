import { mode, darken, whiten } from "@chakra-ui/theme-tools";

export const ButtonStyles = {
  // Styles for the base style
  baseStyle: {},
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {
    primary: (props) => ({
      bg: "primary",
      color: "white",
      _hover: {
        bg: mode(darken("primary", 15), whiten("primary", 15))(props),
      },
    }),
    secondary: (props) => ({
      bg: "secondary",
      color: "white",
      _hover: {
        bg: mode(darken("secondary", 15), whiten("secondary", 15))(props),
      },
    }),
    logout: (props) => ({
      color: "black",
      bg: "lightGrey",
      borderWidth: "5px",
      p: "0.5rem",
      _hover: {
        // bg: mode(whiten("lightGrey", 40), whiten("lightGrey", 20)),
        borderColor: mode(whiten("primary", 40), whiten("primary", 20)),
      },
    }),
  },
  // The default `size` or `variant` values
  defaultProps: {},
};

// the mode function receives two arguments, a setting for the light mode and a setting for the dark mode.

// The darken function darkens a color
// The whiten function brightens a color
