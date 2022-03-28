import { mode, whiten } from "@chakra-ui/theme-tools";

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
    newEssay: (props) => ({
      color: mode("black", "white")(props),
      display: "block",
      p: "1rem",
      textAlign: "center",
      fontWeight: "bold",
      width: "100%",
      borderWidth: "3px",
      borderRadius: "10px",
      borderColor: mode("green", whiten("secondary", 15))(props),
      _hover: {
        transform: "scale(1.02)",
      },
    }),
  },
};
