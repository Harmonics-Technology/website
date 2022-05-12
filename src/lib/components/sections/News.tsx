import {
  Box,
  Button,
  Flex,
  GridItem,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

const items = [
  {
    src: "news1.png",
    tittle: "Data: The next great resource",
    text: "Forget oil, gas or rare-earth elements. In coming years data is set to become the world's most valuable resource. Advances in technology, from robotics to artificial intelligence, are transforming industries across the world.",
  },
  {
    src: "news2.png",
    tittle: "A giant leap into the future",
    text: "The corona pandemic drove Sandvik's tube site in Germany to go fully digital in only two days, a change that normally would have taken five years. A flatter, more efficient organization and improved flexibility make it a production model for the future.",
  },
  {
    src: "news3.png",
    tittle: "Starting an office over the web",
    text: "The medical wire business within Sandvik was looking to expand operations in the US, but the pandemic hindered our search for a new site. So, they did it entirely virtual instead.",
  },
  {
    src: "news1.png",
    tittle: "Data: The next great resource",
    text: "Forget oil, gas or rare-earth elements. In coming years data is set to become the world's most valuable resource. Advances in technology, from robotics to artificial intelligence, are transforming industries across the world.",
  },
  {
    src: "news2.png",
    tittle: "A giant leap into the future",
    text: "The corona pandemic drove Sandvik's tube site in Germany to go fully digital in only two days, a change that normally would have taken five years. A flatter, more efficient organization and improved flexibility make it a production model for the future.",
  },
  {
    src: "news3.png",
    tittle: "Starting an office over the web",
    text: "The medical wire business within Sandvik was looking to expand operations in the US, but the pandemic hindered our search for a new site. So, they did it entirely virtual instead.",
  },
];
const News = () => (
  <Box px={[4, 16]} mb={["3rem", "5rem"]}>
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3 }}
      spacingX={5}
      spacingY={10}
      mt="2rem"
    >
      {items.map((item, index) => (
        <GridItem
          key={index}
          colSpan={1}
          borderRadius="10px"
          boxShadow="0px 20px 25px rgba(212, 212, 212, 0.35);"
          bg="white"
        >
          <Box>
            <Image
              src={item.src}
              alt={item.tittle}
              borderRadius="10px 10px 0 0"
            />
          </Box>
          <VStack align="start" px={4} pt="1.3rem" pb="5">
            <Text
              fontWeight="500"
              fontSize="1.1rem"
              color="brand.200"
              
            >
              {item.tittle}
            </Text>
            <Text fontWeight="400" fontSize="14px" color="brand.200" mt={3}>
              {item.text}
            </Text>
            <Button
              fontSize="12px"
              variant="ghost"
              color="brand.100"
              fontWeight="light"
              _hover={{
                color: "red.300",
              }}
              px="0"
            >
              Continue Reading
            </Button>
          </VStack>
        </GridItem>
      ))}
    </SimpleGrid>
  </Box>
);
export default News;