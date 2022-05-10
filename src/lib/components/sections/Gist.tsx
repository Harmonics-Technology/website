import {
  Box,
  Heading,
  Stack,
  VStack,
  Button,
  Image,
  Text,
} from '@chakra-ui/react';

const Gist = () => (
  <Box px={[4, 16]} my={{ base: '3rem', xl: '5rem' }}>
    <Heading
      fontSize={{ base: '1.5rem', md: '2rem', xl: '2.5rem' }}
      color="brand.200"
    >
      Latest Gist
    </Heading>
    <Stack
      align="center"
      spacing={[5, 10]}
      direction={['column', 'row']}
      mt={[5, 10]}
    >
      <VStack w={{ base: 'full', md: '60%', lg: '45%' }} spacing="10">
        <Heading
          fontSize={{ base: '1.5rem', md: '2rem', xl: '2.5rem' }}
          color="brand.200"
        >
          Digital tools make a big difference
        </Heading>
        <Text fontSize=".9rem" fontWeight="regular" w="95%">
          Digitalization is a key enabler behind the transformation known as
          Industry 4.0, as increased connectivity and cloud-based solutions help
          reduce costs, enhance productivity and manage variability in
          industries across the world. <br />
          <br />
          Digital solutions should simplify the working environment for all of
          us. Sandvik develops solutions that support digital manufacturing, all
          the way from planning and design to in-machining and machining
          analysis.
        </Text>
        <Button
          fontSize=".9rem"
          variant="ghost"
          color="brand.100"
          alignSelf="flex-end"
          mt="0 !important"
        >
          Read More
        </Button>
      </VStack>
      <Box w={{ base: 'full', md: '40%', lg: '55%' }}>
        <Image src="image 11.png" alt="work" />
      </Box>
    </Stack>
  </Box>
);

export default Gist;
