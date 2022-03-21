import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

export default function resources() {
  return (
    <form>
      <Flex direction="column" p={10}>
        <Heading>Resources</Heading>
        <p>Videos</p>
        <p>Word bank</p>
        <p>Spider diagrams</p>
        <p>Guides</p>
      </Flex>
    </form>
  );
}
