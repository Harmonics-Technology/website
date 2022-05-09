import {
  Box,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';

const Services = () => (
  <Box px={16} my="8rem">
    <Flex justify="space-between" w="full" align="center">
      <Heading fontSize="2.5rem" fontFamily="brSemi" color="brand.200">
        What we do
      </Heading>
    </Flex>
    <SimpleGrid columns={3} spacing={5} height="320px" mt="2rem">
      <GridItem
        colSpan={1}
        h="full"
        borderRadius="10px"
        bg="rgba(160, 60, 174, 0.08)"
        px="1rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <Text fontSize="2rem" fontWeight="bold" color="brand.100">
            Product Design
          </Text>
          <Text fontSize="1rem" fontWeight="regular" mt="1rem">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu,{' '}
          </Text>
        </Box>
      </GridItem>
      <GridItem
        colSpan={1}
        h="full"
        borderRadius="10px"
        bg="rgba(255, 0, 0, 0.08)"
        px="1rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <Text fontSize="2rem" fontWeight="bold" color="brand.100">
            Product Design
          </Text>
          <Text fontSize="1rem" fontWeight="regular" mt="1rem">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu,{' '}
          </Text>
        </Box>
      </GridItem>
      <GridItem
        colSpan={1}
        h="full"
        borderRadius="10px"
        bg="rgba(0, 137, 47, 0.08)"
        px="1rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <Text fontSize="2rem" fontWeight="bold" color="brand.100">
            Product Design
          </Text>
          <Text fontSize="1rem" fontWeight="regular" mt="1rem">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu,{' '}
          </Text>
        </Box>
      </GridItem>
    </SimpleGrid>
  </Box>
);
export default Services;
