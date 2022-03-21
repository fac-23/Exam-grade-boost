import {
  Button,
  Flex,
  Heading,
  Input,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Home() {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background={formBackground} p={12} rounded={10}>
        <Heading mb={6}>Log In</Heading>
        <Input
          placeholder="Please enter your email"
          variant="filled"
          mb={3}
          type="email"
        ></Input>
        <Input
          placeholder="*****"
          variant="filled"
          mb={6}
          type="password"
        ></Input>
        <Button mb={6} colorScheme="teal">
          Log in
        </Button>
        <Button mb={6} colorScheme="teal" bg="primary">
          Primary color
        </Button>
        <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
      </Flex>
    </Flex>
  );
}
