import {
  getSessionInfo,
  getContactInfo,
  getAllEssays,
} from "../database/model";
import Link from "next/link";

import {
  Button,
  Flex,
  Heading,
  useColorModeValue,
  Box,
  Text,
  UnorderedList,
  ListItem,
  Image,
  Container,
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
  const boxBorder = useColorModeValue("gray.100", "gray.700");

  return (
    <>
      <Navigation />
      <Container>
        <Flex alignItems="flex-start" justifyContent="center" direction="row">
          <Flex mr={20} direction="column">
            <Heading as="h1" mb="2rem">
              Welcome back {username}
            </Heading>

            <Link href="/newEssay" passHref>
              <Button variant="tertiary" mb="2rem">
                {" "}
                Create new Essay
              </Button>
            </Link>

            <Box>
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
                      borderColor="primary"
                      borderWidth="3px"
                      borderRadius="10px"
                      key={essay.id}
                    >
                      <Flex justifyContent="space-between" alignItems="center">
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
            w="20%"
            alignItems="center"
            justifyContent="center"
            direction="column"
          >
            <Heading as="h2" mb="2rem">
              Profile
            </Heading>
            <Box
              mb={"2rem"}
              w="100%"
              p={"1rem"}
              borderColor="primary"
              borderWidth="3px"
              borderRadius="10px"
              h="100%"
            >
              <Image
                rounded="full"
                size="50px"
                src="https://bit.ly/sage-adebayo"
                alt="Segun Adebayo"
              />
            </Box>
          </Flex>
        </Flex>
      </Container>
    </>
  );
}
