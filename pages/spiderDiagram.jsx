import React from "react";
import { Flex, Textarea, Heading, Button, Box } from "@chakra-ui/react";

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

export default function spiderDiagram({
  question,
  storedBranch1,
  storedBranch2,
  storedBranch3,
  storedBranch4,
}) {
  return (
    <>
      <Navigation />
      <Heading mt={10}>Spider diagram for {question}</Heading>
      <Flex p={5} w="100%" h="10">
        <form method="POST" action="/api/spider-diagram">
          <Flex direction="row">
            <Flex justify="center" alignItems="center" direction="column">
              {" "}
              <Textarea
                name="branch1"
                placeholder="branch1"
                defaultValue={storedBranch1 ? storedBranch1 : ""}
                //mb={5}
              ></Textarea>
            </Flex>
            <Flex justify="center" alignItems="center" direction="column">
              <Textarea
                name="branch2"
                placeholder="branch2"
                defaultValue={storedBranch2 ? storedBranch2 : ""}
                //mb={5}
              ></Textarea>
              <Box
                h="3rem"
                w="100%"
                p={1}
                borderColor="black"
                borderWidth="1.5px"
                borderRadius="5px"
              >
                {question}
              </Box>
              <Textarea
                name="branch3"
                placeholder="branch3"
                defaultValue={storedBranch3 ? storedBranch3 : ""}
                // mb={5}
              ></Textarea>
            </Flex>
            <Flex justify="center" alignItems="center" direction="column">
              <Textarea
                name="branch4"
                placeholder="branch4"
                defaultValue={storedBranch4 ? storedBranch4 : ""}
                // mb={5}
              ></Textarea>
            </Flex>
          </Flex>
          <Button type="submit">Save and continue</Button>
        </form>
      </Flex>
    </>
  );
}
