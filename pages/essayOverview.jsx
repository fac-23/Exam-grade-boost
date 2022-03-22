import React from "react";
import Link from "next/link";
import { Button, Flex, Heading } from "@chakra-ui/react";
import Navigation from "../components/Navigation.jsx";

export default function essayOverview() {
  return (
    <>
      <Navigation />
      <form>
        <Flex direction="column" p={10}>
          <Heading>Essay overview</Heading>
          <Link href="/spiderDiagram" passHref>
            <Button>Planning</Button>
          </Link>
          <Link href="/introduction" passHref>
            <Button>Introduction</Button>
          </Link>
          <Link href="/body" passHref>
            <Button>Body paragraph 1</Button>
          </Link>
          <Link href="/conclusion" passHref>
            <Button>Conclusion</Button>
          </Link>
          <Link href="/finalEssay" passHref>
            <Button>View final essay</Button>
          </Link>
        </Flex>
      </form>
    </>
  );
}
