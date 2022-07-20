import {
  Box,
  Circle,
  Container,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";

type City = {
  name: string;
  imgUrl: string;
};

type Country = {
  name: string;
  language: string;
  flagImgUrl: string;
  cities: City[];
};

type Continent = {
  name: string;
  description: string;
  imgUrl: string;
  countries: Country[];
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

interface ContinentDetailPageProps {
  continent: Continent;
}

const DATA: Continent[] = [
  {
    name: "europe",
    description:
      "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
    imgUrl:
      "https://images.unsplash.com/photo-1473951574080-01fe45ec8643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1504&q=80",
    countries: [
      {
        name: "England",
        language: "English",
        flagImgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/1280px-Flag_of_the_United_Kingdom_%283-5%29.svg.png",
        cities: [
          {
            name: "London",
            imgUrl:
              "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          },
          {
            name: "Manchester",
            imgUrl:
              "https://images.unsplash.com/photo-1611490916757-4402482e161b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1517&q=80",
          },
          {
            name: "Liverpool",
            imgUrl:
              "https://images.unsplash.com/photo-1505833779582-e28ba8f922f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
          },
        ],
      },
      {
        name: "France",
        language: "French",
        flagImgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
        cities: [
          {
            name: "Paris",
            imgUrl:
              "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
          },
          {
            name: "Lyon",
            imgUrl:
              "https://images.unsplash.com/photo-1602087594298-706ccc894bfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
          },
          {
            name: "Marselha",
            imgUrl:
              "https://images.unsplash.com/photo-1629274305139-95bfbf47ed13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
          },
        ],
      },
    ],
  },
  {
    name: "america",
    description: "Nosso continent",
    imgUrl: "",
    countries: [
      {
        name: "Brazil",
        language: "Portuguese",
        flagImgUrl: "",
        cities: [
          {
            name: "Brasilia",
            imgUrl: "",
          },
          {
            name: "Rio de Janeiro",
            imgUrl: "",
          },
          {
            name: "São Paulo",
            imgUrl: "",
          },
        ],
      },
      {
        name: "EUA",
        language: "English",
        flagImgUrl: "",
        cities: [
          {
            name: "New York",
            imgUrl: "",
          },
          {
            name: "Washington",
            imgUrl: "",
          },
          {
            name: "Hollywood",
            imgUrl: "",
          },
        ],
      },
    ],
  },
];

const ContinentDetailPage: NextPage<ContinentDetailPageProps> = ({
  continent,
}) => {
  const languages = new Set(continent.countries.map((c) => c.language)).size;

  let cities: City[] = [];

  continent.countries.forEach((country) => {
    country.cities.forEach((city) => cities.push(city));
  });

  return (
    <>
      <Box mb={8}>
        <Box
          w="100%"
          h="500px"
          mb={8}
          bgImg={continent.imgUrl}
          bgRepeat="no-repeat"
          bgAttachment="center"
          bgPos="center"
          bgSize="cover"
        >
          <Container maxW="1160px" my={2} h="100%">
            <Flex align="flex-end" justify="left" h="100%">
              <Text
                fontSize="5xl"
                fontWeight="semibold"
                color="light.text"
                mb={8}
                py={6}
              >
                {continent.name[0].toUpperCase() + continent.name.slice(1)}
              </Text>
            </Flex>
          </Container>
        </Box>
        <Container maxW="1160px" my={2} h="100%">
          <SimpleGrid columns={[1, 1, 1, 2]} gap={8} w="100%">
            <Text
              color="heading.500"
              fontSize="2xl"
              textAlign="justify"
              my={10}
              py={10}
            >
              {continent.description}
            </Text>
            <Flex align="center" justify="space-around" textAlign="center">
              <Box>
                <Text
                  color="highlight.500"
                  fontSize="5xl"
                  fontWeight="semibold"
                >
                  {continent.countries.length}
                </Text>
                <Text>países</Text>
              </Box>
              <Box>
                <Text
                  color="highlight.500"
                  fontSize="5xl"
                  fontWeight="semibold"
                >
                  {languages}
                </Text>
                <Text>línguas</Text>
              </Box>
              <Box>
                <Text
                  color="highlight.500"
                  fontSize="5xl"
                  fontWeight="semibold"
                >
                  {cities.length}
                </Text>
                <Text>cidades</Text>
              </Box>
            </Flex>
          </SimpleGrid>
          <Stack>
            <Text
              color="heading.500"
              fontSize="4xl"
              my={8}
            >{`Cidades ${cities.length}`}</Text>
            <SimpleGrid columns={[1, 1, 2, 4]} gap={8}>
              {continent.countries.map((country) => {
                return country.cities.map((city) => (
                  <Box
                    shadow="md"
                    borderWidth="1px"
                    borderRadius="5px"
                    overflow="hidden"
                  >
                    <Image src={city.imgUrl} w="100%" h="173px" />
                    <Flex p={6} align="center" justify="space-between">
                      <Box>
                        <Text
                          color="heading.500"
                          fontSize="xl"
                          fontWeight="semibold"
                        >
                          {city.name}
                        </Text>
                        <Text
                          color="info.500"
                          fontSize="md"
                          fontWeight="semibold"
                        >
                          {country.name}
                        </Text>
                      </Box>
                      <Circle size="30px" overflow="hidden">
                        <Image src={country.flagImgUrl} w="100%" h="100%" />
                      </Circle>
                    </Flex>
                  </Box>
                ));
              })}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export const getStaticPaths: GetStaticPaths<IParams> = async () => {
  const params = DATA.map((continent) => ({
    params: { slug: continent.name },
  }));
  return {
    paths: params,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ContinentDetailPageProps> = async ({
  params,
}) => {
  const { slug } = params as IParams;

  const continent = DATA.find(
    (continent) => continent.name === slug
  ) as Continent;

  return {
    props: {
      continent,
    },
  };
};

export default ContinentDetailPage;
