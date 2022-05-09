import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';

const Hero = () => (
  <Flex justify="space-between" px={16} align="center">
    <VStack w="full" align="left" pr={10}>
      <Box width="97%">
        <Heading color="brand.200" fontSize="52px" fontFamily="brEbold" mb={3}>
          We create
          <Text color="brand.100" display="inline">
            &nbsp; world-class products
          </Text>
        </Heading>
        <Text color="brand.200" fontSize="18px">
          The Harmonic Dev agency specializes in software development and
          design. Our team designs and builds mobile apps and websites to help
          you make your dreams come true.
        </Text>
      </Box>
      <HStack justify="space-between" mt="2.5rem !important">
        {/* <Input placeholder="Enter your email address" height="55px" /> */}
        <Button variant="solid">Chat with us</Button>
      </HStack>
    </VStack>
    <VStack w="full">
      <Box h="690px" w="full" borderRadius="0px 0px 0px 150px;">
        <Image
          src="/Rectangle 2.png"
          h="full"
          w="full"
          objectFit="cover"
          alt="landing"
          borderRadius="0px 0px 0px 150px;"
          objectPosition="top"
        />
      </Box>
    </VStack>
  </Flex>
);
export default Hero;
