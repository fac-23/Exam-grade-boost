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
  storedBranch1,
  storedBranch2,
  storedBranch3,
  storedBranch4
}){
  return (
    <>
      <Heading as="h2" size="lg" w="100%" mb="2rem">
        How to write your main body
      </Heading>
      <UnorderedList styleType="none" m="0 0 1.5rem 0">
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
                Word bank
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p="1rem 0 1rem 0">
            <UnorderedList styleType="none" m="0 0 1.5rem 0">
              <ListItem p="1rem" background="gray.100">
                <strong>Point</strong>
                <p>There are different views on...</p>
                <p>The relationship between... and... is uncertain.</p>
                <p>Attitudes to... are mixed</p>
                <p>The relationship between... and... is often debated.</p>
                <p>The level of significance...</p>
              </ListItem>
              <ListItem p="1rem" background="blue.100">
                <strong>Identify</strong>
                <p>For example...</p>
                <p>For instance...</p>
                <p>Research presented by... showed...</p>
                <p>A key reason for...</p>
                <p>The following quotation is relevant...</p>
              </ListItem>
              <ListItem p="1rem" background="yellow.100">
                <strong>Outline</strong>
                <p>A key feature is...</p>
                <p>A part of the... is...</p>
                <p>An important section of... was...</p>
                <p>A significant part is...</p>
              </ListItem>
              <ListItem p="1rem" background="orange.200">
                <strong>Evidence 1</strong>
                <p>Research has focused on around key topics...</p>
                <p>
                  To provide some resolution to the discussion, the following
                  areas will be investigated….
                </p>
                <p>Several areas will be considered... </p>
              </ListItem>
              <ListItem p="1rem" background="orange.300">
                <strong>Evidence 2</strong>
                <p>The evidence is mixed...</p>
                <p>Not everyone agrees...</p>
                <p>There are, however, different views...</p>
              </ListItem>
              <ListItem p="1rem" background="purple.200">
                <strong>Relate</strong>
                <p>Overall, the evidence mostly supports...</p>
                <p>The general trend was...</p>
                <p>It has been shown that...</p>
              </ListItem>
            </UnorderedList>
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
                  <AccordionPanel pb={4}>
                  <Box  
                  borderColor="black"
                  borderWidth="1px" 
                  p={1} 
                  textAlign="left" 
                  backgroundColor="orange.100">
                    <h3>Topic 1:</h3>
                    <Text>
                    {storedBranch1 ? storedBranch1 : ""}
                    </Text>
                  </Box>
                  <Box 
                   borderColor="black"
                   borderWidth="1px" 
                   p={1} 
                   textAlign="left" 
                   backgroundColor="orange.200">
                    <h3>Topic 2:</h3>
                    <Text>
                    {storedBranch2 ? storedBranch2 : ""}
                    </Text>
                  </Box>
                  <Box 
                  borderColor="black"
                  borderWidth="1px" 
                  p={1} 
                  textAlign="left" 
                  backgroundColor="orange.300">
                    <h3>Topic 3:</h3>
                    <Text>
                    {storedBranch3 ? storedBranch3 : ""}
                    </Text>
                  </Box>
                  <Box
                   borderColor="black"
                   borderWidth="1px" 
                   p={1} 
                   textAlign="left" 
                   backgroundColor="orange.400">
                    <h3>Topic 4:</h3>
                    <Text>
                    {storedBranch4 ? storedBranch4 : ""}
                    </Text>
                  </Box>
                  </AccordionPanel>
                </AccordionItem>

      </Accordion>
    </>
  );
}
