import { Box, Text } from '@chakra-ui/react';

const Testimonials = () => (
  <Box bgColor="brand.100" h="780px" w="full" px={['1rem', 16]} py={10}>
    <Text
      color="white"
      fontSize={['1rem', '2.5rem']}
      fontWeight="700"
      textAlign="center"
    >
      Here is what our Clients are saying About us
    </Text>
    <Box w={['full', '70%']} mx="auto" mt="2rem">
      {/* <Sliders /> */}
    </Box>
  </Box>
);
export default Testimonials;
