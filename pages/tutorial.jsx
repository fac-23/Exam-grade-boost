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
        <Flex justifyContent="center">
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
              <Heading as="h1" mb={10}>
                Tutorial
              </Heading>

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
                <Box width="100%">
                  <Heading as="h2" size="sm" mb="0.5rem">
                    Welcome Page
                  </Heading>
                  <Text>Edit your profile and view previously saved work.</Text>
                </Box>
                <Box width="100%">
                  <Heading as="h2" size="sm" mb="0.5rem">
                    Essay Title Editor
                  </Heading>
                  <Text>Complete the title to start writing your essay.</Text>
                </Box>

                <Box width="100%">
                  <Heading as="h2" size="sm" mb="0.5rem">
                    Writing Stages
                  </Heading>
                  <Text>Work on planning, paragraphs and conclusions.</Text>
                </Box>
                <Box width="100%">
                  <Heading as="h2" size="sm" mb="0.5rem">
                    Additional Help and Resources
                  </Heading>
                  <Text>
                    View additional resources, such as our word bank and ‘how
                    to’ videos.
                  </Text>
                </Box>
                <Box width="100%">
                  <Heading as="h2" size="sm" mb="0.5rem">
                    Output Work
                  </Heading>
                  <Text>Export your work.</Text>
                </Box>
              </VStack>
            </VStack>
          </Flex>
        </Flex>
      </Container>
    </Layout>
  );
}
