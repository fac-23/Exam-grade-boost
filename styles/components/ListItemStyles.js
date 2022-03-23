import { mode, darken, whiten } from "@chakra-ui/theme-tools";

export const ListItemStyles = {
  // Styles for the base style
  baseStyle: {},
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {
    primary: (props) => ({
      bg: "primary",
      borderWidth: "3px",
      borderColor: "green",
      borderRadius: "10px",
      _hover: {
        bg: mode(darken("primary", 15), whiten("primary", 15))(props),
      },
    }),
    secondary: (props) => ({
      bg: "secondary",
      _hover: {
        bg: mode(darken("secondary", 15), whiten("secondary", 15))(props),
      },
    }),
  },
  // The default `size` or `variant` values
  defaultProps: {},
};

// the mode function receives two arguments, a setting for the light mode and a setting for the dark mode.

// The darken function darkens a color
// The whiten function brightens a color
