import React from "react";
import { useState } from "react";
import { Flex, Textarea, Heading, Button, Box } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

import Layout from "../components/Layout.jsx";
import { getEssayInfo } from "../database/model.js";
export async function getServerSideProps({ req }) {
  const essayId = req.cookies.currEssay;
  const essayInfo = await getEssayInfo(essayId);


  const storedSpiderText = essayInfo.spider_1;
  const question = essayInfo.question;

  if (!storedSpiderText) {
    return {
      props: {
        question,
      },
    };
  }

  const splitSections = storedSpiderText.split("\n");
  const storedBranch1 = splitSections[0];
  const storedBranch2 = splitSections[1];
  const storedBranch3 = splitSections[2];
  const storedBranch4 = splitSections[3];

  return {
    props: {
      question,
      storedBranch1,
      storedBranch2,
      storedBranch3,
      storedBranch4,
    },
  };
}

export default function SpiderDiagram({
  question,
  storedBranch1,
  storedBranch2,
  storedBranch3,
  storedBranch4,
}) {
  const [topicBranch1, setTopicBranch1] = useState(false);
  const [topicBranch2, setTopicBranch2] = useState(false);
  const [topicBranch3, setTopicBranch3] = useState(false);
  const [topicBranch4, setTopicBranch4] = useState(false);

  return (
    <Layout>
      <Heading mt="5rem">Spider diagram for {question}</Heading>
      <Flex
        justify="center"
        alignItems="center"
        direction="column"
        p={5}
        w="100%"
        h="90vh"
      >
        <form method="POST" action="/api/spider-diagram">
          <Flex direction="row">
            <Flex justify="center" alignItems="center" direction="row">
              <Textarea
                name="branch1"
                placeholder="branch1"
                defaultValue={storedBranch1 ? storedBranch1 : ""}
                m={10}
                borderColor="orange.300"
                visibility={
                  topicBranch1 || storedBranch1 ? "visible" : "hidden"
                }
              ></Textarea>
              <Button w="10%" onClick={() => setTopicBranch1(true)}>
                <Flex alignContent="center" justifyContent="center">
                  <AddIcon />
                </Flex>
              </Button>
            </Flex>
            <Flex
              m={10}
              justify="center"
              alignItems="center"
              direction="column"
            >
              <Textarea
                name="branch2"
                placeholder="branch2"
                defaultValue={storedBranch2 ? storedBranch2 : ""}
                m={10}
                borderColor="orange.300"
                visibility={
                  topicBranch2 || storedBranch2 ? "visible" : "hidden"
                }
              ></Textarea>
              <Button w="10%" onClick={() => setTopicBranch2(true)}>
                <Flex alignContent="center" justifyContent="center">
                  <AddIcon />
                </Flex>
              </Button>
              <Box
                h="3rem"
                w="100%"
                //mb="1rem"
                borderColor="black"
                borderWidth="1.5px"
                borderRadius="5px"
                m="1rem"
                textAlign="center"
              >
                {question}
              </Box>
              <Button w="10%" onClick={() => setTopicBranch3(true)}>
                <Flex alignContent="center" justifyContent="center">
                  <AddIcon />
                </Flex>
              </Button>
              <Textarea
                name="branch3"
                placeholder="branch3"
                defaultValue={storedBranch3 ? storedBranch3 : ""}
                m={10}
                borderColor="orange.300"
                visibility={
                  topicBranch3 || storedBranch3 ? "visible" : "hidden"
                }
              ></Textarea>
            </Flex>
            <Flex justify="center" alignItems="center" direction="row">
              <Button w="10%" onClick={() => setTopicBranch4(true)}>
                <Flex alignContent="center" justifyContent="center">
                  <AddIcon />
                </Flex>
              </Button>
              <Textarea
                name="branch4"
                placeholder="branch4"
                defaultValue={storedBranch4 ? storedBranch4 : ""}
                m={10}
                borderColor="orange.300"
                visibility={
                  topicBranch4 || storedBranch4 ? "visible" : "hidden"
                }
              ></Textarea>
            </Flex>
          </Flex>
          <Flex alignItems="center" justifyContent="flex-end">
            <Button type="submit">Save and continue</Button>
          </Flex>
        </form>
      </Flex>
    </Layout>
  );
}
