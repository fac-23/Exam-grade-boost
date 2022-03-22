import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import Navigation from "../components/Navigation.jsx";

export default function finalEssay() {
  return (
    <>
      <Navigation />
      <form>
        <Flex direction="column" p={10}>
          <Heading>Final essay overview</Heading>
          <p>Export to Word docx</p>
          <p>Export to PDF</p>
          <p>Print</p>
        </Flex>
      </form>
    </>
  );
}
