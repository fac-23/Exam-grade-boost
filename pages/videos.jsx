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
            <iframe
              src="https://player.vimeo.com/video/691993464?h=93328f71ac"
              width="100%"
              height="auto"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>{" "}
            <Heading as="h2" size="sm" textAlign="center" pt="5px">
              Arcade fire
            </Heading>
          </Box>
          <Box>
            <iframe
              src="https://player.vimeo.com/video/691993464?h=93328f71ac"
              width="100%"
              height="auto"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>{" "}
            <Heading as="h2" size="sm" textAlign="center" pt="5px">
              Arcade fire
            </Heading>
          </Box>{" "}
          <Box>
            <iframe
              src="https://player.vimeo.com/video/691993464?h=93328f71ac"
              width="100%"
              height="auto"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>{" "}
            <Heading as="h2" size="sm" textAlign="center" pt="5px">
              Arcade fire
            </Heading>
          </Box>{" "}
          <Box>
            <iframe
              src="https://player.vimeo.com/video/691993464?h=93328f71ac"
              width="100%"
              height="auto"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>{" "}
            <Heading as="h2" size="sm" textAlign="center" pt="5px">
              Arcade fire
            </Heading>
          </Box>
        </SimpleGrid>
      </Container>
    </Layout>
  );
}
