import {
  Box,
  Heading,
  VStack,
  Text,
  Flex,
  Button,
  Image,
} from '@chakra-ui/react';

const Projects = () => (
  <Box px={16}>
    <Flex justify="space-between" w="full" align="center">
      <Heading fontSize="2.5rem" fontFamily="brSemi" color="brand.200">
        Past Projects
      </Heading>
    </Flex>
    <Flex
      width="full"
      height="fit-content"
      my="2rem"
      align="center"
      position="relative"
    >
      <VStack alignItems="flex-start" height="full" width="full">
        <Box w="full" height="fit-content" borderRadius="10px">
          <Box w="full" height="500px" bg="brand.grey" bgColor="brand.100">
            <Image
              src="/FI-1-03 1.png"
              alt="Placeholder"
              objectFit="cover"
              height="full"
              w="full"
            />
          </Box>
        </Box>
      </VStack>
      <VStack alignItems="flex-start" spacing="10" width="full" height="full">
        <Box ml="7rem">
          <Heading fontSize="2.5rem" fontFamily="brRegular" color="brand.200">
            Project Name
          </Heading>
          <Text fontSize=".9rem" fontWeight="regular" w="95%" my="2rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
            mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget
            nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis
            felis id augue sit cursus pellentesque enim arcu. Elementum felis
            magna
          </Text>
          <Button variant="outline">Read More</Button>
        </Box>
      </VStack>
    </Flex>
    <Flex
      width="full"
      height="fit-content"
      my="2rem"
      align="center"
      position="relative"
    >
      <VStack alignItems="flex-start" spacing="10" width="full" height="full">
        <Box mr="7rem">
          <Heading fontSize="2.5rem" fontFamily="brRegular" color="brand.200">
            Project Name
          </Heading>
          <Text fontSize=".9rem" fontWeight="regular" w="95%" my="2rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
            mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget
            nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis
            felis id augue sit cursus pellentesque enim arcu. Elementum felis
            magna
          </Text>
          <Button variant="outline">Read More</Button>
        </Box>
      </VStack>
      <VStack alignItems="flex-start" height="full" width="full">
        <Box w="full" height="fit-content" borderRadius="10px">
          <Box w="full" height="500px" bg="brand.grey" bgColor="brand.100">
            <Image
              src="/Rectangle 45.png"
              alt="Placeholder"
              objectFit="cover"
              height="full"
              w="full"
            />
          </Box>
        </Box>
      </VStack>
    </Flex>
  </Box>
);

export default Projects;
