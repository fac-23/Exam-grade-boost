import Layout from "../components/Layout";

import {
  Flex,
  Heading,
  useColorModeValue,
  Box,
  Text,
  VStack,
  Container,
  Link,
  Button,
} from "@chakra-ui/react";

import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function Tutorial() {
  const formBackground = useColorModeValue("gray.100", "gray.700");

  return (
    <Layout noNav>
      <Container>
        <Flex height="100vh" alignItems="center" justifyContent="center">
          <Flex
            direction="column"
            background={formBackground}
            p={12}
            rounded={10}
            alignItems="center"
            position="relative"
          >
            <VStack spacing="2rem">
              <Box position="absolute" top="1.5rem" right="1.5rem">
                <Link href="/home" passHref>
                  <Button colorScheme="teal">
                    Continue to Home <ArrowForwardIcon ml="0.5rem" />
                  </Button>
                </Link>
              </Box>
              <Heading mb={10}>Tutorial</Heading>

              <Box>
                <iframe
                  src="https://vimeo.com/692854378"
                  width="100%"
                  height="auto"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>{" "}
              </Box>

              <VStack spacing="1rem">
                <Box>
                  <Heading as="h2" size="sm" alignSelf="flex-start" mb="0.5rem">
                    {" "}
                    About the app
                  </Heading>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Semper quis lectus nulla at volutpat diam ut
                    venenatis tellus. In nisl nisi scelerisque eu. Massa sapien
                    faucibus et molestie ac feugiat. Eget velit aliquet sagittis
                    id consectetur purus ut. Eu non diam phasellus vestibulum.
                    Tellus in hac habitasse platea dictumst vestibulum. Mattis
                    aliquam faucibus purus in massa tempor. Sit amet consectetur
                    adipiscing elit pellentesque habitant. Ac feugiat sed lectus
                    vestibulum mattis ullamcorper velit.
                  </Text>
                </Box>
                <Box>
                  <Heading as="h2" size="sm" alignSelf="flex-start" mb="0.5rem">
                    How to use
                  </Heading>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Semper quis lectus nulla at volutpat diam ut
                    venenatis tellus. In nisl nisi scelerisque eu. Massa sapien
                    faucibus et molestie ac feugiat. Eget velit aliquet sagittis
                    id consectetur purus ut. Eu non diam phasellus vestibulum.
                    Tellus in hac habitasse platea dictumst vestibulum. Mattis
                    aliquam faucibus purus in massa tempor. Sit amet consectetur
                    adipiscing elit pellentesque habitant. Ac feugiat sed lectus
                    vestibulum mattis ullamcorper velit.
                  </Text>
                </Box>
                <Box>
                  <Heading as="h2" size="sm" alignSelf="flex-start" mb="0.5rem">
                    Accessing Resources
                  </Heading>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Semper quis lectus nulla at volutpat diam ut
                    venenatis tellus. In nisl nisi scelerisque eu. Massa sapien
                    faucibus et molestie ac feugiat. Eget velit aliquet sagittis
                    id consectetur purus ut. Eu non diam phasellus vestibulum.
                    Tellus in hac habitasse platea dictumst vestibulum. Mattis
                    aliquam faucibus purus in massa tempor. Sit amet consectetur
                    adipiscing elit pellentesque habitant. Ac feugiat sed lectus
                    vestibulum mattis ullamcorper velit.
                  </Text>
                </Box>
                <Box>
                  <Heading as="h2" size="sm" alignSelf="flex-start" mb="0.5rem">
                    Getting Help
                  </Heading>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Semper quis lectus nulla at volutpat diam ut
                    venenatis tellus. In nisl nisi scelerisque eu. Massa sapien
                    faucibus et molestie ac feugiat. Eget velit aliquet sagittis
                    id consectetur purus ut. Eu non diam phasellus vestibulum.
                    Tellus in hac habitasse platea dictumst vestibulum. Mattis
                    aliquam faucibus purus in massa tempor. Sit amet consectetur
                    adipiscing elit pellentesque habitant. Ac feugiat sed lectus
                    vestibulum mattis ullamcorper velit.
                  </Text>
                </Box>
              </VStack>
            </VStack>
          </Flex>
        </Flex>
      </Container>
    </Layout>
  );
}
