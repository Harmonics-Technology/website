import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Link,
} from '@chakra-ui/react';

const Hero = () => (
  <Flex
    justify="space-between"
    px={['1rem', 16]}
    align="center"
    flexDirection={['column', 'row']}
  >
    <VStack w="full" align="left" pr={['0', 10]}>
      <Box width="97%">
        <Heading
          color="brand.200"
          fontSize={['30px', '52px']}
          fontFamily="brEbold"
          mb={3}
        >
          We create
          <Text color="brand.100" display="inline">
            &nbsp; world-class products
          </Text>
        </Heading>
        <Text color="brand.200" fontSize={['1rem', '18px']}>
          Harmonic Technology specializes in software development (fronted and
          backend), project management and product designs/(uiux). We create
          well-researched user interfaces and build resourceful applications
          that are tailored to suit our client’s specific needs.
        </Text>
      </Box>
      <HStack justify="space-between" mt="2.5rem !important">
        {/* <Input placeholder="Enter your email address" height="55px" /> */}

        <Link
          href="https://wa.me/2348180041801"
          target="_blank"
          textDecoration="none !important"
        >
          <Button variant="solid" w={['full', 'fit-content']} mb="2rem">
            Chat with us
          </Button>
        </Link>
      </HStack>
    </VStack>
    <VStack w="full">
      <Box h={['400px', '690px']} w="full" borderRadius="0px 0px 0px 150px;">
        <Image
          src="/Rectangle2.png"
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
