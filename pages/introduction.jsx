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

import Navigation from "../components/Navigation.jsx";
import { getEssayInfo } from "../database/model.js";

export async function getServerSideProps({ req }) {
  const essayId = req.cookies.currEssay;
  // const essayInfo = await getEssayInfo(essayId);

  // hardcoded example 2
  const essayInfo = await getEssayInfo(2);

  // console.log(essayId);
  console.log(essayInfo);

  const storedIntro = essayInfo.introduction;
  const question = essayInfo.question;

  if (!storedIntro) {
    return {
      props: {
        question,
      },
    };
  }

  const splitSections = storedIntro.split("\n");
  const storedSummary = splitSections[0];
  const storedMain = splitSections[1];
  const storedOpposite = splitSections[2];
  const storedKey = splitSections[3];

  return {
    props: {
      question,
      storedSummary,
      storedMain,
      storedOpposite,
      storedKey,
    },
  };
}

export default function introduction({
  question,
  storedSummary,
  storedMain,
  storedOpposite,
  storedKey,
}) {
  return (
    <>
      <Navigation />
      <Grid templateColumns="repeat(2, 0.5fr)" gap={6}>
        <Flex direction="column" p={5} w="100%" h="10" colSpan={2}>
          <form method="POST" action="/api/save-introduction">
            <Heading mt={10}>Introduction: {question}</Heading>
            <Textarea
              name="summary"
              placeholder="summary"
              defaultValue={storedSummary ? storedSummary : ""}
              mb={5}
            ></Textarea>
            <Textarea
              name="main"
              placeholder="main argument"
              defaultValue={storedMain ? storedMain : ""}
              mb={5}
            ></Textarea>
            <Textarea
              name="opposite"
              placeholder="opposite argument"
              defaultValue={storedOpposite ? storedOpposite : ""}
              mb={5}
            ></Textarea>
            <Textarea
              name="key"
              placeholder="key themes"
              defaultValue={storedKey ? storedKey : ""}
              mb={5}
            ></Textarea>
            <Button type="submit">Save introduction</Button>
          </form>
        </Flex>

        <Container padding="5" maxW="2xl" bg="white.600" centerContent>
          <Heading w="100%" h="10" mb={4}>
            How to write an introduction
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
