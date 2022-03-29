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

 // const splitSections = storedSpiderText.split("\n");

  const storedBranch1 = storedSpiderText[0].split("\n");

  const topic1 = {}

  storedBranch1.forEach((item,index)=>{
    let keyName = 'sb'+ index
    topic1[keyName] = item
  })
  
  console.log('stpt',storedSpiderText)
  console.log('topic1',topic1)

  // const topic1_key = storedBranch1[1]
  // const topic1_evidence = storedBranch1[2]
  // const topic1_point = storedBranch1[3]

   const storedBranch2 = storedSpiderText[1].split("\n");

  // const topic2 = storedBranch2[0]
  // const topic2_key = storedBranch2[1]
  // const topic2_evidence = storedBranch2[2]
  // const topic2_point = storedBranch2[3]

   const storedBranch3 = storedSpiderText[2].split("\n");

  // const topic3 = storedBranch3[0]
  // const topic3_key = storedBranch3[1]
  // const topic3_evidence = storedBranch3[2]
  // const topic3_point = storedBranch3[3]

   const storedBranch4 = storedSpiderText[3].split("\n");

  // const topic4 = storedBranch4[0]
  // const topic4_key = storedBranch4[1]
  // const topic4_evidence = storedBranch4[2]
  // const topic4_point = storedBranch4[3]

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

      <Flex direction="column" alignContent="center" justifyContent="center">

      {/*top item in flex box*/ }
        <Flex direction="row" alignContent="center" justifyContent="center" mr='2.5rem'>
            <Textarea
                name="branch2_key"
                placeholder="key"
                defaultValue={storedBranch1 ? storedBranch1 : ""}
                m='0 2.5rem 0 0'
                borderColor="orange.300"
                visibility={
                  topicBranch2 || storedBranch2 ? "visible" : "hidden"
                }
              ></Textarea>
               <Textarea
                name="branch2_agree"
                placeholder="agree"
                defaultValue={storedBranch1 ? storedBranch1 : ""}
                borderColor="orange.300"
                visibility={
                  topicBranch2 || storedBranch2 ? "visible" : "hidden"
                }
              ></Textarea>
               <Textarea
                name="branch2_disagree"
                placeholder="disagree"
                defaultValue={storedBranch1 ? storedBranch1 : ""}
                m='0 0 0 2.5rem'
                borderColor="orange.300"
                visibility={
                  topicBranch2 || storedBranch2 ? "visible" : "hidden"
                }
              ></Textarea>
            </Flex>

 {/*2nd item in flex box*/ }
          <Flex direction="row">

             {/*most left item in 2nd flex box*/ }
            <Flex direction="column" alignContent="center" justifyContent="center">
            <Textarea
                name="branch1_key"
                placeholder="key"
                defaultValue={storedBranch1 ? storedBranch1 : ""}
                m='0 0 2.5rem 0'
                borderColor="orange.300"
                visibility={
                  topicBranch1 || storedBranch1 ? "visible" : "hidden"
                }
              ></Textarea>
               <Textarea
                name="branch1_agree"
                placeholder="agree"
                defaultValue={storedBranch1 ? storedBranch1 : ""}
                borderColor="orange.300"
                visibility={
                  topicBranch1 || storedBranch1 ? "visible" : "hidden"
                }
              ></Textarea>
               <Textarea
                name="branch1_disagree"
                placeholder="disagree"
                defaultValue={storedBranch1 ? storedBranch1 : ""}
                m='2.5rem 0 0 0'
                borderColor="orange.300"
                visibility={
                  topicBranch1 || storedBranch1 ? "visible" : "hidden"
                }
              ></Textarea>
            </Flex>

            {/*2nd left item in 2nd flex box*/ }
            <Flex mr='1rem' justify="center" alignItems="center" direction="row">
              <Textarea
                name="branch1"
                placeholder="branch1"
                defaultValue={storedBranch1 ? storedBranch1 : ""}
                m='0 2.5rem 0 2.5rem'
                borderColor="orange.300"
                visibility={
                  topicBranch1 || storedBranch1 ? "visible" : "hidden"
                }
              ></Textarea>
              <Button  onClick={() => setTopicBranch1(true)}>
                <Flex alignContent="center" justifyContent="center">
                  <AddIcon />
                </Flex>
              </Button>
            </Flex>

            {/*middle item in 2nd flex box*/ }
            <Flex
              justify="center"
              alignItems="center"
              direction="column"
            >
              <Textarea
                name="branch2"
                placeholder="branch2"
                defaultValue={storedBranch2 ? storedBranch2 : ""}
                m='2.5rem'
                borderColor="orange.300"
                visibility={
                  topicBranch2 || storedBranch2 ? "visible" : "hidden"
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
                //mb="1rem"
                borderColor="black"
                borderWidth="1.5px"
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
                name="branch3"
                placeholder="branch3"
                defaultValue={storedBranch3 ? storedBranch3 : ""}
                m='2.5rem'
                borderColor="orange.300"
                visibility={
                  topicBranch3 || storedBranch3 ? "visible" : "hidden"
                }
              ></Textarea>
            </Flex>


          {/*4th item in 2nd flex box*/ }

            <Flex ml='1rem' justify="center" alignItems="center" direction="row">
              <Button onClick={() => setTopicBranch4(true)}>
                <Flex alignContent="center" justifyContent="center">
                  <AddIcon />
                </Flex>
              </Button>
              <Textarea
                name="branch4"
                placeholder="branch4"
                defaultValue={storedBranch4 ? storedBranch4 : ""}
                m='0 2.5rem 0 2.5rem'
                borderColor="orange.300"
                visibility={
                  topicBranch4 || storedBranch4 ? "visible" : "hidden"
                }
              ></Textarea>
            </Flex>

            {/*most right item in 2nd flex box*/ }
            <Flex direction="column" alignContent="center" justifyContent="center" ml='2.5rem'>
            <Textarea
                name="branch4_key"
                placeholder="key"
                defaultValue={storedBranch1 ? storedBranch1 : ""}
                m='0 0 2.5rem 0'
                borderColor="orange.300"
                visibility={
                  topicBranch4 || storedBranch4 ? "visible" : "hidden"
                }
              ></Textarea>
               <Textarea
                name="branch4_agree"
                placeholder="agree"
                defaultValue={storedBranch1 ? storedBranch1 : ""}
                borderColor="orange.300"
                visibility={
                  topicBranch4 || storedBranch4 ? "visible" : "hidden"
                }
              ></Textarea>
               <Textarea
                name="branch4_disagree"
                placeholder="disagree"
                defaultValue={storedBranch1 ? storedBranch1 : ""}
                m='2.5rem 0 0 0'
                borderColor="orange.300"
                visibility={
                  topicBranch4 || storedBranch4 ? "visible" : "hidden"
                }
              ></Textarea>
            </Flex>

          </Flex>

           {/*last item in flex box*/ }
          <Flex direction="row" alignContent="center" justifyContent="center" mr='2.5rem'>
            <Textarea
                name="branch3_key"
                placeholder="key"
                defaultValue={storedBranch1 ? storedBranch1 : ""}
                m='0 2.5rem 0 0'
                borderColor="orange.300"
                visibility={
                  topicBranch3 || storedBranch3 ? "visible" : "hidden"
                }
              ></Textarea>
               <Textarea
                name="branch3_agree"
                placeholder="agree"
                defaultValue={storedBranch1 ? storedBranch1 : ""}
                borderColor="orange.300"
                visibility={
                  topicBranch3 || storedBranch3 ? "visible" : "hidden"
                }
              ></Textarea>
               <Textarea
                name="branch3_disagree"
                placeholder="disagree"
                defaultValue={storedBranch1 ? storedBranch1 : ""}
                m='0 0 0 2.5rem'
                borderColor="orange.300"
                visibility={
                  topicBranch3 || storedBranch3 ? "visible" : "hidden"
                }
              ></Textarea>
            </Flex>
          <Flex alignItems="center" justifyContent="flex-end">
            <Button type="submit">Save and continue</Button>
          </Flex>

          </Flex>
        </form>

      </Flex>
      
    </Layout>
  );
}
