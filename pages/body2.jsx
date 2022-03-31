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


    // get spider-diagram text 
  const storedBranch1 = storedSpiderText.branch1.split("\n");
  
  const topic1 = storedBranch1[0];
  const topic1_key = storedBranch1[1];
  const topic1_agree = storedBranch1[2];
  const topic1_disagree = storedBranch1[3];

  const storedBranch2 = storedSpiderText.branch2.split("\n");

  const topic2 = storedBranch2[0];
  const topic2_key = storedBranch2[1];
  const topic2_agree = storedBranch2[2];
  const topic2_disagree = storedBranch2[3];

  const storedBranch3 = storedSpiderText.branch3.split("\n");

  const topic3 = storedBranch3[0];
  const topic3_key = storedBranch3[1];
  const topic3_agree = storedBranch3[2];
  const topic3_disagree = storedBranch3[3];

  const storedBranch4 = storedSpiderText.branch4.split("\n");
  
  const topic4 = storedBranch4[0];
  const topic4_key = storedBranch4[1];
  const topic4_agree = storedBranch4[2];
  const topic4_disagree = storedBranch4[3];
  // get spider-diagram text 

  if (!storedBody2 ) {
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

export default function Body2({
  question,
  storedPoint,
  storedIdentify,
  storedOutline,
  storedExplain1,
  storedExplain2,
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
            topic1={topic1}
            topic1_key ={topic1_key}
            topic1_agree = {topic1_agree}
            topic1_disagree = {topic1_disagree}

            topic2={topic2}
            topic2_key ={topic2_key}
            topic2_agree = {topic2_agree}
            topic2_disagree = {topic2_disagree}

            topic3={topic3}
            topic3_key ={topic3_key}
            topic3_agree = {topic3_agree}
            topic3_disagree = {topic3_disagree}

            topic4={topic4}
            topic4_key ={topic4_key}
            topic4_agree = {topic4_agree}
            topic4_disagree = {topic4_disagree}
            ></BodySidebar>
          </Flex>
        </SimpleGrid>
      </Container>
    </Layout>
  );
}
