// import chakra UI components
import {
  Container,
  Heading,
  Flex,
  Box,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

// import components
import Layout from "../components/Layout.jsx";
import Image from "next/image";

export default function Resources() {
  const boxBgColor = useColorModeValue("primary", "secondary");

  return (
    <Layout>
      <Container centerContent>
        <Heading as="h1" mb="2rem">
          Resources
        </Heading>
        <Flex
          direction={["column", "column", "row"]}
          gap="2rem"
          w="100%"
          fontSize="1.5rem"
          textAlign="center"
        >
          <Link
            href="/videos"
            passHref
            w="100%"
            bg={boxBgColor}
            p="4rem 2rem"
            rounded="10px"
            color="white"
          >
            <Flex direction="column" centerContent>
              <a>Videos</a>
              <Image
                src="/videos.svg"
                alt="video player icon"
                width="120px"
                height="120px"
              ></Image>
            </Flex>
          </Link>

          <Link
            href="/wordBank"
            passHref
            w="100%"
            bg={boxBgColor}
            p="4rem 2rem"
            rounded="10px"
            color="white"
          >
            <Flex direction="column" centerContent>
              <a>Word bank</a>
              <Image
                src="/wordbank.svg"
                alt="wordbank icon"
                width="120px"
                height="120px"
              ></Image>
            </Flex>
          </Link>

          <Link
            href="https://drive.google.com/drive/folders/1IA7eNTex7A82rrIdz0vS5e4m20mCiPap"
            passHref
            w="100%"
            bg={boxBgColor}
            p="4rem 2rem"
            rounded="10px"
            color="white"
          >
            <Flex direction="column" centerContent>
              <a target="_blank">Guides</a>
              <Image
                src="/guide.svg"
                alt="guide icon"
                width="120px"
                height="120px"
              ></Image>
            </Flex>
          </Link>
        </Flex>
      </Container>
    </Layout>
  );
}
