import React from "react";
import Link from "next/link";
import Layout from "../components/Layout.jsx";

// import chakra UI components
import {
  Button,
  Flex,
  Heading,
  Input,
  FormLabel,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Login() {
  const formBackground = useColorModeValue("gray.100", "gray.700");

  return (
    <Layout noNav>
      <form action="/api/log-in" method="POST">
        <Flex height="100vh" alignItems="center" justifyContent="center">
          <Flex
            direction="column"
            background={formBackground}
            p={12}
            rounded={10}
          >
            <Heading mb={10}>Log in</Heading>

            <FormLabel htmlFor="email">Email</FormLabel>
            <Input type="email" id="email" name="email" mb={6} />
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input type="password" id="password" name="password" mb={6} />
            <Button mb={6} colorScheme="blue" className="button" type="submit">
              Log in
            </Button>

            <Link href={"/"} passHref>
              <Button className="button" colorScheme="teal">
                Back to landing page
              </Button>
            </Link>
          </Flex>
        </Flex>
      </form>
    </Layout>
  );
}
