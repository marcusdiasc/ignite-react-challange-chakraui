import { Flex } from "@chakra-ui/react";
import Image from "next/image";

export function Header() {
  return (
    <Flex dir="row" w="100%" h="100px" align="center" justify="center">
      <Image src="/logo.png" width="184px" height="46px" layout="fixed" />
    </Flex>
  );
}
