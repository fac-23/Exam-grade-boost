import React from "react";
import {
  Flex,
  Textarea,
  Heading,
  Container,
  Box,
  Button,
  Text,
  UnorderedList,
  ListItem,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

import { getEssayInfo } from "../database/model.js";
import VideoComponent from "../components/VideoComponent.jsx";
import Layout from "../components/Layout.jsx";

export async function getServerSideProps({ req }) {
  const essayId = req.cookies.currEssay;
  const essayInfo = await getEssayInfo(essayId);

  const storedIntro = essayInfo.introduction;
  const question = essayInfo.question;
  const storedSpiderText = essayInfo.spider_1;

  if (!storedIntro || !storedSpiderText) {
    return {
      props: {
        question,
      },
    };
  }

  const splitSections = storedIntro.split("\n");
  const storedSummary = splitSections[0];
  const storedMain = splitSections[1];
  const storedOpposite = splitSections[2];
  const storedKey = splitSections[3];

  const splitBranches = storedSpiderText.split("\n");
  const storedBranch2 = splitBranches[1];
  const storedBranch1 = splitBranches[0];
  const storedBranch3 = splitBranches[2];
  const storedBranch4 = splitBranches[3];

  return {
    props: {
      question,
      storedSummary,
      storedMain,
      storedOpposite,
      storedKey,
      storedBranch1,
      storedBranch2,
      storedBranch3,
      storedBranch4,
    },
  };
}

export default function Introduction({
  question,
  storedSummary,
  storedMain,
  storedOpposite,
  storedKey,
  storedBranch1,
  storedBranch2,
  storedBranch3,
  storedBranch4,
}) {
  const labelModeColour = useColorModeValue("black", "white");

  return (
    <Layout>
      <Container centerContent>
        <Heading as="h1" mb="2rem">
          Introduction: {question}
        </Heading>

        <SimpleGrid columns={[null, 1, 2]} spacing="4rem">
          <Flex direction="column" w="100%" h="100%" colSpan={2}>
            <form method="POST" action="/api/save-introduction">
              <Textarea
                name="summary"
                placeholder="summary"
                defaultValue={storedSummary ? storedSummary : ""}
                borderColor="black.300"
                borderWidth="1.5px"
                mb="1rem"
              ></Textarea>
              <Textarea
                name="main"
                placeholder="main argument"
                defaultValue={storedMain ? storedMain : ""}
                borderColor="blue.300"
                borderWidth="1.5px"
                mb="1rem"
              ></Textarea>
              <Textarea
                name="opposite"
                placeholder="opposite argument"
                defaultValue={storedOpposite ? storedOpposite : ""}
                borderColor="yellow.300"
                borderWidth="1.5px"
                mb="1rem"
              ></Textarea>
              <Textarea
                name="key"
                placeholder="key themes"
                defaultValue={storedKey ? storedKey : ""}
                borderColor="orange.300"
                borderWidth="1.5px"
                mb="1rem"
              ></Textarea>
              <Button type="submit">Save and continue</Button>
            </form>
          </Flex>

          <Flex flexDirection="column" h="100%">
            <Heading as="h2" size="lg" w="100%" mb="2rem">
              How to write your Introduction
            </Heading>
            <Box color="black">
              <UnorderedList styleType="none" m="0 0 1.5rem 0">
                <ListItem p={2} background="gray.100">
                  <strong>Summary</strong> - in this area you give a summary of
                  your overall assignment.
                </ListItem>
                <ListItem p={2} background="blue.100">
                  <strong>Main Argument</strong> - a summary of the main ‘yes’
                  position.
                </ListItem>
                <ListItem p={2} background="yellow.100">
                  <strong>Opposite Argument</strong> - a summary of the main
                  ‘no’ position.
                </ListItem>
                <ListItem p={2} background="orange.200">
                  <strong>Key Themes</strong> - a summary of the research areas
                  you ListItemll use. Note, you may wish to include definitions
                  between the O and the K sections.
                </ListItem>
              </UnorderedList>
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton color={labelModeColour}>
                      <Box flex="1" textAlign="left">
                        Worked Example
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Text as="mark" backgroundColor="gray.100">
                      There are many health benefits associated with a healthy
                      body weight.{" "}
                    </Text>
                    <Text as="mark" backgroundColor="blue.100">
                      Therefore the ability to create successful dieting
                      strategies holds the potential for longer life expectancy.
                      Some researchers believe that diets can be made to
                      succeed, as long as the necessary steps are taken.{" "}
                    </Text>
                    <Text as="mark" backgroundColor="yellow.100">
                      However, other experts disagree, arguing essentially that
                      diets succeed more by luck than the particular principles
                      being applied.
                    </Text>{" "}
                    <Text as="mark" backgroundColor="orange.200">
                      To decide which view is more valid, several factors will
                      be examined: the ways in which attention is focused, the
                      use of appropriate foods and the presence of social
                      support networks will be discussed.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton color={labelModeColour}>
                      <Box flex="1" textAlign="left">
                        Video Tutorial
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <VideoComponent />
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Word bank
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel p="1rem 0 1rem 0">
                    <UnorderedList styleType="none" m="0 0 1.5rem 0">
                      <ListItem p="1rem" background="gray.100">
                        <strong>Summary</strong>
                        <p>This assignment discusses...</p>
                        <p>
                          If a solution to the issue of...could be found it
                          would bring many benefits...
                        </p>
                        <p>Discussion exists around the topic of...</p>
                        <p>
                          In the last 30 years, many researchers have
                          investigated...
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
                          There are several reasons for this debate which will
                          be summarised...
                        </p>
                        <p>
                          Research has focused on around key topics. Some areas
                          of the most significant areas of discussion are...
                        </p>
                        <p>
                          To provide some resolution to the discussion, the
                          following areas will be investigated. Several areas
                          will be considered...
                        </p>
                      </ListItem>
                    </UnorderedList>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Planning text
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box
                      borderColor="black"
                      borderWidth="1px"
                      p={1}
                      textAlign="left"
                      backgroundColor="orange.100"
                    >
                      <h3>Topic 1:</h3>
                      <Text>{storedBranch1 ? storedBranch1 : ""}</Text>
                    </Box>
                    <Box
                      borderColor="black"
                      borderWidth="1px"
                      p={1}
                      textAlign="left"
                      backgroundColor="orange.200"
                    >
                      <h3>Topic 2:</h3>
                      <Text>{storedBranch2 ? storedBranch2 : ""}</Text>
                    </Box>
                    <Box
                      borderColor="black"
                      borderWidth="1px"
                      p={1}
                      textAlign="left"
                      backgroundColor="orange.300"
                    >
                      <h3>Topic 3:</h3>
                      <Text>{storedBranch3 ? storedBranch3 : ""}</Text>
                    </Box>
                    <Box
                      borderColor="black"
                      borderWidth="1px"
                      p={1}
                      textAlign="left"
                      backgroundColor="orange.400"
                    >
                      <h3>Topic 4:</h3>
                      <Text>{storedBranch4 ? storedBranch4 : ""}</Text>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          </Flex>
        </SimpleGrid>
      </Container>
    </Layout>
  );
}
