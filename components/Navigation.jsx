// import next components
import Link from "next/link";

// import components
import Switch from "./DarkModeSwitch.jsx";

// import chakra UI components
import { Flex, Container, Button } from "@chakra-ui/react";

export default function Navigation() {
  return (
    <Flex
      as="nav"
      height="50px"
      position="fixed"
      top="0"
      w="100%"
      bg="primaryLight"
      zIndex="900"
      alignItems="center"
    >
      <Container mt={0}>
        <Flex justifyContent="flex-end">
          <Flex gap="2rem">
            <ul style={{ listStyleType: "none", fontWeight: "700" }}>
              <Flex gap="2rem">
                <li>
                  <Link href="/home">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/myprofile">
                    <a>My Profile</a>
                  </Link>
                </li>
                <li>
                  <Link href="/resources">
                    <a>Resources</a>
                  </Link>
                </li>
                <li>
                  <form method="POST" action="/api/log-out">
                    <Button type="submit" size="sm">
                      Log out
                    </Button>
                  </form>
                </li>
              </Flex>
            </ul>
            <Switch />
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
}
