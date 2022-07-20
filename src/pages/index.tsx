import {
  Box,
  Container,
  Divider,
  Flex,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { Hero } from "../components/Hero";
import { Slider } from "../components/Slider";
import { TravelCard } from "../components/TravelCard";

type Slide = {
  imgSrc: string;
  title: string;
  text: string;
  slug: string;
};

const SLIDER_ITEMS: Slide[] = [
  {
    imgSrc:
      "https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Europa",
    text: "O continente mais velho",
    slug: "europe",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    title: "América",
    text: "O continente mais velho",
    slug: "america",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1442&q=80",
    title: "Ásia",
    text: "O continente mais velho",
    slug: "asia",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80",
    title: "Oceania",
    text: "O continente mais velho",
    slug: "oceania",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80",
    title: "África",
    text: "O continente mais velho",
    slug: "africa",
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Container maxW="1160px" my={2}>
        <Flex flexDir="column" align="center" justify="center">
          <SimpleGrid
            w="100%"
            columns={[2, 2, 5]}
            my={[4, 4, 10]}
            py={[4, 4, 10]}
            textAlign="center"
          >
            <TravelCard imgSrc="/cocktail.png" text="vida noturna" />
            <TravelCard imgSrc="/surf.png" text="praia" />
            <TravelCard imgSrc="/building.png" text="moderno" />
            <TravelCard imgSrc="/museum.png" text="clássico" />
            <TravelCard imgSrc="/cocktail.png" text="e mais ..." />
          </SimpleGrid>
          <Divider w="90px" h="2px" bg="heading.500" my={10} />
          <Stack
            align="center"
            justify="center"
            textAlign="center"
            color="heading.500"
            fontSize="4xl"
            my={8}
            py={4}
          >
            <Text>Vamos nessa ?</Text>
            <Text>Então escolha seu continente</Text>
          </Stack>
          <Slider sliderItems={SLIDER_ITEMS} />
        </Flex>
      </Container>
    </>
  );
};

export default Home;
