// import next components
import Link from "next/link";

// import components
import Switch from "./DarkModeSwitch.jsx";

// import chakra UI components
import { Flex, Container } from "@chakra-ui/react";

export default function Navigation() {
  return (
    <Flex
      as="nav"
      height="50px"
      position="fixed"
      top="0"
      w="100%"
      bg="primary"
      zIndex="900"
      alignItems="center"
    >
      <Container mt={0}>
        <Flex justifyContent="flex-end">
          <Flex gap="2rem">
            <ul style={{ listStyleType: "none", fontWeight: "700" }}>
              <Flex gap="2rem">
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
              </Flex>
            </ul>
            <Switch />
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
}
