import React from "react";
import { useState } from "react";
import {
  Flex,
  Textarea,
  Heading,
  Button,
  Box,
  Container,
} from "@chakra-ui/react";
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

  const storedBranch1 = storedSpiderText.branch1.split("\n");
  const branch1Check = storedBranch1.join("") === "" ? false : true;

  const topic1 = storedBranch1[0];
  const topic1_key = storedBranch1[1];
  const topic1_agree = storedBranch1[2];
  const topic1_disagree = storedBranch1[3];

  const storedBranch2 = storedSpiderText.branch2.split("\n");
  const branch2Check = storedBranch2.join("") === "" ? false : true;

  const topic2 = storedBranch2[0];
  const topic2_key = storedBranch2[1];
  const topic2_agree = storedBranch2[2];
  const topic2_disagree = storedBranch2[3];

  const storedBranch3 = storedSpiderText.branch3.split("\n");
  const branch3Check = storedBranch3.join("") === "" ? false : true;

  const topic3 = storedBranch3[0];
  const topic3_key = storedBranch3[1];
  const topic3_agree = storedBranch3[2];
  const topic3_disagree = storedBranch3[3];

  const storedBranch4 = storedSpiderText.branch4.split("\n");
  const branch4Check = storedBranch4.join("") === "" ? false : true;

  const topic4 = storedBranch4[0];
  const topic4_key = storedBranch4[1];
  const topic4_agree = storedBranch4[2];
  const topic4_disagree = storedBranch4[3];

  return {
    props: {
      question,
      branch1Check,
      topic1,
      topic1_key,
      topic1_agree,
      topic1_disagree,
      branch2Check,
      topic2,
      topic2_key,
      topic2_agree,
      topic2_disagree,
      branch3Check,
      topic3,
      topic3_key,
      topic3_agree,
      topic3_disagree,
      branch4Check,
      topic4,
      topic4_key,
      topic4_agree,
      topic4_disagree,
    },
  };
}

export default function SpiderDiagram({
  question,
  branch1Check,
  topic1,
  topic1_key,
  topic1_agree,
  topic1_disagree,
  branch2Check,
  topic2,
  topic2_key,
  topic2_agree,
  topic2_disagree,
  branch3Check,
  topic3,
  topic3_key,
  topic3_agree,
  topic3_disagree,
  branch4Check,
  topic4,
  topic4_key,
  topic4_agree,
  topic4_disagree,
}) {
  const [topicBranch1, setTopicBranch1] = useState(false);
  const [topicBranch2, setTopicBranch2] = useState(false);
  const [topicBranch3, setTopicBranch3] = useState(false);
  const [topicBranch4, setTopicBranch4] = useState(false);

  return (
    <Layout>
      <Heading ml="1rem" mt="5rem">
        Spider diagram for {question}
      </Heading>
      <Flex
        justify="flex-start"
        alignItems="center"
        direction="column"
        p={5}
        w="100%"
        h="90vh"
      >
        <form method="POST" action="/api/spider-diagram">
          <Flex mb="1rem" alignItems="center" justifyContent="flex-end">
            <Button type="submit">Save and continue</Button>
          </Flex>
          <Flex
            direction="column"
            alignContent="center"
            justifyContent="center"
          >
            {/*top item in flex box*/}
            <Flex
              direction="row"
              alignContent="center"
              justifyContent="center"
              className="show"
            >
              <Textarea
                name="topic2_key"
                placeholder="Key"
                defaultValue={topic2_key ? topic2_key : ""}
                m="0 2.5rem 0 0"
                borderColor="primary"
                borderWidth='.15rem'
                visibility={topicBranch2 || branch2Check ? "visible" : "hidden"}
                className="show"
              ></Textarea>
              <Textarea
                name="topic2_agree"
                placeholder="Agree"
                defaultValue={topic2_agree ? topic2_agree : ""}
                borderColor="primary"
                borderWidth='.15rem'
                visibility={topicBranch2 || branch2Check ? "visible" : "hidden"}
                className="show"
              ></Textarea>
              <Textarea
                name="topic2_disagree"
                placeholder="Disagree"
                defaultValue={topic2_disagree ? topic2_disagree : ""}
                m="0 0 0 2.5rem"
                borderColor="primary"
                borderWidth='.15rem'
                visibility={topicBranch2 || branch2Check ? "visible" : "hidden"}
                className="show"
              ></Textarea>
            </Flex>       

            {/*2nd item in flex box*/}
            <Flex direction="row">
              {/*most left item in 2nd flex box*/}
              <Flex
                direction="column"
                alignContent="center"
                justifyContent="center"
                className="show"
              >
                <Textarea
                  name="topic1_key"
                  placeholder="Key"
                  defaultValue={topic1_key ? topic1_key : ""}
                  m="0 0 2.5rem 0"
                  borderColor="orange.300"
                  borderWidth='.15rem'
                  visibility={
                    topicBranch1 || branch1Check ? "visible" : "hidden"
                  }
                  className="show"
                ></Textarea>
                <Textarea
                  name="topic1_agree"
                  placeholder="Agree"
                  defaultValue={topic1_agree ? topic1_agree : ""}
                  borderColor="orange.300"
                  borderWidth='.15rem'
                  visibility={
                    topicBranch1 || branch1Check ? "visible" : "hidden"
                  }
                  className="show"
                ></Textarea>
                <Textarea
                  name="topic1_disagree"
                  placeholder="Disagree"
                  defaultValue={topic1_disagree ? topic1_disagree : ""}
                  m="2.5rem 0 0 0"
                  borderColor="orange.300"
                  borderWidth='.15rem'
                  visibility={
                    topicBranch1 || branch1Check ? "visible" : "hidden"
                  }
                  className="show"
                ></Textarea>
              </Flex>

              {/*2nd left item in 2nd flex box*/}
              <Flex
                mr="1rem"
                justify="center"
                alignItems="center"
                direction="row"
                className="justifyContent"
              >
                <Textarea
                  name="topic1"
                  placeholder="Topic 1"
                  defaultValue={topic1 ? topic1 : ""}
                  borderColor="orange.300"
                  borderWidth='.15rem'
                  visibility={
                    topicBranch1 || branch1Check ? "visible" : "hidden"
                  }
                 className="topic1_Margin"
                ></Textarea>
                <Button onClick={() => setTopicBranch1(true)}>
                  <Flex alignContent="center" justifyContent="center">
                    <AddIcon />
                  </Flex>
                </Button>
              </Flex>

              {/*middle item in 2nd flex box*/}
              <Flex justify="center" alignItems="center" direction="column">
                <Textarea
                  name="topic2"
                  placeholder="Topic 2"
                  defaultValue={topic2 ? topic2 : ""}
                  m="2.5rem"
                  borderColor="primary"
                  borderWidth='.15rem'
                  visibility={
                    topicBranch2 || branch2Check ? "visible" : "hidden"
                  }
                ></Textarea>
                <Button onClick={() => setTopicBranch2(true)}>
                  <Flex alignContent="center" justifyContent="center">
                    <AddIcon />
                  </Flex>
                </Button>
                <Box
                  h="3rem"
                  w="100%"
                  borderColor="black"
                  borderWidth=".15rem"
                  borderRadius="5px"
                  m="1rem"
                  textAlign="center"
                >
                  {question}
                </Box>
                <Button onClick={() => setTopicBranch3(true)}>
                  <Flex alignContent="center" justifyContent="center">
                    <AddIcon />
                  </Flex>
                </Button>
                <Textarea
                  name="topic3"
                  placeholder="Topic 3"
                  defaultValue={topic3 ? topic3 : ""}
                  m="2.5rem"
                  borderColor="red"
                  borderWidth='.15rem'
                  visibility={
                    topicBranch3 || branch3Check ? "visible" : "hidden"
                  }
                ></Textarea>
              </Flex>

              {/*4th item in 2nd flex box*/}

              <Flex
                ml="1rem"
                justify="center"
                alignItems="center"
                direction="row"
                className="justifyContent "
              >
                <Button onClick={() => setTopicBranch4(true)}>
                  <Flex alignContent="center" justifyContent="center">
                    <AddIcon />
                  </Flex>
                </Button>
                <Textarea
                  name="topic4"
                  placeholder="Topic 4"
                  defaultValue={topic4 ? topic4 : ""}
                  borderColor="green"
                  borderWidth='.15rem'
                  visibility={
                    topicBranch4 || branch4Check ? "visible" : "hidden"
                  }
                  className="topic4_Margin"
                ></Textarea>
              </Flex>

              {/*most right item in 2nd flex box*/}
              <Flex
                direction="column"
                alignContent="center"
                justifyContent="center"
                className="show"
              >
                <Textarea
                  name="topic4_key"
                  placeholder="Key"
                  defaultValue={topic4_key ? topic4_key : ""}
                  m="0 0 2.5rem 0"
                  borderColor="green"
                  borderWidth='.15rem'
                  visibility={
                    topicBranch4 || branch4Check ? "visible" : "hidden"
                  }
                  className="show"
                ></Textarea>
                <Textarea
                  name="topic4_agree"
                  placeholder="Agree"
                  defaultValue={topic4_agree ? topic4_agree : ""}
                  borderColor="green"
                  borderWidth='.15rem'
                  visibility={
                    topicBranch4 || branch4Check ? "visible" : "hidden"
                  }
                  className="show"
                ></Textarea>
                <Textarea
                  name="topic4_disagree"
                  placeholder="Disagree"
                  defaultValue={topic4_disagree ? topic4_disagree : ""}
                  m="2.5rem 0 0 0"
                  borderColor="green"
                  borderWidth='.15rem'
                  visibility={
                    topicBranch4 || branch4Check ? "visible" : "hidden"
                  }
                  className="show"
                ></Textarea>
              </Flex>
            </Flex>

            {/*last item in flex box*/}
            <Flex direction="row" alignContent="center" justifyContent="center">
              <Textarea
                name="topic3_key"
                placeholder="Key"
                defaultValue={topic3_key ? topic3_key : ""}
                m="0 2.5rem 0 0"
                borderColor="red"
                borderWidth='.15rem'
                visibility={topicBranch3 || branch3Check ? "visible" : "hidden"}
                className="show"
              ></Textarea>
              <Textarea
                name="topic3_agree"
                placeholder="Agree"
                defaultValue={topic3_agree ? topic3_agree : ""}
                borderColor="red"
                borderWidth='.15rem'
                visibility={topicBranch3 || branch3Check ? "visible" : "hidden"}
                className="show"
              ></Textarea>
              <Textarea
                name="topic3_disagree"
                placeholder="Disagree"
                defaultValue={topic3_disagree ? topic3_disagree : ""}
                m="0 0 0 2.5rem"
                borderColor="red"
                borderWidth='.15rem'
                visibility={topicBranch3 || branch3Check ? "visible" : "hidden"}
                className="show"
              ></Textarea>
            </Flex>
          </Flex>
        </form>
      </Flex>
    </Layout>
  );
}
