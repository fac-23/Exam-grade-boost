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

function printIfExists(content) {
  return content ? content + "\n\n" : "";
}

function printIfExistsNoPad(content) {
  return content ? content : "";
}

export async function getServerSideProps({ req }) {
  // gets the essay id from the cookie
  const essayId = req.cookies.currEssay;

  // retrieves all essay data from the db
  // const essayInfo = await getEssayInfo(essayId);

  const essayInfo = await getEssayInfo(essayId);
  const {
    question,
    spider_1,
    introduction,
    body_1,
    body_2,
    body_3,
    conclusion,
  } = essayInfo;

  if (!essayInfo) {
    return {
      props: {
        question,
      },
    };
  }

  console.log(
    question,
    spider_1,
    introduction,
    body_1,
    body_2,
    body_3,
    conclusion
  );

  return {
    props: {
      question,
      spider_1,
      introduction,
      body_1,
      body_2,
      body_3,
      conclusion,
    },
  };
}

export default function FinalEssay({
  question,
  introduction,
  body_1,
  body_2,
  body_3,
  conclusion,
}) {
  // *** jsPDF functionality *** //

  // Create the final essay content adding all sections
  const finalEssayCopy = `${printIfExists(question)}${printIfExists(
    introduction
  )}${printIfExists(body_1)}${printIfExists(body_2)}${printIfExists(
    body_3
  )} ${printIfExists(body_3)}${printIfExists(conclusion)}`;

  // create new instance of a document
  const doc = new jsPDF();

  // set the document text to be the content of the finalEssayCopy variable
  doc.setFontSize(4);
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
        question: printIfExistsNoPad(question),
        introduction: printIfExistsNoPad(introduction),
        body_1: printIfExistsNoPad(body_1),
        body_2: printIfExistsNoPad(body_2),
        body_3: printIfExistsNoPad(body_3),
        conclusion: printIfExistsNoPad(conclusion),
      });
      // doc.render({ finalEssayCopy });
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
              <b>Introduction:</b>
              <p>{introduction}</p>
              <br></br>
              <b>Main:</b>
              <p>{body_1}</p>
              <p>{body_2}</p>
              <p>{body_3}</p>
              <br></br>
              <b>Conclusion:</b>
              <p>{conclusion}</p>
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
