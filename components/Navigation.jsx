// import next components
// import Link from "next/link";

// import components
import Switch from "./DarkModeSwitch.jsx";

// import chakra UI components
import {
  Flex,
  Container,
  Button,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Navigation() {
  const navBackgroundColor = useColorModeValue("primary", "secondary");

  return (
    <Flex
      as="nav"
      height="60px"
      position="fixed"
      top="0"
      w="100%"
      bg={navBackgroundColor}
      zIndex="900"
      alignItems="center"
    >
      <Container mt={0}>
        <Flex justifyContent="flex-end">
          <Flex gap="2rem" alignItems="center">
            <Flex
              as="ul"
              gap="2rem"
              style={{ listStyleType: "none", fontWeight: "700" }}
            >
              <li>
                <Link variant="navigation" href="/home">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link variant="navigation" href="/resources">
                  <a>Resources</a>
                </Link>
              </li>
            </Flex>
            <form method="POST" action="/api/log-out">
              <Button variant="logout" type="submit" size="sm">
                Log out
              </Button>
            </form>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
}
