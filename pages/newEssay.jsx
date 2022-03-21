import React from "react";
import { Button, Flex, Heading, Input, FormLabel } from "@chakra-ui/react";

export default function newEssay() {
  return (
    <form>
      <Flex direction="column" p={10}>
        <Heading>First step</Heading>
        <FormLabel>Enter your essay question:</FormLabel>
        <Input mb={5}></Input>
        <Button>Save and continue</Button>
      </Flex>
    </form>
  );
}
