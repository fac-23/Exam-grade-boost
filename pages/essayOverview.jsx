import React, { useState } from "react";
import {
  Button,
  Flex,
  Heading,
  Container,
  Link,
  Text,
  useColorMode,
  Textarea,
} from "@chakra-ui/react";
import { getEssayInfo } from "../database/model.js";
import { ViewIcon } from "@chakra-ui/icons";
import Image from "next/image";
import Layout from "../components/Layout.jsx";
import { EditIcon } from "@chakra-ui/icons";

export async function getServerSideProps({ req }) {
  const essayId = req.cookies.currEssay;
  const essayInfo = await getEssayInfo(essayId);
  const question = essayInfo.question;

  return {
    props: {
      question,
    },
  };
}

export default function EssayOverview({ question }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const [showTitleEdit, setTitleEdit] = useState(false);

  return (
    <Layout>
      <Container>
        {!showTitleEdit ? (
          <Heading as="h1" mb="2rem">
            Essay overview: {question}
          </Heading>
        ) : (
          <form method="POST" action="api/rename-title">
            <Textarea
              name="question"
              defaultValue={question ? question : ""}
              borderWidth="1.5px"
              mb={2}
            ></Textarea>
            <Button mb={2} type="submit">
              Save and continue
            </Button>
          </form>
        )}
        <Button onClick={() => setTitleEdit(true)}>
          <Text mr="10px">Edit title</Text>
          <EditIcon />
        </Button>
        <form>
          <Flex mt={4} direction="column" gap="1.5rem">
            <Link href="/spiderDiagram" passHref>
              <Button width="100%" p="2rem 0">
                <Image
                  src={
                    colorMode === "light"
                      ? "/planning.svg"
                      : "/planning-dark.svg"
                  }
                  alt="planning icon"
                  height={30}
                  width={30}
                ></Image>

                <Text ml={2}>Planning</Text>
              </Button>
            </Link>
            <Link href="/introduction" passHref>
              <Button width="100%" p="2rem 0">
                <Image
                  src={colorMode === "light" ? "/intro.svg" : "/intro-dark.svg"}
                  alt="intro icon"
                  height={30}
                  width={30}
                ></Image>
                <Text ml={2}>Introduction</Text>
              </Button>
            </Link>
            <Link href="/body1" passHref>
              <Button width="100%" p="2rem 0">
                <Image
                  src={colorMode === "light" ? "/body.svg" : "/body-dark.svg"}
                  alt="body section icon"
                  height={30}
                  width={30}
                ></Image>
                <Text ml={2}>Body paragraph 1</Text>
              </Button>
            </Link>
            <Link href="/body2" passHref>
              <Button width="100%" p="2rem 0">
                <Image
                  src={colorMode === "light" ? "/body.svg" : "/body-dark.svg"}
                  alt="body section icon"
                  height={30}
                  width={30}
                ></Image>
                <Text ml={2}>Body paragraph 2</Text>
              </Button>
            </Link>

            <Link href="/body3" passHref>
              <Button width="100%" p="2rem 0">
                <Image
                  src={colorMode === "light" ? "/body.svg" : "/body-dark.svg"}
                  alt="body section icon"
                  height={30}
                  width={30}
                ></Image>
                <Text ml={2}>Body paragraph 3</Text>
              </Button>
            </Link>
            <Link href="/conclusion" passHref>
              <Button width="100%" p="2rem 0">
                <Image
                  src={
                    colorMode === "light"
                      ? "/conclusion.svg"
                      : "/conclusion-dark.svg"
                  }
                  alt="conclusion icon"
                  height={30}
                  width={30}
                ></Image>
                <Text ml={2}>Conclusion</Text>
              </Button>
            </Link>
            <Link href="/finalEssay" passHref>
              <Button width="100%" p="2rem 0">
                <ViewIcon />
                <Text ml={2}>View final essay</Text>
              </Button>
            </Link>
          </Flex>
        </form>
      </Container>
    </Layout>
  );
}
