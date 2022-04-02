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
            <VideoComponent src="https://player.vimeo.com/video/692854378?h=1d70088608" />
            <Heading as="h2" size="sm" textAlign="center" pt="10px">
              Main features
            </Heading>
          </Box>
          <Box>
            <VideoComponent src="https://player.vimeo.com/video/692858328?h=64df399bb4" />
            <Heading as="h2" size="sm" textAlign="center" pt="10px">
              Introductions SMOK
            </Heading>
          </Box>
          <Box>
            <VideoComponent src="https://player.vimeo.com/video/692855613?h=ef27cfd95b" />
            <Heading as="h2" size="sm" textAlign="center" pt="10px">
              Planning KEP
            </Heading>
          </Box>
          <Box>
            <VideoComponent src="https://player.vimeo.com/video/692837733?h=1cf1a3ecbe" />
            <Heading as="h2" size="sm" textAlign="center" pt="10px">
              Spider Diagrams
            </Heading>
          </Box>
          <Box>
            <VideoComponent src="https://player.vimeo.com/video/692841770?h=d174d618fe" />
            <Heading as="h2" size="sm" textAlign="center" pt="10px">
              Proof Reading with MIFAVES
            </Heading>
          </Box>

          <Box>
            <VideoComponent src="https://player.vimeo.com/video/692850134?h=0eef295781" />
            <Heading as="h2" size="sm" textAlign="center" pt="10px">
              Paragraphs PIOEER
            </Heading>
          </Box>

          <Box>
            <VideoComponent src="https://player.vimeo.com/video/692870402?h=cdbc739303" />
            <Heading as="h2" size="sm" textAlign="center" pt="10px">
              Conclusion MEPR
            </Heading>
          </Box>

          <Box>
            <VideoComponent src="https://player.vimeo.com/video/693139800?h=6ff5b678c5" />
            <Heading as="h2" size="sm" textAlign="center" pt="10px">
              Instruction Words
            </Heading>
          </Box>

          <Box>
            <VideoComponent src="https://player.vimeo.com/video/692834835?h=0b1d469e0a" />
            <Heading as="h2" size="sm" textAlign="center" pt="10px">
              Title Input
            </Heading>
          </Box>

          <Box>
            <VideoComponent src="https://player.vimeo.com/video/692836202?h=ec6c34791d" />
            <Heading as="h2" size="sm" textAlign="center" pt="10px">
              Writing Stages
            </Heading>
          </Box>

          <Box>
            <VideoComponent src="https://player.vimeo.com/video/464507912?h=66926bdcb1" />
            <Heading as="h2" size="sm" textAlign="center" pt="10px">
              Keywords and Planning
            </Heading>
          </Box>

          <Box>
            <VideoComponent src="https://player.vimeo.com/video/464514137?h=8d3ed20eef" />
            <Heading as="h2" size="sm" textAlign="center" pt="10px">
              Paragraphs
            </Heading>
          </Box>

          <Box>
            <VideoComponent src="https://player.vimeo.com/video/469593113?h=2c078b1fb4" />
            <Heading as="h2" size="sm" textAlign="center" pt="10px">
              Conclusions
            </Heading>
          </Box>
        </SimpleGrid>
      </Container>
    </Layout>
  );
}
