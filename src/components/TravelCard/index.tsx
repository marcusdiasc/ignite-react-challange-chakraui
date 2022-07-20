import { VStack, Image, Text, Circle, Flex } from "@chakra-ui/react";

interface TravelCardProps {
  imgSrc: string;
  text: string;
}

export function TravelCard({ imgSrc, text }: TravelCardProps) {
  return (
    <VStack>
      <Image
        src={imgSrc}
        w="85px"
        h="85px"
        display={{ base: "none", lg: "block" }}
      />
      <Flex dir="row" align="center" justify="center">
        <Circle size="10px" bgColor="highlight.500" mr={4} />
        <Text color="heading.500" fontSize="2xl" fontWeight="semibold">
          {text}
        </Text>
      </Flex>
    </VStack>
  );
}
