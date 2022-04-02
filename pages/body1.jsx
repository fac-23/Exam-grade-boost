import React from "react";
import { Flex, SimpleGrid, Container, Button, Heading } from "@chakra-ui/react";

import { getEssayInfo } from "../database/model.js";
import BodySidebar from "../components/BodySidebar";
import BodyInputGrid from "../components/BodyInputGrid";
import Layout from "../components/Layout";
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

  const storedBody1 = essayInfo.body_1;
  const question = essayInfo.question;
  const storedSpiderText = essayInfo.spider_1;
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

  if (!storedBody1) {
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

  const splitSections = storedBody1.split("\n");
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

export default function Body1({
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
            <form method="POST" action="/api/save-body1">
              <BodyInputGrid
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
              topic1_key={topic1_key}
              topic1_agree={topic1_agree}
              topic1_disagree={topic1_disagree}
              topic2={topic2}
              topic2_key={topic2_key}
              topic2_agree={topic2_agree}
              topic2_disagree={topic2_disagree}
              topic3={topic3}
              topic3_key={topic3_key}
              topic3_agree={topic3_agree}
              topic3_disagree={topic3_disagree}
              topic4={topic4}
              topic4_key={topic4_key}
              topic4_agree={topic4_agree}
              topic4_disagree={topic4_disagree}
            ></BodySidebar>
          </Flex>
        </SimpleGrid>
      </Container>
    </Layout>
  );
}
