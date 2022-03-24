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
  const [clickCount, setCount] = useState(0);
  const [falseBranches, setFalseBranches] = useState([]);
  const topicBranches = [
    storedBranch1,
    storedBranch2,
    storedBranch3,
    storedBranch4,
  ];
  // //let toAdd = 0
  // //filter to get the branches that are false
  // //get those branches index
  // //set toAdd to first branch index from false branches from array
  // //when clicked ge the toAdd value and set that branch on display to show
  // //then update toAdd to next false branch index
  // let trueBranches = topicBranches.filter((branch, index) =>
  //   !branch ?  : console.log(false)
  // );
  // console.log(trueBranches);

  function handleClick(e) {
    console.log(e.target);
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
            <Flex justify="center" alignItems="center" direction="row">
              <Textarea
                name="branch1"
                placeholder="branch1"
                defaultValue={storedBranch1 ? storedBranch1 : ""}
                m={10}
                borderColor="orange.300"
                visibility={
                  clickCount > 0 || storedBranch1 ? "visible" : "hidden"
                }
              ></Textarea>
              <Button w="100%" onClick={handleClick}>
                <AddIcon ml="1rem" />
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
                  clickCount > 1 || storedBranch2 ? "visible" : "hidden"
                }
              ></Textarea>
              <Button w="100%" onClick={handleClick}>
                <AddIcon ml="1rem" />
              </Button>
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
                <AddIcon ml="1rem" />
              </Button>
              <Textarea
                name="branch3"
                placeholder="branch3"
                defaultValue={storedBranch3 ? storedBranch3 : ""}
                m={10}
                borderColor="orange.300"
                visibility={
                  clickCount > 2 || storedBranch3 ? "visible" : "hidden"
                }
              ></Textarea>
            </Flex>
            <Flex justify="center" alignItems="center" direction="row">
              <Button w="100%" onClick={handleClick}>
                <AddIcon ml="1rem" />
              </Button>
              <Textarea
                name="branch4"
                placeholder="branch4"
                defaultValue={storedBranch4 ? storedBranch4 : ""}
                m={10}
                borderColor="orange.300"
                visibility={
                  clickCount > 3 || storedBranch4 ? "visible" : "hidden"
                }
              ></Textarea>
            </Flex>
          </Flex>
          <Flex alignItems="center" justifyContent="flex-end">
            <Button type="submit">Save and continue</Button>
          </Flex>
        </form>
      </Flex>
    </>
  );
}
