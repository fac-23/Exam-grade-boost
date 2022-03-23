import React from "react";
import {
  Flex,
  Textarea,
  Heading,
  Grid,
  Container,
  Box,
  Button,
} from "@chakra-ui/react";

import Navigation from "../components/Navigation";
import { getEssayInfo } from "../database/model.js";
import BodySidebar from "../components/BodySidebar";

export async function getServerSideProps({ req }) {
  const essayId = req.cookies.currEssay;
  const essayInfo = await getEssayInfo(essayId);

  const storedBody1 = essayInfo.body_1;
  const question = essayInfo.question;

  if (!storedBody1) {
    return {
      props: {
        question,
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
    },
  };
}

export default function body({
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
      <Grid mt={4} templateColumns="repeat(2, 0.5fr)" gap={6}>
        <Flex direction="column" p={5} w="100%" h="10" colSpan={2}>
          <form method="POST" action="/api/save-body1">
            <Heading mt={10}>Body paragraph: {question}</Heading>
            <Textarea
              name="point"
              placeholder="Point"
              defaultValue={storedPoint ? storedPoint : ""}
              mb={5}
            ></Textarea>
            <Textarea
              name="identify"
              placeholder="Identify"
              defaultValue={storedIdentify ? storedIdentify : ""}
              mb={5}
            ></Textarea>
            <Textarea
              name="outline"
              placeholder="Outline"
              defaultValue={storedOutline ? storedOutline : ""}
              mb={5}
            ></Textarea>
            <Textarea
              name="explain1"
              placeholder="Explain 1"
              defaultValue={storedExplain1 ? storedExplain1 : ""}
              mb={5}
            ></Textarea>
            <Textarea
              name="explain2"
              placeholder="Explain 2"
              defaultValue={storedExplain2 ? storedExplain2 : ""}
              mb={5}
            ></Textarea>
            <Textarea
              name="relate"
              placeholder="Relate"
              defaultValue={storedRelate ? storedRelate : ""}
              mb={5}
            ></Textarea>
            <Button type="submit">Save and continue</Button>
          </form>
        </Flex>

        <Container padding="5" maxW="2xl" bg="white.600" centerContent>
          <BodySidebar></BodySidebar>
        </Container>
      </Grid>
    </>
  );
}
