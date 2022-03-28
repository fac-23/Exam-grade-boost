import React from "react";
import { Flex, SimpleGrid, Container, Button, Heading } from "@chakra-ui/react";

import Navigation from "../components/Navigation";
import { getEssayInfo } from "../database/model.js";
import BodySidebar from "../components/BodySidebar";
import BodyInputGrid from "../components/BodyInputGrid";

export async function getServerSideProps({ req }) {
  const essayId = req.cookies.currEssay;
  const essayInfo = await getEssayInfo(essayId);

  const storedBody2 = essayInfo.body_2;
  const question = essayInfo.question;

  if (!storedBody2) {
    return {
      props: {
        question,
      },
    };
  }

  const splitSections = storedBody2.split("\n");
  const storedPoint = splitSections[0];
  const storedIdentify = splitSections[1];
  const storedOutline = splitSections[2];
  const storedExplain1 = splitSections[3];
  const storedExplain2 = splitSections[4];
  const storedRelate = splitSections[5];

  return {
    props: {
      question,
      storedPoint,
      storedIdentify,
      storedOutline,
      storedExplain1,
      storedExplain2,
      storedRelate,
    },
  };
}

export default function Body2({
  question,
  storedPoint,
  storedIdentify,
  storedOutline,
  storedExplain1,
  storedExplain2,
  storedRelate,
}) {
  return (
    <>
      <Navigation />
      <Container>
        <Heading as="h1" mb="2rem">
          Body paragraph: {question}
        </Heading>
        <SimpleGrid columns={[null, 1, 2]} spacing="4rem">
          <Flex direction="column" w="100%" h="100%" colSpan={2}>
            <form method="POST" action="/api/save-body2">
              <BodyInputGrid
                question={question}
                storedPoint={storedPoint}
                storedIdentify={storedIdentify}
                storedOutline={storedOutline}
                storedExplain1={storedExplain1}
                storedExplain2={storedExplain2}
                storedRelate={storedRelate}
              ></BodyInputGrid>
              <Button type="submit">Save and continue</Button>
            </form>
          </Flex>

          <Flex flexDirection="column" h="100%">
            <BodySidebar></BodySidebar>
          </Flex>
        </SimpleGrid>
      </Container>
    </>
  );
}
