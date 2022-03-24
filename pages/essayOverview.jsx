import React from "react";
import Link from "next/link";
import { Button, Flex, Heading, Container } from "@chakra-ui/react";
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
        <form>
          <Flex mt={4} direction="column" p={10}>
            <Heading>Essay overview: {question}</Heading>
            <Link href="/spiderDiagram" passHref>
              <Button>Planning</Button>
            </Link>
            <Link href="/introduction" passHref>
              <Button>Introduction</Button>
            </Link>
            <Link href="/body1" passHref>
              <Button>Body paragraph 1</Button>
            </Link>
            <Link href="/body2" passHref>
              <Button>Body paragraph 2</Button>
            </Link>
            <Link href="/body3" passHref>
              <Button>Body paragraph 3</Button>
            </Link>
            <Link href="/conclusion" passHref>
              <Button>Conclusion</Button>
            </Link>
            <Link href="/finalEssay" passHref>
              <Button>View final essay</Button>
            </Link>
          </Flex>
        </form>
      </Container>
    </>
  );
}
