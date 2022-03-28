import {
  getSessionInfo,
  getContactInfo,
  getAllEssays,
} from "../database/model";
// import Link from "next/link";

import { useState } from "react";

import {
  Button,
  Flex,
  Stack,
  Heading,
  Box,
  Link,
  UnorderedList,
  ListItem,
  Container,
  useColorModeValue,
  useColorMode,
  Avatar,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";

import { EditIcon, ViewIcon } from "@chakra-ui/icons";

import Navigation from "../components/Navigation.jsx";

export async function getServerSideProps({ req }) {
  const userData = await getSessionInfo(req.cookies.sid);
  const user_id = JSON.parse(userData.data).user_id;
  const contactInfo = await getContactInfo(user_id);
  const username = contactInfo.username;
  const allEssays = await getAllEssays(user_id);

  return {
    props: {
      username,
      allEssays,
    },
  };
}

export default function Home({ username, allEssays }) {
  const modeColors = useColorModeValue("primary", "secondary");

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Navigation />
      <Container>
        <Flex gap="40px" direction={["column", "column", "row"]}>
          <Flex direction="column">
            <Box>
              <Heading as="h1" mb="2rem">
                Welcome back {username}
              </Heading>

              <Link href="/newEssay" passHref>
                <Button variant="newEssay" mb="2rem" width="100%">
                  Create new Essay
                </Button>
              </Link>

              <Heading as="h2" mb="2rem">
                Completed Essays
              </Heading>

              <UnorderedList m={0} styleType="none">
                {allEssays.reverse().map((essay) => {
                  return (
                    <ListItem
                      mb="2rem"
                      w="100%"
                      p="1rem"
                      borderColor={modeColors}
                      borderWidth="3px"
                      borderRadius="10px"
                      key={essay.id}
                    >
                      <Flex
                        justifyContent="space-between"
                        alignItems="center"
                        gap="1rem"
                      >
                        <Heading as="h3" size="sm" fontWeight="800">
                          {essay.question}
                        </Heading>
                        <Flex gap="1rem">
                          <form method="POST" action="/api/editSaved" passHref>
                            <input
                              type="hidden"
                              name="essayId"
                              value={essay.id}
                            ></input>
                            <Button type="submit">
                              <EditIcon />
                            </Button>
                          </form>
                          <form method="POST" action="/api/viewSaved" passHref>
                            <input
                              type="hidden"
                              name="essayId"
                              value={essay.id}
                            ></input>
                            <Button type="submit">
                              <ViewIcon />
                            </Button>
                          </form>
                        </Flex>
                      </Flex>
                    </ListItem>
                  );
                })}
              </UnorderedList>
            </Box>
          </Flex>

          <Flex
            flexBasis="500px"
            alignItems="center"
            justifyContent="center"
            direction="column"
          >
            <Heading as="h2" mb="2rem" alignSelf="flex-start">
              Profile
            </Heading>
            <Flex
              mb={"2rem"}
              w="100%"
              p={"1rem"}
              borderColor={modeColors}
              borderWidth="3px"
              borderRadius="10px"
              h="100%"
              alignItems="center"
              direction="column"
            >
              <Avatar
                bg={modeColors}
                h="100px"
                w="100%"
                maxWidth="100px"
                alt="Default user"
                mb="2rem"
              />
              <RadioGroup defaultValue="light" onChange={toggleColorMode}>
                <Stack spacing={5} direction="column">
                  <Radio value="light">Light Mode</Radio>
                  <Radio value="dark">Dark Mode</Radio>
                </Stack>
              </RadioGroup>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </>
  );
}
