import {
  Box,
  Heading,
  VStack,
  Text,
  Flex,
  Button,
  Image,
} from '@chakra-ui/react';

const About = () => (
  <Flex
    width="full"
    height="fit-content"
    px={16}
    my="6rem"
    align="center"
    position="relative"
  >
    <VStack alignItems="flex-start" height="full" width="full">
      <Box w="full" height="fit-content" borderRadius="10px">
        <Box
          w="460px"
          height="500px"
          bg="brand.grey"
          bgColor="brand.100"
          borderRadius="10px"
          ml="auto"
          mr="3rem"
          pos="relative"
        >
          <Image
            src="/image 3.png"
            alt="Placeholder"
            objectFit="cover"
            height="full"
            w="full"
            borderRadius="10px"
            pos="absolute"
            left="-6.3rem"
            top="4rem"
          />
        </Box>
      </Box>
    </VStack>
    <VStack alignItems="flex-start" spacing="10" width="full" height="full">
      <Heading fontSize="2.5rem" fontFamily="brSemi" color="brand.200">
        Who are we?
      </Heading>
      <Text fontSize=".9rem" fontWeight="regular" w="95%">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, <br />
        <br />
        pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
        fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus
        ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
        mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
        semper nisi. Aenean vulputate eleifend tellus.
      </Text>
      <Button variant="outline">Learn More</Button>
    </VStack>
  </Flex>
);

export default About;
