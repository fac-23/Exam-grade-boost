import React from "react";
import {
  Flex,
  Textarea,
  Heading,
  Grid,
  Container,
  Box,
  Button,
} from "@chakra-ui/react";

import Navigation from "../components/Navigation.jsx";
import { getEssayInfo } from "../database/model.js";

// import jsPDF
import { jsPDF } from "jspdf";

export async function getServerSideProps({ req }) {
  // gets the essay id from the cookie
  const essayId = req.cookies.currEssay;

  // retrieves all essay data from the db
  // const essayInfo = await getEssayInfo(essayId);

  // hardcoded example passing 2 as essayID
  const essayInfo = await getEssayInfo(2);

  const storedIntro = essayInfo.introduction;
  const question = essayInfo.question;

  if (!storedIntro) {
    return {
      props: {
        question,
      },
    };
  }

  const splitSections = storedIntro.split("\n");

  // destructuring splitSections
  const [storedSummary, storedMain, storedOpposite, storedKey] = splitSections;

  return {
    props: {
      question,
      storedSummary,
      storedMain,
      storedOpposite,
      storedKey,
    },
  };
}

export default function finalEssay({
  question,
  storedSummary,
  storedMain,
  storedOpposite,
  storedKey,
}) {
  // jsPDF

  const finalEssayCopy = `${storedSummary}\n\n${storedMain}\n\n${storedOpposite}\n\n${storedKey}`;

  const doc = new jsPDF();

  doc.text(finalEssayCopy, 10, 10);

  // callback function to pass onClick event on export to PDF button
  function downloadPDF() {
    doc.save(`${question.split(",")}`);
  }

  // console.log("FINAL ESSAY", finalEssayCopy);

  return (
    <>
      <Navigation />
      <Container>
        <form>
          <Flex direction="column" p={10}>
            <Heading mb={10}>{question}</Heading>

            <section className="essay-overview">
              <p>{storedSummary}</p>
              <p>{storedMain}</p>
              <p>{storedOpposite}</p>
              <p>{storedKey}</p>
            </section>
          </Flex>
          <Flex justifyContent="center" gap="2rem">
            <Button className="button" colorScheme="teal">
              Export to Word docx
            </Button>
            <Button className="button" colorScheme="teal" onClick={downloadPDF}>
              Export to PDF
            </Button>
          </Flex>
        </form>
      </Container>
    </>
  );
}
