import React from "react";
import { Button, Flex, Heading, Container, Link } from "@chakra-ui/react";
import Navigation from "../components/Navigation.jsx";
import { getEssayInfo } from "../database/model.js";

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

export default function essayOverview({ question }) {
  return (
    <>
      <Navigation />
      <Container>
        <Heading as="h1" mb="2rem">
          Essay overview: {question}
        </Heading>
        <form>
          <Flex mt={4} direction="column" gap="1.5rem">
            <Link href="/spiderDiagram" passHref>
              <Button width="100%" p="2rem 0">
                Planning
              </Button>
            </Link>
            <Link href="/introduction" passHref>
              <Button width="100%" p="2rem 0">
                Introduction
              </Button>
            </Link>
            <Link href="/body1" passHref>
              <Button width="100%" p="2rem 0">
                Body paragraph 1
              </Button>
            </Link>
            <Link href="/body2" passHref>
              <Button width="100%" p="2rem 0">
                Body paragraph 2
              </Button>
            </Link>
            <Link href="/body3" passHref>
              <Button width="100%" p="2rem 0">
                Body paragraph 3
              </Button>
            </Link>
            <Link href="/conclusion" passHref>
              <Button width="100%" p="2rem 0">
                Conclusion
              </Button>
            </Link>
            <Link href="/finalEssay" passHref>
              <Button width="100%" p="2rem 0">
                View final essay
              </Button>
            </Link>
          </Flex>
        </form>
      </Container>
    </>
  );
}
