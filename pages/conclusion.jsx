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
} from "@chakra-ui/react";
import Navigation from "../components/Navigation";
import { getEssayInfo } from "../database/model.js";
import VideoComponent from "../components/VideoComponent";

export async function getServerSideProps({ req }) {
  const essayId = req.cookies.currEssay;
  const essayInfo = await getEssayInfo(essayId);

  const storedConclusion = essayInfo.conclusion;
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

  return {
    props: {
      question,
      storedMain,
      storedEvidence,
      storedPriority,
      storedRelate,
    },
  };
}

export default function conclusion({
  question,
  storedMain,
  storedEvidence,
  storedPriority,
  storedRelate,
}) {
  return (
    <>
      <Navigation />
      <Grid mt={4} templateColumns="repeat(2, 0.5fr)" gap={6}>
        <Flex mt={5} direction="column" p={5} w="100%" h="10" colSpan={2}>
          <form method="POST" action="/api/save-conclusion">
            <Heading>Conclusion: {question}</Heading>
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

        <Container padding="5" maxW="2xl" bg="white.600" centerContent>
          <Heading w="100%" h="10" mb={4}>
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
                <strong>Evidence</strong> - Give the most significant pieces of
                evidence that make you believe your interpretation of ideas is
                the most appropriate one.
              </ListItem>
              <ListItem p={2} background="yellow.100">
                <strong>Prioritised</strong> - give the evidence in a
                prioritised form..
              </ListItem>
              <ListItem p={2} background="orange.200">
                <strong>Relate</strong> - State a brief summary that answers the
                question using the words of the title.
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
                    This essay argued that diets can be made to be successful as
                    long as appropriate steps are followed in making the diet
                    work.{" "}
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
                    their genetic make-up. By reliably following ‘what works’ a
                    person would be very likely to achieve a healthy weight. It
                    is reasonable to conclude diets can be made to succeed.
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
                  <VideoComponent></VideoComponent>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Container>
      </Grid>
    </>
  );
}
