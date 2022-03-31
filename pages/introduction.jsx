import React from "react";
import { useState } from "react";
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
  Collapse,
} from "@chakra-ui/react";

import { getEssayInfo } from "../database/model.js";
import VideoComponent from "../components/VideoComponent.jsx";
import Layout from "../components/Layout.jsx";
import { TriangleDownIcon } from "@chakra-ui/icons";

export async function getServerSideProps({ req }) {
  const essayId = req.cookies.currEssay;
  const essayInfo = await getEssayInfo(essayId);

  const storedIntro = essayInfo.introduction;
  const question = essayInfo.question;
  const storedSpiderText = essayInfo.spider_1;



//storedSpiderText might be null
//branch1 etc migh be null
//we want to split on branches that might not exist which causes a crash

  
  // get spider-diagram text 
  function checkSpiderObjectExists(storedSpiderText){
    if(!storedSpiderText){
      return false
    }
    else return storedSpiderText
  }

  function checkBranchExists(branch){
    if(!branch){
      return false 
    }
    else return branch.split("\n");
  }


  
  

    function extractTopics(storedSpiderText, branchName){

    if(checkSpiderObjectExists(storedSpiderText)){
      //know spider exists
       const storedBranch = checkBranchExists(storedSpiderText[branchName])
       if(storedBranch){
         return storedBranch
       }
     
    }
    return [null, null, null, null, null]
  }

    const branch1Extract = extractTopics(storedSpiderText,"branch1")  

    const topic1 = branch1Extract[0]
    const topic1_key = branch1Extract[1]
    const topic1_agree = branch1Extract[2]
    const topic1_disagree = branch1Extract[3]


    const branch2Extract = extractTopics(storedSpiderText,"branch2")  

    const topic2 = branch2Extract[0]
    const topic2_key = branch2Extract[1]
    const topic2_agree = branch2Extract[2]
    const topic2_disagree = branch2Extract[3]

    const branch3Extract = extractTopics(storedSpiderText,"branch3")  

    const topic3 = branch3Extract[0]
    const topic3_key = branch3Extract[1]
    const topic3_agree = branch3Extract[2]
    const topic3_disagree = branch3Extract[3]
  
    const branch4Extract = extractTopics(storedSpiderText,"branch4")  
    const topic4 = branch4Extract[0];
    const topic4_key = branch4Extract[1];
    const topic4_agree = branch4Extract[2];
    const topic4_disagree = branch4Extract[3];

  
   
  
 
  //^^^^^
  // get spider-diagram text 

  if (!storedIntro) {
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

  const splitSections = storedIntro.split("\n");
  const storedSummary = splitSections[0];
  const storedMain = splitSections[1];
  const storedOpposite = splitSections[2];
  const storedKey = splitSections[3];

  console.log('sst',storedSpiderText)

  return {
    props: {
      question,
      storedSummary,
      storedMain,
      storedOpposite,
      storedKey,
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

export default function Introduction({
  question,
  storedSummary,
  storedMain,
  storedOpposite,
  storedKey,
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
          Introduction: {question}
        </Heading>

        <SimpleGrid columns={[null, 1, 2]} spacing="4rem">
          <Flex direction="column" w="100%" h="100%" colSpan={2}>
            <form method="POST" action="/api/save-introduction">
              <Flex>
                <Textarea
                  name="summary"
                  placeholder="summary"
                  defaultValue={storedSummary ? storedSummary : ""}
                  borderColor="black.300"
                  borderWidth="1.5px"
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
                  bg="gray.100"
                  rounded="md"
                  shadow="md"
                >
                  <UnorderedList p="1rem">
                    <strong>Summary suggestions</strong>
                    <ListItem>This assignment discusses...</ListItem>
                    <ListItem>
                      If a solution to the issue of...could be found it would
                      bring many benefits...
                    </ListItem>
                    <ListItem>
                      Discussion exists around the topic of...
                    </ListItem>
                    <ListItem>
                      In the last 30 years, many researchers have
                      investigated...
                    </ListItem>
                  </UnorderedList>
                </Box>
              </Collapse>
              <Flex>
                <Textarea
                  name="main"
                  placeholder="main argument"
                  defaultValue={storedMain ? storedMain : ""}
                  borderColor="blue.300"
                  borderWidth="1.5px"
                  mt="0.5rem"
                ></Textarea>
                <Button
                  p="2"
                  m="2"
                  size="sm"
                  onClick={() => setIsOpen([false, !isOpen[1], false, false])}
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
                  bg="blue.100"
                  rounded="md"
                  shadow="md"
                >
                  <UnorderedList p="1rem">
                    <strong>Main suggestions</strong>
                    <ListItem>Many experts believe that...</ListItem>
                    <ListItem>One view is...</ListItem>
                    <ListItem>Some research suggests... </ListItem>
                    <ListItem>Some evidence indicates... </ListItem>
                  </UnorderedList>
                </Box>
              </Collapse>

              <Flex>
                <Textarea
                  name="opposite"
                  placeholder="opposite argument"
                  defaultValue={storedOpposite ? storedOpposite : ""}
                  borderColor="yellow.300"
                  borderWidth="1.5px"
                  mt="0.5rem"
                ></Textarea>
                <Button
                  p="2"
                  m="2"
                  size="sm"
                  onClick={() => setIsOpen([false, false, !isOpen[2], false])}
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
                  bg="yellow.100"
                  rounded="md"
                  shadow="md"
                >
                  <UnorderedList p="1rem">
                    <strong>Opposite Argument suggestions</strong>
                    <ListItem>The evidence is mixed...</ListItem>
                    <ListItem>
                      Some evidence points in a different direction...
                    </ListItem>
                    <ListItem>However, there are different views...</ListItem>
                    <ListItem>
                      However, other experts take a different view
                    </ListItem>
                  </UnorderedList>
                </Box>
              </Collapse>

              <Flex>
                <Textarea
                  name="key"
                  placeholder="key themes"
                  defaultValue={storedKey ? storedKey : ""}
                  borderColor="orange.300"
                  borderWidth="1.5px"
                  mt="0.5rem"
                  mb="1rem"
                ></Textarea>
                <Button
                  p="2"
                  m="2"
                  size="sm"
                  onClick={() => setIsOpen([false, false, false, !isOpen[3]])}
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
                  bg="orange.200"
                  rounded="md"
                  shadow="md"
                >
                  <UnorderedList p="1rem">
                    <strong p="1rem">Key Theme suggestions</strong>
                    <ListItem>
                      There are several reasons for this debate which will be
                      summarised...
                    </ListItem>
                    <ListItem>
                      Research has focused on around key topics. Some areas of
                      the most significant areas of discussion are...
                    </ListItem>
                    <ListItem>
                      To provide some resolution to the discussion, the
                      following areas will be investigated. Several areas will
                      be considered...
                    </ListItem>
                  </UnorderedList>
                </Box>
              </Collapse>

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
                    <AccordionButton color={labelModeColour}>
                      <Box flex="1" textAlign="left">
                        Planning text
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} color="black">
            
            {topic1? <div>
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
            </div>: <div></div>}
            {topic2? <div>
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
            </div>: <div></div>}
            {topic3? <div>
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
            </div>: <div></div>}
            {topic4? <div>
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
            </div>: <div></div>}

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
