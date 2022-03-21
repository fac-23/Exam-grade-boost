// import chakra UI components
import { Container,  Heading  } from "@chakra-ui/react";

// import components
import Navigation from "../components/Navigation.jsx";

export default function Resources() {
  return (
    <>
      <Navigation />
      <Container>
          <Heading>Resources</Heading>
        <p>Videos</p>
        <p>Word bank</p>
        <p>Spider diagrams</p>
        <p>Guides</p>
      </Container>
    </>

  );
}
