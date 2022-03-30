import React from "react";

import {
  Flex,
  Textarea,
  Heading,
  Grid,
  Container,
  Box,
  Button,
  FormLabel,
  Link,
} from "@chakra-ui/react";

import Navigation from "../components/Navigation.jsx";
import { getEssayInfo } from "../database/model.js";

// Import icons
import { EditIcon } from "@chakra-ui/icons";

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
  )}${printIfExists(body_1)}${printIfExists(body_2)} ${printIfExists(
    body_3
  )}${printIfExists(conclusion)}`;

  // create new instance of a document
  const doc = new jsPDF();

  // set the document text to be the content of the finalEssayCopy variable
  doc.setFontSize(14);

  // callback function to pass onClick event on export to PDF button
  function downloadPDF() {
    //calculate aproximate number of pages by dividing chars by 3400
    const pageNum = finalEssayCopy.length / 3400;

    //create a loop and populate each page with a page length 'chunk' of text
    for (let i = 0, z = 0; i < pageNum; i++, z += 3400) {
      const chunk = finalEssayCopy.slice(z, z + 3400);
      if (i !== 0) {
        doc.addPage();
      }
      doc.text(chunk, 10, 10, { maxWidth: 180 });
      doc.setPage(i);
    }
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
        <Heading as="h1" mb="2rem">
          {question}
        </Heading>
        <form>
          <Flex direction="column" p={10}>
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

            <Link href="/essayOverview" passHref>
              <Button type="submit" colorScheme="teal">
                <Flex alignItems="center" justifyContent="center">
                  <EditIcon mr="0.5rem" />
                  <FormLabel m={0} textAlign="center">
                    Edit
                  </FormLabel>
                </Flex>
              </Button>
            </Link>
          </Flex>
        </form>
      </Container>
    </>
  );
}
