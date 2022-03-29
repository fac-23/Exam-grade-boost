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
  useColorModeValue,
} from "@chakra-ui/react";

import { getEssayInfo } from "../database/model.js";
import VideoComponent from "../components/VideoComponent";
import Layout from "../components/Layout";

export async function getServerSideProps({ req }) {
  const essayId = req.cookies.currEssay;
  const essayInfo = await getEssayInfo(essayId);

  const storedConclusion = essayInfo.conclusion;
  const storedSpiderText = essayInfo.spider_1;
  const question = essayInfo.question;

  if (!storedConclusion) {
    return {
      props: {
        question,
      },
    };
  }

  const splitSections = storedConclusion.split("\n");
  const storedMain = splitSections[0];
  const storedEvidence = splitSections[1];
  const storedPriority = splitSections[2];
  const storedRelate = splitSections[3];

  const splitBranches = storedSpiderText.split("\n");
  const storedBranch2 = splitBranches[1];
  const storedBranch1 = splitBranches[0];
  const storedBranch3 = splitBranches[2];
  const storedBranch4 = splitBranches[3];

  return {
    props: {
      question,
      storedMain,
      storedEvidence,
      storedPriority,
      storedRelate,
      storedBranch1,
      storedBranch2,
      storedBranch3,
      storedBranch4,
    },
  };
}

export default function Conclusion({
  question,
  storedMain,
  storedEvidence,
  storedPriority,
  storedRelate,
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
          Conclusion: {question}
        </Heading>
        <SimpleGrid columns={[null, 1, 2]} spacing="40px">
          <Flex mt={5} direction="column" p={5} w="100%" h="100%" colSpan={2}>
            <form method="POST" action="/api/save-conclusion">
              <Textarea
                name="main"
                placeholder="Main argument"
                defaultValue={storedMain ? storedMain : ""}
                borderColor="black.300"
                borderWidth="1.5px"
                mb={5}
              ></Textarea>
              <Textarea
                name="evidence"
                placeholder="Evidence"
                defaultValue={storedEvidence ? storedEvidence : ""}
                borderColor="blue.300"
                borderWidth="1.5px"
                mb={5}
              ></Textarea>
              <Textarea
                name="priority"
                placeholder="Priority Evidence"
                defaultValue={storedPriority ? storedPriority : ""}
                borderColor="yellow.300"
                borderWidth="1.5px"
                mb={5}
              ></Textarea>
              <Textarea
                name="relate"
                placeholder="Relate"
                defaultValue={storedRelate ? storedRelate : ""}
                borderColor="orange.300"
                borderWidth="1.5px"
                mb={5}
              ></Textarea>
              <Button type="submit">Save and continue</Button>
            </form>
          </Flex>

          <Flex direction="column" h="100%">
            <Heading as="h2" size="lg" w="100%" mb="2rem">
              How to write your conclusion
            </Heading>
            <Box color="black">
              <UnorderedList styleType="none" mb={5}>
                <ListItem p={2} background="gray.100">
                  <strong>Main Argument</strong> - The main argument you believe
                  to be true in your essay – complete with the paragraph topics
                  that make that argument true. This should clearly be very
                  similar to your introduction.
                </ListItem>
                <ListItem p={2} background="blue.100">
                  <strong>Evidence</strong> - Give the most significant pieces
                  of evidence that make you believe your interpretation of ideas
                  is the most appropriate one.
                </ListItem>
                <ListItem p={2} background="yellow.100">
                  <strong>Prioritised</strong> - give the evidence in a
                  prioritised form..
                </ListItem>
                <ListItem p={2} background="orange.200">
                  <strong>Relate</strong> - State a brief summary that answers
                  the question using the words of the title.
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
                      This essay argued that diets can be made to be successful
                      as long as appropriate steps are followed in making the
                      diet work.{" "}
                    </Text>
                    <Text as="mark" backgroundColor="blue.100">
                      Particularly important features include a focus on good
                      quality low fat, lightly processed foods.{" "}
                    </Text>
                    <Text as="mark" backgroundColor="yellow.100">
                      A range of social support networks is also important. A
                      person seeking the diet would aim to keep their mood as
                      positive as possible and they would aim to stop their
                      attention dwelling too much on the diet – and rather focus
                      on the positive features of the healthy food they were
                      eating.
                    </Text>{" "}
                    <Text as="mark" backgroundColor="orange.200">
                      The person could also balance their diet to work well with
                      their genetic make-up. By reliably following ‘what works’
                      a person would be very likely to achieve a healthy weight.
                      It is reasonable to conclude diets can be made to succeed.
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
                    <VideoComponent></VideoComponent>
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
                        <strong>Main</strong>
                        <p>This assignment discusses...</p>
                        <p>
                          The main claim assessed was... and it was supported by
                          the evidence...
                        </p>
                        <p>
                          The level of significance...was examined and found to
                          be...
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
                          Although the evidence is mixed, there is more...
                          than...
                        </p>
                        <p>To conclude...</p>
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
