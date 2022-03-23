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

// import and set up Docxtemplater
import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import { saveAs } from "file-saver";

export async function getServerSideProps({ req }) {
  // gets the essay id from the cookie
  const essayId = req.cookies.currEssay;

  // retrieves all essay data from the db
  // const essayInfo = await getEssayInfo(essayId);

  // hardcoded example passing 2 as essayID
  const essayInfo = await getEssayInfo(1);

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
  // *** jsPDF functionality *** //

  // Create the final essay content adding all sections
  const finalEssayCopy = `${question}\n\n\n${storedSummary}\n\n${storedMain}\n\n${storedOpposite}\n\n${storedKey}`;

  // create new instance of a document
  const doc = new jsPDF();

  // set the document text to be the content of the finalEssayCopy variable
  doc.text(finalEssayCopy, 10, 10);

  // callback function to pass onClick event on export to PDF button
  function downloadPDF() {
    // set the file name to be the question and download the file
    doc.save(`${question.split(",")}`);
  }

  // console.log("FINAL ESSAY", finalEssayCopy);

  // Docxtemplater ***********************************************/

  let PizZipUtils = null;
  if (typeof window !== "undefined") {
    import("pizzip/utils/index.js").then(function (r) {
      PizZipUtils = r;
    });
  }

  function loadFile(url, callback) {
    PizZipUtils.getBinaryContent(url, callback);
  }

  const generateDocument = () => {
    // load "essayBody" template inside public folder
    loadFile("/essayBody.docx", function (error, content) {
      if (error) {
        throw error;
      }
      const zip = new PizZip(content);
      const doc = new Docxtemplater().loadZip(zip);
      // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
      doc.render({
        // render the essay body inside the "essayBody" tag in the "essayBody" Template
        // essayBody: finalEssayCopy,
        question: question,
        storedSummary: storedSummary,
        storedMain: storedMain,
        storedOpposite: storedOpposite,
        storedKey: storedKey,
      });
      doc.render({ finalEssayCopy });
      const out = doc.getZip().generate({
        type: "blob",
        mimeType:
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      });
      // Output the document using Data-URI
      saveAs(out, `${question.split(",")}`);
    });
  };

  // ***********************************************/

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
            <Button variant="primary" onClick={generateDocument}>
              Export to Word docx
            </Button>
            <Button variant="secondary" onClick={downloadPDF}>
              Export to PDF
            </Button>
          </Flex>
        </form>
      </Container>
    </>
  );
}
