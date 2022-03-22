import Link from "next/link";
import Image from "next/image";

// import chakra UI components
import {
  Button,
  Flex,
  Heading,
  Input,
  FormLabel,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Home() {
  const formBackground = useColorModeValue("gray.100", "gray.700");

  return (
    <>
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex
          direction="column"
          background={formBackground}
          p={12}
          rounded={10}
        >
          <Heading mb={10}>Exam Grade Boost</Heading>
          <Image
            height={200}
            width={100}
            src="/boost-logo.svg"
            alt="exam grade boost rocket logo"
          ></Image>
          <Link href="/login" passHref mb={6}>
            <Button className="button" colorScheme="yellow" mb={6}>
              Log in
            </Button>
          </Link>
          <Link href="/signup" passHref>
            <Button className="button" colorScheme="orange">
              Sign up
            </Button>
          </Link>
        </Flex>
      </Flex>
    </>
  );
}
