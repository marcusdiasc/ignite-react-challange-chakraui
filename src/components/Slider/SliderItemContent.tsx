import { Image, Stack, Text, Box } from "@chakra-ui/react";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";
type Slide = {
  imgSrc: string;
  title: string;
  text: string;
  slug: string;
};

interface SliderItemContentProps {
  item: Slide;
}
export function SliderItemContent({
  item: { imgSrc, title, text, slug },
}: SliderItemContentProps) {
  return (
    <Box w="100%" h="450px" pos="relative">
      <Image
        src={imgSrc}
        alt="slider image"
        bgSize="cover"
        bgAttachment="fixed"
        bgRepeat="no-repeat"
        filter={"brightness(0.5)"}
      />
      <Link href={`/continent/${slug}`}>
        <Stack
          w="100%"
          h="100%"
          left="0"
          color="white"
          _hover={{
            cursor: "pointer",
          }}
        >
          <Box pos="absolute" top="45%" textAlign="center" w="100%" mx="auto">
            <Text as="h2" fontSize="5xl" fontWeight="bold">
              {title}
            </Text>
            <Text as="h2" fontSize="2xl" fontWeight="bold">
              {text}
            </Text>
          </Box>
        </Stack>
      </Link>
    </Box>
  );
}
