import React from "react";
import Link from "next/link";

import Layout from "../components/Layout.jsx";

import { Flex, Button, Heading } from "@chakra-ui/react";

export default function LoginError() {
  return (
    <>
      <Layout noNav>
      <Flex flexDirection="column" alignItems="center" gap="2rem">
        <Heading as="h1" mt={6}>
          Something went wrong. Password or Email Incorrect!🚨
        </Heading>
        <Link href={"/requestReset"} passHref>
          <Button>Forgot your password?</Button>
        </Link>
        <Link href={"/login"} passHref>
          <Button>Return to login</Button>
        </Link>
      </Flex>
    </Layout>

    </>
  );
}
