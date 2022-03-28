import Link from "next/link";

// import chakra UI components
import { Container, Heading, Flex } from "@chakra-ui/react";

// import components
import Layout from "../components/Layout.jsx";

// import icons
import { InfoIcon } from "@chakra-ui/icons";

export default function Resources() {
  return (
    <Layout>
      <Container centerContent>
        <Heading as="h1" mb="2rem">
          Resources
        </Heading>
        <Flex direction={["column", "column", "row"]} gap="2rem">
          <Link href="/videos">
            <a>Videos</a>
          </Link>

          <Link href="/wordBank">
            <a>
              <InfoIcon mr="1rem" />
              Word bank
            </a>
          </Link>

          <Link
            href="https://drive.google.com/drive/folders/1IA7eNTex7A82rrIdz0vS5e4m20mCiPap"
            passHref
          >
            <a target="_blank">
              <InfoIcon mr="1rem" />
              Guides
            </a>
          </Link>
        </Flex>
      </Container>
    </Layout>
  );
}
