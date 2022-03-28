import React from "react";
import { Flex, Grid, Container, Button } from "@chakra-ui/react";

import { getEssayInfo } from "../database/model.js";
import BodySidebar from "../components/BodySidebar";
import BodyInputGrid from "../components/BodyInputGrid";
import Layout from "../components/Layout";

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
    <Layout>
      <Grid mt={4} templateColumns="repeat(2, 0.5fr)" gap={6}>
        <Flex direction="column" p={5} w="100%" h="10" colSpan={2}>
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

        <Container padding="5" maxW="2xl" bg="white.600" centerContent>
          <BodySidebar></BodySidebar>
        </Container>
      </Grid>
    </Layout>
  );
}
