import React from "react";
import { useState } from "react";
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
  Collapse,
} from "@chakra-ui/react";

import { getEssayInfo } from "../database/model.js";
import VideoComponent from "../components/VideoComponent";
import Layout from "../components/Layout";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { cookiesTampered } from "../auth.js";

export async function getServerSideProps({ req, res }) {
  const suspectReq = await cookiesTampered(req, res);
  if (suspectReq) {
    return {
      props: {},
    };
  }

  const essayId = req.cookies.currEssay;
  const essayInfo = await getEssayInfo(essayId);

  const storedConclusion = essayInfo.conclusion;
  const storedSpiderText = essayInfo.spider_1;
  const question = essayInfo.question;

  // get spider-diagram text
  function checkSpiderObjectExists(storedSpiderText) {
    if (!storedSpiderText) {
      return false;
    } else return storedSpiderText;
  }

  function checkBranchExists(branch) {
    if (!branch) {
      return false;
    } else return branch.split("\n");
  }

  function extractTopics(storedSpiderText, branchName) {
    if (checkSpiderObjectExists(storedSpiderText)) {
      //know spider exists
      const storedBranch = checkBranchExists(storedSpiderText[branchName]);
      if (storedBranch) {
        return storedBranch;
      }
    }
    return [null, null, null, null, null];
  }

  const branch1Extract = extractTopics(storedSpiderText, "branch1");

  const topic1 = branch1Extract[0];
  const topic1_key = branch1Extract[1];
  const topic1_agree = branch1Extract[2];
  const topic1_disagree = branch1Extract[3];

  const branch2Extract = extractTopics(storedSpiderText, "branch2");

  const topic2 = branch2Extract[0];
  const topic2_key = branch2Extract[1];
  const topic2_agree = branch2Extract[2];
  const topic2_disagree = branch2Extract[3];

  const branch3Extract = extractTopics(storedSpiderText, "branch3");

  const topic3 = branch3Extract[0];
  const topic3_key = branch3Extract[1];
  const topic3_agree = branch3Extract[2];
  const topic3_disagree = branch3Extract[3];

  const branch4Extract = extractTopics(storedSpiderText, "branch4");
  const topic4 = branch4Extract[0];
  const topic4_key = branch4Extract[1];
  const topic4_agree = branch4Extract[2];
  const topic4_disagree = branch4Extract[3];

  //^^^^^
  // get spider-diagram text

  if (!storedConclusion) {
    return {
      props: {
        question,
        topic1,
        topic1_key,
        topic1_agree,
        topic1_disagree,
        topic2,
        topic2_key,
        topic2_agree,
        topic2_disagree,
        topic3,
        topic3_key,
        topic3_agree,
        topic3_disagree,
        topic4,
        topic4_key,
        topic4_agree,
        topic4_disagree,
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
      topic1,
      topic1_key,
      topic1_agree,
      topic1_disagree,
      topic2,
      topic2_key,
      topic2_agree,
      topic2_disagree,
      topic3,
      topic3_key,
      topic3_agree,
      topic3_disagree,
      topic4,
      topic4_key,
      topic4_agree,
      topic4_disagree,
    },
  };
}

export default function Conclusion({
  question,
  storedMain,
  storedEvidence,
  storedPriority,
  storedRelate,
  topic1,
  topic1_key,
  topic1_agree,
  topic1_disagree,
  topic2,
  topic2_key,
  topic2_agree,
  topic2_disagree,
  topic3,
  topic3_key,
  topic3_agree,
  topic3_disagree,
  topic4,
  topic4_key,
  topic4_agree,
  topic4_disagree,
}) {
  const labelModeColour = useColorModeValue("black", "white");
  const [isOpen, setIsOpen] = useState([false, false, false, false]);

  return (
    <Layout>
      <Container centerContent>
        <Heading as="h1" mb="2rem">
          Conclusion: {question}
        </Heading>
        <SimpleGrid columns={[null, 1, 2]} spacing="40px">
          <Flex mt={5} direction="column" p={5} w="100%" h="100%" colSpan={2}>
            <form method="POST" action="/api/save-conclusion">
              <Flex>
                <Textarea
                  name="main"
                  placeholder="Main argument"
                  defaultValue={storedMain ? storedMain : ""}
                  borderColor="pink.200"
                  borderWidth="0.15rem"
                  mt="2"
                ></Textarea>
                <Button
                  p="2"
                  m="2"
                  size="sm"
                  onClick={() => {
                    setIsOpen([!isOpen[0], false, false, false]);
                  }}
                  fontSize="sm"
                  fontWeight="medium"
                >
                  <TriangleDownIcon />
                </Button>
              </Flex>
              <Collapse in={isOpen[0]} animateOpacity>
                <Box
                  p="10px"
                  color="black"
                  mt="1"
                  mb="2"
                  bg="pink.100"
                  rounded="md"
                  shadow="md"
                >
                  <UnorderedList p="1rem">
                    <strong>Main argument suggestions</strong>
                    <ListItem>This assignment discusses...</ListItem>
                    <ListItem>
                      The main claim assessed was... and it was supported by the
                      evidence...
                    </ListItem>
                    <ListItem>
                      The level of significance...was examined and found to
                      be...
                    </ListItem>
                  </UnorderedList>
                </Box>
              </Collapse>

              <Flex>
                <Textarea
                  name="evidence"
                  placeholder="Evidence"
                  defaultValue={storedEvidence ? storedEvidence : ""}
                  borderColor="yellow.200"
                  borderWidth="0.15rem"
                  mt="2"
                ></Textarea>
                <Button
                  p="2"
                  m="2"
                  size="sm"
                  onClick={() => {
                    setIsOpen([false, !isOpen[1], false, false]);
                  }}
                  fontSize="sm"
                  fontWeight="medium"
                >
                  <TriangleDownIcon />
                </Button>
              </Flex>
              <Collapse in={isOpen[1]} animateOpacity>
                <Box
                  p="10px"
                  color="black"
                  mt="1"
                  mb="2"
                  bg="yellow.100"
                  rounded="md"
                  shadow="md"
                >
                  <UnorderedList p="1rem">
                    <strong>Evidence suggestions</strong>
                    <p>The most important evidence on the topic was...</p>
                    <p>A consistent theme in the evidence was...</p>
                    <p>A noticeable pattern was seen... </p>
                  </UnorderedList>
                </Box>
              </Collapse>

              <Flex>
                <Textarea
                  name="priority"
                  placeholder="Priority Evidence"
                  defaultValue={storedPriority ? storedPriority : ""}
                  borderColor="teal.200"
                  borderWidth="0.15rem"
                  mt="2"
                ></Textarea>
                <Button
                  p="2"
                  m="2"
                  size="sm"
                  onClick={() => {
                    setIsOpen([false, false, !isOpen[2], false]);
                  }}
                  fontSize="sm"
                  fontWeight="medium"
                >
                  <TriangleDownIcon />
                </Button>
              </Flex>
              <Collapse in={isOpen[2]} animateOpacity>
                <Box
                  p="10px"
                  color="black"
                  mt="1"
                  mb="2"
                  bg="teal.50"
                  rounded="md"
                  shadow="md"
                >
                  <UnorderedList p="1rem">
                    <strong>Priority suggestions</strong>
                    <ListItem>The most important evidence was...</ListItem>
                    <ListItem>Some key principles were... </ListItem>
                  </UnorderedList>
                </Box>
              </Collapse>

              <Flex>
                <Textarea
                  name="relate"
                  placeholder="Relate"
                  defaultValue={storedRelate ? storedRelate : ""}
                  borderColor="pink.400"
                  borderWidth="0.15rem"
                  mt="2"
                  mb="2"
                ></Textarea>
                <Button
                  p="2"
                  m="2"
                  size="sm"
                  onClick={() => {
                    setIsOpen([false, false, false, !isOpen[3]]);
                  }}
                  fontSize="sm"
                  fontWeight="medium"
                >
                  <TriangleDownIcon />
                </Button>
              </Flex>
              <Collapse in={isOpen[3]} animateOpacity>
                <Box
                  p="10px"
                  color="black"
                  mt="1"
                  mb="2"
                  bg="pink.200"
                  rounded="md"
                  shadow="md"
                >
                  <UnorderedList p="1rem">
                    <strong>Relate</strong>
                    <ListItem>Overall, the evidence suggests...</ListItem>
                    <ListItem>
                      A likely application for these findings is...
                    </ListItem>
                    <ListItem>
                      Although the evidence is mixed, there is more... than...
                    </ListItem>
                    <ListItem>To conclude...</ListItem>
                  </UnorderedList>
                </Box>
              </Collapse>

              <Button type="submit">Save and continue</Button>
            </form>
          </Flex>

          <Flex direction="column" h="100%">
            <Heading as="h2" size="lg" w="100%" mb="2rem">
              How to write your conclusion
            </Heading>
            <Box color="black">
              <UnorderedList styleType="none" mb={5}>
                <ListItem p={2} background="pink.100">
                  <strong>Main Argument</strong> - The main argument you believe
                  to be true in your essay ??? complete with the paragraph topics
                  that make that argument true. This should clearly be very
                  similar to your introduction.
                </ListItem>
                <ListItem p={2} background="yellow.100">
                  <strong>Evidence</strong> - Give the most significant pieces
                  of evidence that make you believe your interpretation of ideas
                  is the most appropriate one.
                </ListItem>
                <ListItem p={2} background="teal.50">
                  <strong>Prioritised</strong> - give the evidence in a
                  prioritised form..
                </ListItem>
                <ListItem p={2} background="pink.200">
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
                    <Text as="mark" backgroundColor="pink.100">
                      This essay argued that diets can be made to be successful
                      as long as appropriate steps are followed in making the
                      diet work.{" "}
                    </Text>
                    <Text as="mark" backgroundColor="yellow.100">
                      Particularly important features include a focus on good
                      quality low fat, lightly processed foods.{" "}
                    </Text>
                    <Text as="mark" backgroundColor="teal.50">
                      A range of social support networks is also important. A
                      person seeking the diet would aim to keep their mood as
                      positive as possible and they would aim to stop their
                      attention dwelling too much on the diet ??? and rather focus
                      on the positive features of the healthy food they were
                      eating.
                    </Text>{" "}
                    <Text as="mark" backgroundColor="pink.200">
                      The person could also balance their diet to work well with
                      their genetic make-up. By reliably following ???what works???
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
                    <VideoComponent src="https://player.vimeo.com/video/692870402?h=cdbc739303"></VideoComponent>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton color={labelModeColour}>
                      <Box flex="1" textAlign="left">
                        Planning text
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>

                  <AccordionPanel pb={4} color="black">
                    {topic1 ? (
                      <div>
                        <Box
                          borderColor="black"
                          borderWidth="1px"
                          p={1}
                          textAlign="left"
                          backgroundColor="orange.100"
                        >
                          <h3>Topic 1:</h3>
                          <Text>{topic1 ? topic1 : ""}</Text>
                        </Box>
                        <Box
                          borderColor="black"
                          borderWidth="1px"
                          p={1}
                          textAlign="left"
                          backgroundColor="orange.200"
                        >
                          <h3>key</h3>
                          <Text>{topic1_key ? topic1_key : ""}</Text>
                        </Box>
                        <Box
                          borderColor="black"
                          borderWidth="1px"
                          p={1}
                          textAlign="left"
                          backgroundColor="orange.300"
                        >
                          <h3>agree:</h3>
                          <Text>{topic1_agree ? topic1_agree : ""}</Text>
                        </Box>
                        <Box
                          borderColor="black"
                          borderWidth="1px"
                          p={1}
                          textAlign="left"
                          backgroundColor="orange.400"
                        >
                          <h3>disagree</h3>
                          <Text>{topic1_disagree ? topic1_disagree : ""}</Text>
                        </Box>
                      </div>
                    ) : (
                      <div></div>
                    )}
                    {topic2 ? (
                      <div>
                        <Box
                          borderColor="black"
                          borderWidth="1px"
                          p={1}
                          textAlign="left"
                          backgroundColor="orange.100"
                        >
                          <h3>Topic 2:</h3>
                          <Text>{topic2 ? topic2 : ""}</Text>
                        </Box>
                        <Box
                          borderColor="black"
                          borderWidth="1px"
                          p={1}
                          textAlign="left"
                          backgroundColor="orange.200"
                        >
                          <h3>Key:</h3>
                          <Text>{topic2_key ? topic2_key : ""}</Text>
                        </Box>
                        <Box
                          borderColor="black"
                          borderWidth="1px"
                          p={1}
                          textAlign="left"
                          backgroundColor="orange.300"
                        >
                          <h3>agree:</h3>
                          <Text>{topic2_agree ? topic2_agree : ""}</Text>
                        </Box>
                        <Box
                          borderColor="black"
                          borderWidth="1px"
                          p={1}
                          textAlign="left"
                          backgroundColor="orange.400"
                        >
                          <h3>disagree:</h3>
                          <Text>{topic2_disagree ? topic2_disagree : ""}</Text>
                        </Box>
                      </div>
                    ) : (
                      <div></div>
                    )}
                    {topic3 ? (
                      <div>
                        <Box
                          borderColor="black"
                          borderWidth="1px"
                          p={1}
                          textAlign="left"
                          backgroundColor="orange.100"
                        >
                          <h3>Topic 3:</h3>
                          <Text>{topic3 ? topic3 : ""}</Text>
                        </Box>

                        <Box
                          borderColor="black"
                          borderWidth="1px"
                          p={1}
                          textAlign="left"
                          backgroundColor="orange.200"
                        >
                          <h3>Key:</h3>
                          <Text>{topic3_key ? topic3_key : ""}</Text>
                        </Box>
                        <Box
                          borderColor="black"
                          borderWidth="1px"
                          p={1}
                          textAlign="left"
                          backgroundColor="orange.300"
                        >
                          <h3>agree:</h3>
                          <Text>{topic3_agree ? topic3_agree : ""}</Text>
                        </Box>
                        <Box
                          borderColor="black"
                          borderWidth="1px"
                          p={1}
                          textAlign="left"
                          backgroundColor="orange.400"
                        >
                          <h3>disagree:</h3>
                          <Text>{topic3_disagree ? topic3_disagree : ""}</Text>
                        </Box>
                      </div>
                    ) : (
                      <div></div>
                    )}
                    {topic4 ? (
                      <div>
                        <Box
                          borderColor="black"
                          borderWidth="1px"
                          p={1}
                          textAlign="left"
                          backgroundColor="orange.100"
                        >
                          <h3>Topic 4:</h3>
                          <Text>{topic4 ? topic4 : ""}</Text>
                        </Box>
                        <Box
                          borderColor="black"
                          borderWidth="1px"
                          p={1}
                          textAlign="left"
                          backgroundColor="orange.200"
                        >
                          <h3>Key:</h3>
                          <Text>{topic4_key ? topic4_key : ""}</Text>
                        </Box>
                        <Box
                          borderColor="black"
                          borderWidth="1px"
                          p={1}
                          textAlign="left"
                          backgroundColor="orange.300"
                        >
                          <h3>agree:</h3>
                          <Text>{topic4_agree ? topic4_agree : ""}</Text>
                        </Box>
                        <Box
                          borderColor="black"
                          borderWidth="1px"
                          p={1}
                          textAlign="left"
                          backgroundColor="orange.400"
                        >
                          <h3>disagree:</h3>
                          <Text>{topic4_disagree ? topic4_disagree : ""}</Text>
                        </Box>
                      </div>
                    ) : (
                      <div></div>
                    )}
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
