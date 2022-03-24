import React from "react";
import { useState } from "react";
import {
  Flex,
  Textarea,
  Heading,
  Button,
  Box,
  UseControllableStateProp,
  useControllableState,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

import Navigation from "../components/Navigation";
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
  console.log(splitSections);
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
  const [showBranch1, setShowBranch1] = useState("none");
  const [showBranch2, setShowBranch2] = useState("none");
  const [showBranch3, setShowBranch3] = useState("none");
  const [showBranch4, setShowBranch4] = useState("none");

  const [clickCount, setCount] = useState(0);

  function handleClick() {
    setCount(clickCount + 1);
    console.log("click count", clickCount);
  }

  return (
    <>
      <Navigation />
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
            <Flex justify="center" alignItems="center" direction="column">
              <Textarea
                name="branch1"
                placeholder="branch1"
                defaultValue={storedBranch1 ? storedBranch1 : ""}
                m={10}
                borderColor="orange.300"
                display={clickCount > 0 ? "block" : "none"}
              ></Textarea>
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
                display={clickCount > 1 ? "block" : "none"}
              ></Textarea>
              <Box
                h="3rem"
                w="100%"
                //mb="1rem"
                borderColor="black"
                borderWidth="1.5px"
                borderRadius="5px"
                mb="1rem"
                textAlign="center"
              >
                {question}
              </Box>
              <Button w="100%" onClick={handleClick}>
                Add a branch for a topic <AddIcon ml="1rem" />
              </Button>
              <Textarea
                name="branch3"
                placeholder="branch3"
                defaultValue={storedBranch3 ? storedBranch3 : ""}
                m={10}
                borderColor="orange.300"
                display={clickCount > 2 ? "block" : "none"}
              ></Textarea>
            </Flex>
            <Flex justify="center" alignItems="center" direction="column">
              <Textarea
                name="branch4"
                placeholder="branch4"
                defaultValue={storedBranch4 ? storedBranch4 : ""}
                m={10}
                borderColor="orange.300"
                display={clickCount > 3 ? "block" : "none"}
              ></Textarea>
            </Flex>
          </Flex>
          <Button type="submit">Save and continue</Button>
        </form>
      </Flex>
    </>
  );
}
