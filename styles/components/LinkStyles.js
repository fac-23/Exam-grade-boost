import { mode } from "@chakra-ui/theme-tools";

export const LinkStyles = {
  baseStyle: (props) => ({
    color: mode("black", "white")(props),
    _hover: {
      textDecorationLine: "none",
    },
  }),
  variants: {
    navigation: (props) => ({
      color: mode("white", "white")(props),
    }),
  },
};
