import Layout from "../components/Layout";

import {
  Flex,
  Heading,
  useColorModeValue,
  Box,
  Text,
  VStack,
  Link,
  Button,
  Container,
} from "@chakra-ui/react";

import { ArrowBackIcon } from "@chakra-ui/icons";

export default function About() {
  const formBackground = useColorModeValue("gray.100", "gray.700");

  return (
    <Layout>
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
              <Box position="absolute" top="1.5rem" left="1.5rem">
                <Link href="/home" passHref>
                  <Button colorScheme="teal">
                    <ArrowBackIcon mr="0.5rem" /> Back to Home
                  </Button>
                </Link>
              </Box>
              <Heading as="h1" mb={10}>
                About Us
              </Heading>

              <Heading as="h2" size="md">
                Copyright: 2012 and 2022, ‘Oliver Lindon’.
              </Heading>

              <Text>
                The materials used in the ‘Essay Boost’ app have been presented
                in various previous contexts. The strategies started off as a
                personal ideas of Oliver Lindon in the early 2000s. A version of
                these materials were published as a book in 2013 by the
                ‘Stepahead Press’. Some of the ideas featured in Noesis
                Education – a National Lottery backed social enterprise, which
                ran for approximately 3 years, starting in 2012. Since 2014
                essay writing techniques featured here have as the basis for
                teacher training and tutorials for students. Copyright of all
                content, trademarks and intellectual property is asserted by
                Exam Grade Boost. The owner of Exam Grade Boost is Oliver
                Lindon. The organisation can be contact via:{" "}
                <Link
                  href="http://www.examgradeboost.co.uk"
                  passHref
                  target="_blank"
                  textDecoration="underline"
                >
                  <a>www.examgradeboost.co.uk</a>
                </Link>
                , or by emailing Oliver.Lindon@gmail.com{" "}
              </Text>
            </VStack>
          </Flex>
        </Flex>
      </Container>
    </Layout>
  );
}
