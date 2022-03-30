import Layout from "../components/Layout";

import {
  Flex,
  Heading,
  useColorModeValue,
  Box,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Tutorial() {
  const formBackground = useColorModeValue("gray.100", "gray.700");

  return (
    <Layout noNav>
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex
          direction="column"
          background={formBackground}
          p={12}
          rounded={10}
          alignItems="center"
        >
          <VStack spacing="2rem">
            <Heading mb={10}>Tutorial</Heading>
            <Box>
              <iframe
                src="https://player.vimeo.com/video/691993464?h=93328f71ac"
                width="100%"
                height="auto"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>{" "}
            </Box>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper
              quis lectus nulla at volutpat diam ut venenatis tellus. In nisl
              nisi scelerisque eu. Massa sapien faucibus et molestie ac feugiat.
              Eget velit aliquet sagittis id consectetur purus ut. Eu non diam
              phasellus vestibulum. Tellus in hac habitasse platea dictumst
              vestibulum. Mattis aliquam faucibus purus in massa tempor. Sit
              amet consectetur adipiscing elit pellentesque habitant. Ac feugiat
              sed lectus vestibulum mattis ullamcorper velit. Pharetra magna ac
              placerat vestibulum lectus mauris ultrices eros in. Vestibulum
              mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare
              massa. Libero nunc consequat interdum varius. Leo in vitae turpis
              massa sed elementum. Scelerisque felis imperdiet proin fermentum
              leo. Amet mauris commodo quis imperdiet massa tincidunt nunc
              pulvinar. Sed euismod nisi porta lorem mollis aliquam ut
              porttitor. Odio aenean sed adipiscing diam donec adipiscing. Erat
              imperdiet sed euismod nisi. Tellus id interdum velit laoreet id
              donec. Viverra ipsum nunc aliquet bibendum enim facilisis.
              Consectetur libero id faucibus nisl tincidunt. Odio facilisis
              mauris sit amet. Lectus nulla at volutpat diam ut venenatis
              tellus. Viverra vitae congue eu consequat ac felis donec et. Orci
              nulla pellentesque dignissim enim sit amet venenatis. Est
              pellentesque elit ullamcorper dignissim. Vitae congue mauris
              rhoncus aenean. Dolor sit amet consectetur adipiscing elit
              pellentesque habitant morbi tristique. Amet porttitor eget dolor
              morbi non arcu risus quis. Quam elementum pulvinar etiam non.
            </Text>
          </VStack>
        </Flex>
      </Flex>
    </Layout>
  );
}
