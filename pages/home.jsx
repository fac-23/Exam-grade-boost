import { getSessionInfo, getContactInfo } from "../database/model";
import Link from "next/link";

import {
  Button,
  Flex,
  Heading,
  useColorModeValue,
  Box,
  Text,
} from "@chakra-ui/react";

import Navigation from "../components/Navigation.jsx";

export async function getServerSideProps({ req }) {
  const userData = await getSessionInfo(req.cookies.sid);
  const user_id = JSON.parse(userData.data).user_id;
  const contactInfo = await getContactInfo(user_id);
  const username = contactInfo.username;
  const email = contactInfo.email;
  const cookie = req.cookies.sid;

  return {
    props: {
      user_id,
      username,
      email,
      cookie,
    },
  };
}

export default function Home({ username }) {
  const boxBorder = useColorModeValue("gray.100", "gray.700");

  return (
    <>
      <Navigation />
      <Flex
        mt={10}
        alignItems="flex-start"
        justifyContent="center"
        direction="row"
      >
        <Flex mr={20} direction="column">
          <Heading m="2rem">Welcome back {username}</Heading>

          <Link href="/newEssay" passHref>
            <Button mb="2rem"> Create new Essay</Button>
          </Link>

          <Box m="1rem">
            <Heading mb="1rem">Completed Essays</Heading>
            <Box
              m={3}
              h="7rem"
              w="100%"
              p={5}
              borderColor="black"
              borderWidth="2px"
            >
              <Text>How far do you agree,UK roads are easy to travel on?</Text>
            </Box>
            <Box
              m={3}
              h="7rem"
              w="100%"
              p={5}
              borderColor="black"
              borderWidth="2px"
            >
              <Text>
                The representation of madness in Shakespeares text, Hamlet
              </Text>
            </Box>
            <Box
              m={3}
              h="7rem"
              w="100%"
              p={5}
              borderColor="black"
              borderWidth="2px"
            >
              <Text>
                Wildes Critique of Victorian Society in The Importance of Being
                Earnest
              </Text>
            </Box>
          </Box>

          <Box m="1rem">
            <Heading mb="1rem">Draft Essays</Heading>
            <Box m={3} h="7rem" w="100%" borderColor="black" borderWidth="2px">
              <Text>
                How far do you agree that UK roads are easy to travel on?
              </Text>
            </Box>
            <Box m={3} h="7rem" w="100%" borderColor="black" borderWidth="2px">
              <Text>
                The representation of madness in Shakespeares text, Hamlet
              </Text>
            </Box>
            <Box m={3} h="7rem" w="100%" borderColor="black" borderWidth="2px">
              <Text>
                Wildes Critique of Victorian Society in The Importance of Being
                Earnest
              </Text>
            </Box>
          </Box>
        </Flex>

        <Flex
          m="2rem"
          w="20%"
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <Heading mb="1rem">Profile</Heading>
          <Box h="40rem" w="100%" borderColor="black" borderWidth="2px"></Box>
        </Flex>
      </Flex>
    </>
  );
}
