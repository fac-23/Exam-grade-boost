import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";

// import chakra UI components
import {
  Button,
  Flex,
  Heading,
  Input,
  FormLabel,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Signup() {
  const formBackground = useColorModeValue("gray.100", "gray.700");

  return (
    <Layout noNav>
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex
          as="form"
          action="/api/sign-up"
          method="POST"
          direction="column"
          background={formBackground}
          p={12}
          rounded={10}
        >
          <Heading mb={10}>Sign up</Heading>

          <FormLabel htmlFor="username">Name</FormLabel>
          <Input type="text" id="username" required name="username" mb={6} />

          <FormLabel htmlFor="email">Email</FormLabel>
          <Input type="email" id="email" required name="email" mb={6} />

          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            type="password"
            id="password"
            required
            name="password"
            mb={6}
          />

          <Button type="submit" colorScheme="yellow" mb={6}>
            Sign up
          </Button>

          <Link href={"/"} passHref>
            <Button className="button" colorScheme="teal">
              Back to landing page
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Layout>
  );
}
