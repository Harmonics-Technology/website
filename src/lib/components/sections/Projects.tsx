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
  <Box w="100%" mt="40px">
    <Box w="90%" margin="0px auto 20px">
      <Flex justify="space-between" w="full" align="center" mb="20px">
        <Heading
          fontSize="24px"
          fontFamily="brSemi"
          color="brand.200"
          sx={{
            '@media(min-width: 700px)': {
              fontSize: '2rem',
            },
          }}
          lineHeight={1.5}
        >
          Past Projects
        </Heading>
      </Flex>

      <Flex
        width="full"
        height="fit-content"
        my="2rem"
        align="center"
        position="relative"
        direction="column-reverse"
        sx={{
          '@media(min-width: 700px)': {
            flexDirection: 'row',
          },
        }}
      >
        <VStack alignItems="flex-start" height="full" width="full">
          <Box w="full" height="fit-content" borderRadius="10px">
            <Box
              w="full"
              height="305px"
              bg="brand.grey"
              bgColor="brand.100"
              sx={{
                '@media(min-width: 700px)': {
                  height: '400px',
                },
              }}
            >
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
        <Box
          width="full"
          height="full"
          mb="25px"
          sx={{
            '@media(min-width: 700px)': {
              paddingLeft: '1.5rem',
            },
          }}
        >
          <Box>
            <Heading fontSize="2.5rem" fontFamily="brRegular" color="brand.200">
              Project Name
            </Heading>
            <Text fontSize=".9rem" fontWeight="regular" w="95%" my="2rem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
              magna eget nibh in turpis. Consequat duis diam lacus arcu.
              Faucibus venenatis felis id augue sit cursus pellentesque enim
              arcu. Elementum felis magna
            </Text>
            <Button variant="outline">Read More</Button>
          </Box>
        </Box>
      </Flex>
      <Flex
        width="full"
        height="fit-content"
        my="2rem"
        align="center"
        position="relative"
        direction="column"
        sx={{
          '@media(min-width: 700px)': {
            flexDirection: 'row',
          },
        }}
      >
        <VStack alignItems="flex-start" spacing="10" width="full" height="full">
          <Box
            mb="25px"
            sx={{
              '@media(min-width: 700px)': {
                paddingRight: '1.5rem',
              },
            }}
          >
            <Heading fontSize="2.5rem" fontFamily="brRegular" color="brand.200">
              Project Name
            </Heading>
            <Text fontSize=".9rem" fontWeight="regular" w="95%" my="2rem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
              magna eget nibh in turpis. Consequat duis diam lacus arcu.
              Faucibus venenatis felis id augue sit cursus pellentesque enim
              arcu. Elementum felis magna
            </Text>
            <Button variant="outline">Read More</Button>
          </Box>
        </VStack>
        <VStack alignItems="flex-start" height="full" width="full">
          <Box w="full" height="fit-content" borderRadius="10px">
            <Box
              w="full"
              height="305px"
              bg="brand.grey"
              bgColor="brand.100"
              sx={{
                '@media(min-width: 700px)': {
                  height: '400px',
                },
              }}
            >
              <Image
                src="/Rectangle45.png"
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
  </Box>
);

export default Projects;
