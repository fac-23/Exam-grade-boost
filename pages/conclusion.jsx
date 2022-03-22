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

  const storedConclusion = essayInfo.conclusion;
  const question = essayInfo.question;

  if (!storedConclusion) {
    return {
      props: {
        question,
      },
    };
  }

  const splitSections = storedConclusion.split("\n");
  const storedMain = splitSections[0];
  const storedEvidence = splitSections[1];
  const storedPriority = splitSections[2];
  const storedRelate = splitSections[3];

  return {
    props: {
      question,
      storedMain,
      storedEvidence,
      storedPriority,
      storedRelate,
    },
  };
}

export default function conclusion({
  storedMain,
  storedEvidence,
  storedPriority,
  storedRelate,
}) {
  return (
    <>
      <Navigation />
      <Grid mt={4} templateColumns="repeat(2, 0.5fr)" gap={6}>
        <Flex direction="column" p={5} w="100%" h="10" colSpan={2}>
          <form method="POST" action="/api/save-conclusion">
            <Heading>Conclusion</Heading>
            <Textarea
              name="main"
              placeholder="Main argument"
              defaultValue={storedMain ? storedMain : ""}
              mb={5}
            ></Textarea>
            <Textarea
              name="evidence"
              placeholder="Evidence"
              defaultValue={storedEvidence ? storedEvidence : ""}
              mb={5}
            ></Textarea>
            <Textarea
              name="priority"
              placeholder="Priority Evidence"
              defaultValue={storedPriority ? storedPriority : ""}
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
            How to write your conclusion
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
