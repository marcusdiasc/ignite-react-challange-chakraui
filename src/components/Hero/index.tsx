import {
  Box,
  Container,
  Flex,
  SimpleGrid,
  Text,
  Image,
} from "@chakra-ui/react";

export function Hero() {
  return (
    <Flex
      w="100%"
      h="335px"
      pos="relative"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        w: "100%",
        h: "335px",
        bgImg: "/background.png",
        bgRepeat: "no-repeat",
        bgAttachment: "center",
        bgPosition: "center",
        bgSize: "cover",
      }}
    >
      <Flex
        zIndex="1"
        maxW="1160px"
        width="100%"
        mx="auto"
        align="center"
        justify="space-between"
        px={2}
      >
        <Box color="white" minW="50%">
          <Box pb={3} mb={2}>
            <Text as="h1" fontSize="4xl">
              5 Continentes,
            </Text>
            <Text as="h2" fontSize="4xl">
              infinitas possibilidades.
            </Text>
          </Box>
          <Text as="p" fontSize="xl">
            Chegou a hora de tirar do papel a viajem que você sempre sonhou
          </Text>
        </Box>
        <Box
          pos="relative"
          w="100%"
          h="100%"
          display={{ base: "none", lg: "block" }}
        >
          <Image pos="absolute" bottom="-32px" right="0" src="/airplane.png" />
        </Box>
      </Flex>
    </Flex>
  );
}
