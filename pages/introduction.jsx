import React from "react";
import {
  Flex,
  Textarea,
  Heading,
  Grid,
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
} from "@chakra-ui/react";

import Navigation from "../components/Navigation.jsx";
import { getEssayInfo } from "../database/model.js";
import VideoComponent from "../components/VideoComponent.jsx";

export async function getServerSideProps({ req }) {
  const essayId = req.cookies.currEssay;
  // const essayInfo = await getEssayInfo(essayId);

  // hardcoded example passing 2 as essayID
  const essayInfo = await getEssayInfo(essayId);

  // console.log(essayId);
  console.log(essayInfo);

  const storedIntro = essayInfo.introduction;
  const question = essayInfo.question;

  if (!storedIntro) {
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

  return {
    props: {
      question,
      storedSummary,
      storedMain,
      storedOpposite,
      storedKey,
    },
  };
}

export default function introduction({
  question,
  storedSummary,
  storedMain,
  storedOpposite,
  storedKey,
}) {
  return (
    <>
      <Navigation />
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
                    <AccordionButton>
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
                    <AccordionButton>
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
              </Accordion>
            </Box>
          </Flex>
        </SimpleGrid>
      </Container>
    </>
  );
}
