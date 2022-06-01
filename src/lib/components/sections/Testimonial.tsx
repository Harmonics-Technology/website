import { Box, Text } from '@chakra-ui/react';
import Sliders from './Sliders';

const Testimonials = () => (
  <Box
    bgColor="brand.100"
    h="auto"
    w="full"
    px={['1rem', 16]}
    pt="2rem"
    pb="4rem"
  >
    <Text
      color="white"
      fontSize={['1rem', '2.5rem']}
      fontWeight="700"
      textAlign="center"
    >
      Here is what our Clients are saying About us
    </Text>
    <Box w={['full', '70%']} mx="auto" mt="2rem">
      <Sliders />
    </Box>
  </Box>
);
export default Testimonials;
