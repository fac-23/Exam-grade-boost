import Link from "next/link";
import { Button, Flex, Heading, Input, FormLabel } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function ResetPassword() {
  const { query } = useRouter();
  return (
    <form action="/api/commit-reset" method="POST">
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" p={12} rounded={10}>
          <Heading mb={10}>Reset password</Heading>
          <Input type="hidden" id="email" name="email" value={query.email} />
          <Input type="hidden" id="token" name="token" value={query.token} />
          <FormLabel htmlFor="password">New password</FormLabel>
          <Input type="password" id="password" name="password" mb={6} />
          <Button mb={6} colorScheme="yellow" className="button" type="submit">
            Reset
          </Button>

          <Link href={"/"} passHref>
            <Button className="button" colorScheme="teal">
              Back to landing page
            </Button>
          </Link>
        </Flex>
      </Flex>
    </form>
  );
}
