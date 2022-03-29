import React from "react";
import { Flex, SimpleGrid, Container, Button, Heading } from "@chakra-ui/react";

import { getEssayInfo } from "../database/model.js";
import BodySidebar from "../components/BodySidebar";
import BodyInputGrid from "../components/BodyInputGrid";
import Layout from "../components/Layout";

export async function getServerSideProps({ req }) {
  const essayId = req.cookies.currEssay;
  const essayInfo = await getEssayInfo(essayId);

  const storedBody2 = essayInfo.body_2;
  const question = essayInfo.question;
  const storedSpiderText = essayInfo.spider_1;


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

  const splitBranches = storedSpiderText.split("\n");
  const storedBranch2 = splitBranches[1];
  const storedBranch1 = splitBranches[0];
  const storedBranch3 = splitBranches[2];
  const storedBranch4 = splitBranches[3];

  return {
    props: {
      question,
      storedPoint,
      storedIdentify,
      storedOutline,
      storedExplain1,
      storedExplain2,
      storedRelate,
      storedBranch1,
      storedBranch2,
      storedBranch3,
      storedBranch4
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
  storedBranch1,
  storedBranch2,
  storedBranch3,
  storedBranch4
}) {
  return (
      <Layout>
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
            <BodySidebar
             storedBranch1={storedBranch1}
             storedBranch2={storedBranch2}
             storedBranch3={storedBranch3}
             storedBranch4={storedBranch4}
            ></BodySidebar>
          </Flex>
        </SimpleGrid>
      </Container>
    </Layout>
  );
}
