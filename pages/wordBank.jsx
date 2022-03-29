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
              <UnorderedList styleType="none" m="0 0 1.5rem 0" color="black">
                <ListItem p="1rem" background="gray.100">
                  <strong>Summary</strong>
                  <p>This assignment discusses...</p>
                  <p>
                    If a solution to the issue of...could be found it would
                    bring many benefits...
                  </p>
                  <p>Discussion exists around the topic of...</p>
                  <p>
                    In the last 30 years, many researchers have investigated...
                  </p>
                </ListItem>
                <ListItem p="1rem" background="blue.100">
                  <strong>Main</strong>
                  <p>Many experts believe that...</p>
                  <p>One view is...</p>
                  <p>Some research suggests... </p>
                  <p>Some evidence indicates... </p>
                </ListItem>
                <ListItem p="1rem" background="yellow.100">
                  <strong>Opposite Argument</strong>
                  <p>The evidence is mixed...</p>
                  <p>Some evidence points in a different direction... </p>
                  <p>However, there are different views...</p>
                  <p>However, other experts take a different view </p>
                </ListItem>
                <ListItem p="1rem" background="orange.200">
                  <strong>Key Theme</strong>
                  <p>
                    There are several reasons for this debate which will be
                    summarised...
                  </p>
                  <p>
                    Research has focused on around key topics. Some areas of the
                    most significant areas of discussion are...
                  </p>
                  <p>
                    To provide some resolution to the discussion, the following
                    areas will be investigated. Several areas will be
                    considered...
                  </p>
                </ListItem>
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Body paragraph
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel p="1rem 0 1rem 0">
              <UnorderedList styleType="none" m="0 0 1.5rem 0">
                <ListItem p="1rem" background="gray.100">
                  <strong>Point</strong>
                  <p>There are different views on...</p>
                  <p>The relationship between... and... is uncertain.</p>
                  <p>Attitudes to... are mixed</p>
                  <p>The relationship between... and... is often debated.</p>
                  <p>The level of significance...</p>
                </ListItem>
                <ListItem p="1rem" background="blue.100">
                  <strong>Identify</strong>
                  <p>For example...</p>
                  <p>For instance...</p>
                  <p>Research presented by... showed...</p>
                  <p>A key reason for...</p>
                  <p>The following quotation is relevant...</p>
                </ListItem>
                <ListItem p="1rem" background="yellow.100">
                  <strong>Outline</strong>
                  <p>A key feature is...</p>
                  <p>A part of the... is...</p>
                  <p>An important section of... was...</p>
                  <p>A significant part is...</p>
                </ListItem>
                <ListItem p="1rem" background="orange.200">
                  <strong>Evidence 1</strong>
                  <p>Research has focused on around key topics...</p>
                  <p>
                    To provide some resolution to the discussion, the following
                    areas will be investigated….
                  </p>
                  <p>Several areas will be considered... </p>
                </ListItem>
                <ListItem p="1rem" background="orange.300">
                  <strong>Evidence 2</strong>
                  <p>The evidence is mixed...</p>
                  <p>Not everyone agrees...</p>
                  <p>There are, however, different views...</p>
                </ListItem>
                <ListItem p="1rem" background="purple.200">
                  <strong>Relate</strong>
                  <p>Overall, the evidence mostly supports...</p>
                  <p>The general trend was...</p>
                  <p>It has been shown that...</p>
                </ListItem>
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Conclusion
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel p="1rem 0 1rem 0">
              <UnorderedList styleType="none" m="0 0 1.5rem 0">
                <ListItem p="1rem" background="gray.100">
                  <strong>Main</strong>
                  <p>This assignment discusses...</p>
                  <p>
                    The main claim assessed was... and it was supported by the
                    evidence...
                  </p>
                  <p>
                    The level of significance...was examined and found to be...
                  </p>
                </ListItem>
                <ListItem p="1rem" background="blue.100">
                  <strong>Evidence</strong>
                  <p>The most important evidence on the topic was...</p>
                  <p>A consistent theme in the evidence was...</p>
                  <p>A noticeable pattern was seen... </p>
                </ListItem>
                <ListItem p="1rem" background="yellow.100">
                  <strong>Priority</strong>
                  <p>The most important evidence was...</p>
                  <p>Some key principles were... </p>
                </ListItem>
                <ListItem p="1rem" background="orange.200">
                  <strong>Relate</strong>
                  <p>Overall, the evidence suggests...</p>
                  <p>A likely application for these findings is...</p>
                  <p>
                    Although the evidence is mixed, there is more... than...
                  </p>
                  <p>To conclude...</p>
                </ListItem>
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Layout>
  );
}
