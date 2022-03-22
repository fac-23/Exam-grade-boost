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
          <Heading w="100%" h="10" mb={4}>
            How to write your main body
          </Heading>
          <Box color="black">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Why do we use it? It is
            a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem will uncover many web sites still in their infancy.
            Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose.
          </Box>
        </Container>
      </Grid>
    </>
  );
}
