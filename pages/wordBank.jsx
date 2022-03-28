// import chakra UI components

import {
  Container,
  Heading,
  Box,
  Text,
  UnorderedList,
  ListItem,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

// import components
import Layout from "../components/Layout.jsx";

export default function WordBank() {
  return (
    <Layout>
      <Container centerContent>
        <Heading as="h1" mb="2rem">
          Word Bank
        </Heading>

        <Accordion allowToggle w="100%">
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Introduction
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel p="1rem 0 1rem 0">
              <UnorderedList styleType="none" m="0 0 1.5rem 0">
                <ListItem p="1rem" background="gray.100">
                  <strong>Summary</strong>
                  <p>This assignment discusses………</p>
                  <p>
                    If a solution to the issue of……..could be found it would
                    bring many benefits….
                  </p>
                  <p>Discussion exists around the topic of……</p>
                  <p>
                    In the last 30 years, many researchers have investigated…..
                  </p>
                </ListItem>
                <ListItem p="1rem" background="blue.100">
                  <strong>Identify</strong> - Evidence base, fact, or research
                  name.
                </ListItem>
                <ListItem p="1rem" background="yellow.100">
                  <strong>Outline</strong> - Key features about the evidence,
                  fact or source, often in the form of quantities.
                </ListItem>
                <ListItem p="1rem" background="orange.200">
                  <strong>Evidence1</strong> - The most important idea in the
                  area, that supports the ‘main argument’ and is also linked to
                  the evidence.
                </ListItem>
                <ListItem p={2} background="orange.300">
                  <strong>Evidence2</strong> - The most important idea in the
                  area, that support the ‘counter argument’.
                </ListItem>
                <ListItem p={2} background="purple.100">
                  <strong>Relate</strong> - Directly link back to the question.
                  This shows how the evidence you gave, and the ideas you
                  stated, directly answer the question you were specifically
                  asked.
                </ListItem>
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Video Tutorial
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel p="1rem 0 1rem 0"></AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Layout>
  );
}
