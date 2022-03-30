// import chakra UI components
import { Container, Heading, Box, SimpleGrid } from "@chakra-ui/react";

// import components
import Layout from "../components/Layout.jsx";
import VideoComponent from "../components/VideoComponent.jsx";

export default function Videos() {
  return (
    <Layout>
      <Container centerContent>
        <Heading as="h1" mb="2rem">
          Videos
        </Heading>
        <SimpleGrid columns={[1, 1, 2, 4]} spacing="1rem">
          <Box>
            <VideoComponent src="https://vimeo.com/692854378" />
            <Heading as="h2" size="sm" textAlign="center" pt="10px">
              Main features
            </Heading>
          </Box>
          <Box>
            <VideoComponent src="https://vimeo.com/692858328" />
            <Heading as="h2" size="sm" textAlign="center" pt="10px">
              Introductions SMOK
            </Heading>
          </Box>
          <Box>
            <VideoComponent src="https://vimeo.com/692855613" />
            <Heading as="h2" size="sm" textAlign="center" pt="10px">
              Planning KEP
            </Heading>
          </Box>
          <Box>
            <VideoComponent src="https://vimeo.com/692837733" />
            <Heading as="h2" size="sm" textAlign="center" pt="10px">
              Spider Diagrams
            </Heading>
          </Box>
          <Box>
            <VideoComponent src="https://vimeo.com/692841770" />
            <Heading as="h2" size="sm" textAlign="center" pt="10px">
              Proof Reading with MIFAVES
            </Heading>
          </Box>

          <Box>
            <VideoComponent src="https://vimeo.com/692850134" />
            <Heading as="h2" size="sm" textAlign="center" pt="10px">
              Paragraphs PIOEER
            </Heading>
          </Box>

          <Box>
            <VideoComponent src="https://vimeo.com/693139800" />
            <Heading as="h2" size="sm" textAlign="center" pt="10px">
              Instruction Words
            </Heading>
          </Box>

          <Box>
            <VideoComponent src="https://vimeo.com/692834835" />
            <Heading as="h2" size="sm" textAlign="center" pt="10px">
              Title Input
            </Heading>
          </Box>

          <Box>
            <VideoComponent src="https://vimeo.com/692836202" />
            <Heading as="h2" size="sm" textAlign="center" pt="10px">
              Writing Stages
            </Heading>
          </Box>

          <Box>
            <VideoComponent src="https://vimeo.com/464507912" />
            <Heading as="h2" size="sm" textAlign="center" pt="10px">
              Keywords and Planning
            </Heading>
          </Box>

          <Box>
            <VideoComponent src="https://vimeo.com/464514137" />
            <Heading as="h2" size="sm" textAlign="center" pt="10px">
              Paragraphs
            </Heading>
          </Box>

          <Box>
            <VideoComponent src="https://vimeo.com/469593113" />
            <Heading as="h2" size="sm" textAlign="center" pt="10px">
              Conclusions
            </Heading>
          </Box>
        </SimpleGrid>
      </Container>
    </Layout>
  );
}
