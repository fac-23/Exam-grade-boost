import { useState } from "react";
import {
  Textarea,
  Flex,
  UnorderedList,
  Button,
  Collapse,
  Box,
  ListItem,
} from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";

export default function BodyInputGrid({
  storedPoint,
  storedIdentify,
  storedOutline,
  storedExplain1,
  storedExplain2,
  storedRelate,
}) {
  const [isOpen, setIsOpen] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  return (
    <>
      <Flex>
        <Textarea
          name="point"
          placeholder="Point"
          defaultValue={storedPoint ? storedPoint : ""}
          borderColor="orange.200"
          borderWidth='0.15rem'
        ></Textarea>
        <Button
          p="2"
          m="2"
          size="sm"
          onClick={() => {
            setIsOpen([!isOpen[0], false, false, false]);
          }}
          fontSize="sm"
          fontWeight="medium"
        >
          <TriangleDownIcon />
        </Button>
      </Flex>
      <Collapse in={isOpen[0]} animateOpacity>
        <Box
          p="10px"
          color="black"
          mt="1"
          mb="2"
          bg="gray.100"
          rounded="md"
          shadow="md"
        >
          <UnorderedList p="1rem">
            <strong>Point suggestions</strong>
            <ListItem>There are different views on...</ListItem>
            <ListItem>
              The relationship between... and... is uncertain.
            </ListItem>
            <ListItem>Attitudes to... are mixed</ListItem>
            <ListItem>
              The relationship between... and... is often debated.
            </ListItem>
            <ListItem>The level of significance...</ListItem>
          </UnorderedList>
        </Box>
      </Collapse>

      <Flex>
        <Textarea
          name="identify"
          placeholder="Identify"
          defaultValue={storedIdentify ? storedIdentify : ""}
          borderColor="orange.300"
          borderWidth='0.15rem'
          mt="0.5rem"
        ></Textarea>
        <Button
          p="2"
          m="2"
          size="sm"
          onClick={() => {
            setIsOpen([false, !isOpen[1], false, false, false, false]);
          }}
          fontSize="sm"
          fontWeight="medium"
        >
          <TriangleDownIcon />
        </Button>
      </Flex>
      <Collapse in={isOpen[1]} animateOpacity>
        <Box
          p="10px"
          color="black"
          mt="1"
          mb="2"
          bg="blue.100"
          rounded="md"
          shadow="md"
        >
          <UnorderedList p="1rem">
            <strong>Point suggestions</strong>
            <strong>Identify</strong>
            <ListItem>For example...</ListItem>
            <ListItem>For instance...</ListItem>
            <ListItem>Research presented by... showed...</ListItem>
            <ListItem>A key reason for...</ListItem>
            <ListItem>The following quotation is relevant...</ListItem>
          </UnorderedList>
        </Box>
      </Collapse>

      <Flex>
        <Textarea
          name="outline"
          placeholder="Outline"
          defaultValue={storedOutline ? storedOutline : ""}
          borderColor="yellow.300"
          borderWidth='0.15rem'
          mt="0.5rem"
        ></Textarea>
        <Button
          p="2"
          m="2"
          size="sm"
          onClick={() => {
            setIsOpen([false, false, !isOpen[2], false, false, false]);
          }}
          fontSize="sm"
          fontWeight="medium"
        >
          <TriangleDownIcon />
        </Button>
      </Flex>
      <Collapse in={isOpen[2]} animateOpacity>
        <Box
          p="10px"
          color="black"
          mt="1"
          mb="2"
          bg="yellow.200"
          rounded="md"
          shadow="md"
        >
          <UnorderedList p="1rem">
            <strong>Outline suggestions</strong>
            <ListItem>A key feature is...</ListItem>
            <ListItem>A part of the... is...</ListItem>
            <ListItem>An important section of... was...</ListItem>
            <ListItem>A significant part is...</ListItem>
          </UnorderedList>
        </Box>
      </Collapse>

      <Flex>
        <Textarea
          name="explain1"
          placeholder="Evidence 1"
          defaultValue={storedExplain1 ? storedExplain1 : ""}
          borderColor="yellow.200"
          borderWidth='0.15rem'
          mt="0.5rem"
        ></Textarea>
        <Button
          p="2"
          m="2"
          size="sm"
          onClick={() => {
            setIsOpen([false, false, false, !isOpen[3], false, false]);
          }}
          fontSize="sm"
          fontWeight="medium"
        >
          <TriangleDownIcon />
        </Button>
      </Flex>
      <Collapse in={isOpen[3]} animateOpacity>
        <Box
          p="10px"
          color="black"
          mt="1"
          mb="2"
          bg="yellow.100"
          rounded="md"
          shadow="md"
        >
          <UnorderedList p="1rem">
            <strong>Evidence 1 suggestions</strong>
            <ListItem>Research has focused on around key topics...</ListItem>
            <ListItem>
              To provide some resolution to the discussion, the following areas
              will be investigated….
            </ListItem>
            <ListItem>Several areas will be considered... </ListItem>
          </UnorderedList>
        </Box>
      </Collapse>

      <Flex>
        <Textarea
          name="explain2"
          placeholder="Evidence 2"
          defaultValue={storedExplain2 ? storedExplain2 : ""}
          borderColor="blue.300"
          borderWidth='0.15rem'
          mt="0.5rem"
        ></Textarea>
        <Button
          p="2"
          m="2"
          size="sm"
          onClick={() => {
            setIsOpen([false, false, false, false, !isOpen[4], false]);
          }}
          fontSize="sm"
          fontWeight="medium"
        >
          <TriangleDownIcon />
        </Button>
      </Flex>
      <Collapse in={isOpen[4]} animateOpacity>
        <Box
          p="10px"
          color="black"
          mt="1"
          mb="2"
          bg="orange.200"
          rounded="md"
          shadow="md"
        >
          <UnorderedList p="1rem">
            <strong>Evidence 2 suggestions</strong>
            <ListItem>The evidence is mixed...</ListItem>
            <ListItem>Not everyone agrees...</ListItem>
            <ListItem>There are, however, different views...</ListItem>
          </UnorderedList>
        </Box>
      </Collapse>

      <Flex>
        <Textarea
          name="relate"
          placeholder="Relate"
          defaultValue={storedRelate ? storedRelate : ""}
          borderColor="purple.300"
          borderWidth='0.15rem'
          mt="0.5rem"
          mb="0.5rem"
        ></Textarea>
        <Button
          p="2"
          m="2"
          size="sm"
          onClick={() => {
            setIsOpen([false, false, false, false, false, !isOpen[5]]);
          }}
          fontSize="sm"
          fontWeight="medium"
        >
          <TriangleDownIcon />
        </Button>
      </Flex>
      <Collapse in={isOpen[5]} animateOpacity>
        <Box
          p="10px"
          color="black"
          mt="1"
          mb="2"
          bg="purple.100"
          rounded="md"
          shadow="md"
        >
          <UnorderedList p="1rem">
            <strong>Relate suggestions</strong>
            <ListItem>Overall, the evidence mostly supports...</ListItem>
            <ListItem>The general trend was...</ListItem>
            <ListItem>It has been shown that...</ListItem>
          </UnorderedList>
        </Box>
      </Collapse>
    </>
  );
}
