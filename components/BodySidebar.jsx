import {
  Heading,
  Box,
  Text,
  UnorderedList,
  ListItem,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import VideoComponent from "./VideoComponent";

export default function BodySidebar({
  topic1,
  topic1_key,
  topic1_agree,
  topic1_disagree,
  topic2,
  topic2_key,
  topic2_agree,
  topic2_disagree,
  topic3,
  topic3_key,
  topic3_agree,
  topic3_disagree,
  topic4,
  topic4_key,
  topic4_agree,
  topic4_disagree,
}) {
  return (
    <>
      <Heading as="h2" size="lg" w="100%" mb="2rem">
        How to write your main body
      </Heading>
      <UnorderedList styleType="none" m="0 0 1.5rem 0" color="black">
        <ListItem p={2} background="gray.100">
          <strong>Point</strong> - The paragraph focus, sometimes called ‘the
          topic sentence’.
        </ListItem>
        <ListItem p={2} background="blue.100">
          <strong>Identify</strong> - Evidence base, fact, or research name.
        </ListItem>
        <ListItem p={2} background="yellow.100">
          <strong>Outline</strong> - Key features about the evidence, fact or
          source, often in the form of quantities.
        </ListItem>
        <ListItem p={2} background="orange.200">
          <strong>Evidence1</strong> - The most important idea in the area, that
          supports the ‘main argument’ and is also linked to the evidence.
        </ListItem>
        <ListItem p={2} background="orange.300">
          <strong>Evidence2</strong> - The most important idea in the area, that
          support the ‘counter argument’.
        </ListItem>
        <ListItem p={2} background="purple.100">
          <strong>Relate</strong> - Directly link back to the question. This
          shows how the evidence you gave, and the ideas you stated, directly
          answer the question you were specifically asked.
        </ListItem>
      </UnorderedList>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Worked Example
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p="1rem 0 1rem 0">
            <Text as="mark" backgroundColor="gray.100">
              The Evolutionary Theory of Attachment takes the view that many
              behaviours in this area are innate – they are hard wired in the
              genes – shown in part by the continuity hypothesis{" "}
            </Text>
            <Text as="mark" backgroundColor="blue.100">
              John Bowlby (1946) believed that attachment was continuous, which
              is often called the ‘continuity hypothesis’, based on early
              experiences with a primary caregiver.{" "}
            </Text>
            <Text as="mark" backgroundColor="yellow.100">
              By continuous he meant that early childhood experiences would have
              an effect in later life. He thought that during a sensitive
              period, children were especially affected their relationship with
              their primary caregiver.
            </Text>{" "}
            <Text as="mark" backgroundColor="orange.100">
              A strength of this theory is supporting evidence reported by Hazan
              and Shaver (1989). They conducted a love quiz on students and
              found a correlation between the reported relationship students had
              with their parents, and the romantic relationships in which they
              were currently involved. This suggests that Bowlby was right,
              attachment seemed to be similar across the life-cycle.
            </Text>
            <Text as="mark" backgroundColor="orange.200">
              However, there are weaknesses in the theory too. Rutter (1995)
              reported multiple attachments as being highly important on child
              develop in his research. This study believed that Bowlby had
              effectively excluded the important role played by people other
              than the primary attachment figure. Since more than one person was
              involved in care-giving, looking at just one person was a problem.
            </Text>
            <Text as="mark" backgroundColor="purple.100">
              However, there are weaknesses in the theory too. Rutter (1995)
              reported multiple attachments as being highly important on child
              develop in his research. This study believed that Bowlby had
              effectively excluded the important role played by people other
              than the primary attachment figure. Since more than one person was
              involved in care-giving, looking at just one person was a problem.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Video Tutorial
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p="1rem 0 1rem 0">
            <VideoComponent />
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Planning text
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} color="black">
            {topic1? <div>
            <Box
              borderColor="black"
              borderWidth="1px"
              p={1}
              textAlign="left"
              backgroundColor="orange.100"
            >
              <h3>Topic 1:</h3>
              <Text>{topic1 ? topic1 : ""}</Text>
            </Box>
            <Box
              borderColor="black"
              borderWidth="1px"
              p={1}
              textAlign="left"
              backgroundColor="orange.200"
            >
              <h3>key</h3>
              <Text>{topic1_key ? topic1_key : ""}</Text>
            </Box>
            <Box
              borderColor="black"
              borderWidth="1px"
              p={1}
              textAlign="left"
              backgroundColor="orange.300"
            >
              <h3>agree:</h3>
              <Text>{topic1_agree ? topic1_agree : ""}</Text>
            </Box>
            <Box
              borderColor="black"
              borderWidth="1px"
              p={1}
              textAlign="left"
              backgroundColor="orange.400"
            >
              <h3>disagree</h3>
              <Text>{topic1_disagree ? topic1_disagree : ""}</Text>
            </Box>
            </div>: <div></div>}
            {topic2? <div>
            <Box
              borderColor="black"
              borderWidth="1px"
              p={1}
              textAlign="left"
              backgroundColor="orange.100"
            >
              <h3>Topic 2:</h3>
              <Text>{topic2 ? topic2 : ""}</Text>
            </Box>
            <Box
              borderColor="black"
              borderWidth="1px"
              p={1}
              textAlign="left"
              backgroundColor="orange.200"
            >
              <h3>Key:</h3>
              <Text>{topic2_key ? topic2_key : ""}</Text>
            </Box>
            <Box
              borderColor="black"
              borderWidth="1px"
              p={1}
              textAlign="left"
              backgroundColor="orange.300"
            >
              <h3>agree:</h3>
              <Text>{topic2_agree ? topic2_agree : ""}</Text>
            </Box>
            <Box
              borderColor="black"
              borderWidth="1px"
              p={1}
              textAlign="left"
              backgroundColor="orange.400"
            >
              <h3>disagree:</h3>
              <Text>{topic2_disagree ? topic2_disagree : ""}</Text>
            </Box>
            </div>: <div></div>}
            {topic3? <div>
            <Box
              borderColor="black"
              borderWidth="1px"
              p={1}
              textAlign="left"
              backgroundColor="orange.100"
            >
              <h3>Topic 3:</h3>
              <Text>{topic3 ? topic3 : ""}</Text>
            </Box>

            <Box
              borderColor="black"
              borderWidth="1px"
              p={1}
              textAlign="left"
              backgroundColor="orange.200"
            >
              <h3>Key:</h3>
              <Text>{topic3_key ? topic3_key : ""}</Text>
            </Box>
            <Box
              borderColor="black"
              borderWidth="1px"
              p={1}
              textAlign="left"
              backgroundColor="orange.300"
            >
              <h3>agree:</h3>
              <Text>{topic3_agree ? topic3_agree : ""}</Text>
            </Box>
            <Box
              borderColor="black"
              borderWidth="1px"
              p={1}
              textAlign="left"
              backgroundColor="orange.400"
            >
              <h3>disagree:</h3>
              <Text>{topic3_disagree ? topic3_disagree : ""}</Text>
            </Box>
            </div>: <div></div>}
            {topic4? <div>
            <Box
              borderColor="black"
              borderWidth="1px"
              p={1}
              textAlign="left"
              backgroundColor="orange.100"
            >
              <h3>Topic 4:</h3>
              <Text>{topic4 ? topic4 : ""}</Text>
            </Box>
            <Box
              borderColor="black"
              borderWidth="1px"
              p={1}
              textAlign="left"
              backgroundColor="orange.200"
            >
              <h3>Key:</h3>
              <Text>{topic4_key ? topic4_key : ""}</Text>
            </Box>
            <Box
              borderColor="black"
              borderWidth="1px"
              p={1}
              textAlign="left"
              backgroundColor="orange.300"
            >
              <h3>agree:</h3>
              <Text>{topic4_agree ? topic4_agree : ""}</Text>
            </Box>
            <Box
              borderColor="black"
              borderWidth="1px"
              p={1}
              textAlign="left"
              backgroundColor="orange.400"
            >
              <h3>disagree:</h3>
              <Text>{topic4_disagree ? topic4_disagree : ""}</Text>
            </Box>
            </div>: <div></div>}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}
