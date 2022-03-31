import React from "react";
import {
  Button,
  Flex,
  Heading,
  Input,
  FormLabel,
  Container,
} from "@chakra-ui/react";
import { getSessionInfo } from "../database/model";
import Layout from "../components/Layout.jsx";

export async function getServerSideProps({ req }) {
  const userData = await getSessionInfo(req.cookies.sid);
  const user_id = JSON.parse(userData.data).user_id;

  return {
    props: {
      user_id,
    },
  };
}

export default function NewEssay(user_id) {
  return (
    <Layout>
      <Container>
        <form method="POST" action="/api/create-essay">
          <Flex mt={4} direction="column" p={10}>
            <Heading>First step</Heading>
            <FormLabel>Enter your essay question:</FormLabel>
            <Input name="question" mb={5} required></Input>
            <Button type="submit">Save and continue</Button>
          </Flex>
        </form>
      </Container>
    </Layout>
  );
}
