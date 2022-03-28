import {
  getSessionInfo,
  getContactInfo,
  getAllEssays,
} from "../database/model";

import {
  Button,
  Flex,
  Text,
  Heading,
  Box,
  Link,
  UnorderedList,
  ListItem,
  Container,
  useColorModeValue,
  useColorMode,
  Avatar,
  FormLabel,
} from "@chakra-ui/react";

import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import Layout from "../components/Layout";
import Switch from "../components/DarkModeSwitch";

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
    <Layout>
      <Container>
        <Flex gap="40px" direction={["column", "column", "row"]}>
          <Flex direction="column" width="100%">
            <Box>
              <Heading as="h1" mb="2rem">
                Welcome back {username}
              </Heading>

              <Link
                href="/newEssay"
                variant="newEssay"
                mb="2rem"
                width="100%"
                passHref
              >
                Create new Essay
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
                        <Flex gap="1rem" direction={["column", "row"]}>
                          <form method="POST" action="/api/editSaved" passHref>
                            <input
                              type="hidden"
                              name="essayId"
                              value={essay.id}
                            ></input>
                            <Button type="submit">
                              <Text mr="10px">Edit</Text>
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
                              <Text mr="10px">View</Text>

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
              <label className="switchLabel">Toggle Dark Mode</label>

              <Switch id="dark-mode-switch" />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Layout>
  );
}
