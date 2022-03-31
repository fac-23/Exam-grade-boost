import { Box, useColorModeValue, Link } from "@chakra-ui/react";

export default function Footer() {
  const FooterBackgroundColor = useColorModeValue("primary", "secondary");

  return (
    <Box
      as="footer"
      pos="fixed"
      bottom="0"
      bg={FooterBackgroundColor}
      color="white"
      p="1rem"
      w="100%"
      textAlign="center"
    >
      Exam Boost by Oliver Lindon -&nbsp;
      <Link
        href="/about"
        passHref
        color="white"
        fontWeight="semibold"
        textDecoration="underline"
      >
        <a>More Info</a>
      </Link>
    </Box>
  );
}
