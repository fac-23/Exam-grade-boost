import Link from "next/link";
import React from "react";

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

export default function Signup() {
  const formBackground = useColorModeValue("gray.100", "gray.700");

  return (
    <div>
      <form action="/api/sign-up" method="POST">
        <Flex height="100vh" alignItems="center" justifyContent="center">
          <Flex
            direction="column"
            background={formBackground}
            p={12}
            rounded={10}
          >
            <FormLabel htmlFor="username">Username</FormLabel>
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
            <Button
              type="submit"
              className="button"
              colorScheme="yellow"
              mb={6}
            >
              Sign up
            </Button>

            <Link href={"/"} passHref>
              <Button className="button" colorScheme="teal">
                Back to landing page
              </Button>
            </Link>
          </Flex>
        </Flex>
      </form>
    </div>
  );
}
