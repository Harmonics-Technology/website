import {
  Box,
  Button,
  GridItem,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';

const items = [
  {
    src: 'img7.jpg',
    tittle: 'My Tech Journey: How I Started My Career In Product Design',
    text: 'Life Before Starting a Career in Tech I am a graduate of Business Administration, from Tai Solarin University of Education. I graduated in 2015, after 7 months of staying at home and teaching, I was deployed to Arokho, Owan East in Edo state to serve my father’s land, as a teacher, in a private school.',
  },
];
const News = () => (
  <Box px={[4, 16]} mb={['3rem', '5rem']}>
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
            <Text fontWeight="500" fontSize="1.1rem" color="brand.200">
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
                color: 'red.300',
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
