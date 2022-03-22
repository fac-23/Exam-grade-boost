import React from "react";
import { Button, Flex, Heading, Input, FormLabel } from "@chakra-ui/react";
import { getSessionInfo } from "../database/model";
import Navigation from "../components/Navigation.jsx";

export async function getServerSideProps({ req }) {
  const userData = await getSessionInfo(req.cookies.sid);
  const user_id = JSON.parse(userData.data).user_id;

  return {
    props: {
      user_id,
    },
  };
}

export default function newEssay(user_id) {
  return (
    <>
      <Navigation />
      <form method="POST" action="/api/create-essay">
        <Flex mt={4} direction="column" p={10}>
          <Heading>First step</Heading>
          <FormLabel>Enter your essay question:</FormLabel>
          <Input name="question" mb={5}></Input>
          <Button type="submit">Save and continue</Button>
        </Flex>
      </form>
    </>
  );
}
