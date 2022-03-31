import React from "react";
import Link from "next/link";

// import chakra UI components
import {
  Button,
  Flex,
  Heading,
  Input,
  FormLabel,
  useColorModeValue,
} from "@chakra-ui/react";

export default function RequestReset() {
  const formBackground = useColorModeValue("gray.100", "gray.700");

  return (
    <>
      <form action="/api/send-reset" method="POST">
        <Flex height="100vh" alignItems="center" justifyContent="center">
          <Flex
            direction="column"
            background={formBackground}
            p={12}
            rounded={10}
          >
            <Heading mb={5}>Reset my password</Heading>
            <Heading mb={5} as="h2" size="sm">
              Following reset wait at least 5 minutes! , check your email inbox
              and spam/trash folder
            </Heading>

            <FormLabel htmlFor="email">Email</FormLabel>

            <Input type="email" id="email" name="email" mb={6} />
            <Button
              mb={6}
              colorScheme="yellow"
              className="button"
              type="submit"
            >
              Request reset
            </Button>

            <Link href={"/"} passHref>
              <Button className="button" colorScheme="teal">
                Back to landing page
              </Button>
            </Link>
          </Flex>
        </Flex>
      </form>
    </>
  );
}
