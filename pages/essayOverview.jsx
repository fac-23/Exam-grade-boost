import React from "react";
import Link from "next/link";
import { Button, Flex, Heading } from "@chakra-ui/react";
import Navigation from "../components/Navigation.jsx";
import { getEssayInfo } from "../database/model.js";

export async function getServerSideProps({ req }) {
  //hardcoded for now
  const essayId = 1;
  const essayInfo = await getEssayInfo(essayId);
  const question = essayInfo.question;
  console.log(essayInfo);

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
      <form>
        <Flex mt={4} direction="column" p={10}>
          <Heading>Essay overview: {question}</Heading>
          <Link href="/spiderDiagram" passHref>
            <Button>Planning</Button>
          </Link>
          <Link href="/introduction" passHref>
            <Button>Introduction</Button>
          </Link>
          <Link href="/body" passHref>
            <Button>Body paragraph 1</Button>
          </Link>
          <Link href="/conclusion" passHref>
            <Button>Conclusion</Button>
          </Link>
          <Link href="/finalEssay" passHref>
            <Button>View final essay</Button>
          </Link>
        </Flex>
      </form>
    </>
  );
}
