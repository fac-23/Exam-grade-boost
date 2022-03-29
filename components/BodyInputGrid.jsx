import { Textarea, Heading } from "@chakra-ui/react";

export default function BodyInputGrid({
  storedPoint,
  storedIdentify,
  storedOutline,
  storedExplain1,
  storedExplain2,
  storedRelate,
}) {
  return (
    <>
      <Textarea
        name="point"
        placeholder="Point"
        defaultValue={storedPoint ? storedPoint : ""}
        borderColor="black.300"
        borderWidth="1.5px"
        mb={5}
      ></Textarea>
      <Textarea
        name="identify"
        placeholder="Identify"
        defaultValue={storedIdentify ? storedIdentify : ""}
        borderColor="blue.300"
        borderWidth="1.5px"
        mb={5}
      ></Textarea>
      <Textarea
        name="outline"
        placeholder="Outline"
        defaultValue={storedOutline ? storedOutline : ""}
        borderColor="yellow.300"
        borderWidth="1.5px"
        mb={5}
      ></Textarea>
      <Textarea
        name="explain1"
        placeholder="Explain 1"
        defaultValue={storedExplain1 ? storedExplain1 : ""}
        borderColor="orange.300"
        borderWidth="1.5px"
        mb={5}
      ></Textarea>
      <Textarea
        name="explain2"
        placeholder="Explain 2"
        defaultValue={storedExplain2 ? storedExplain2 : ""}
        borderColor="orange.300"
        borderWidth="1.5px"
        mb={5}
      ></Textarea>
      <Textarea
        name="relate"
        placeholder="Relate"
        defaultValue={storedRelate ? storedRelate : ""}
        borderColor="purple.200"
        borderWidth="1.5px"
        mb={5}
      ></Textarea>
    </>
  );
}
