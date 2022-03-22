import React from "react";
import {
  Flex,
  Textarea,
  Heading,
  Grid,
  Container,
  Box,
} from "@chakra-ui/react";

import Navigation from "../components/Navigation.jsx";

export default function introduction() {
  return (
    <>
      <Navigation />
      <Grid mt={4} templateColumns="repeat(2, 0.5fr)" gap={6}>
        <Flex direction="column" p={5} w="100%" h="10" colSpan={2}>
          <Heading>Introduction</Heading>
          <Textarea placeholder="summary" mb={5}></Textarea>
          <Textarea placeholder="main argument" mb={5}></Textarea>
          <Textarea placeholder="opposite argument" mb={5}></Textarea>
          <Textarea placeholder="key themes" mb={5}></Textarea>
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
