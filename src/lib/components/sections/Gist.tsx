import {
  Box,
  Heading,
  Stack,
  VStack,
  Button,
  Image,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';

const Gist = () => (
  <Box px={[4, 16]} my={{ base: '3rem', xl: '5rem' }}>
    <Heading
      fontSize={{ base: '1.5rem', md: '2rem', xl: '2.5rem' }}
      color="brand.200"
      textAlign={{ base: 'center', md: 'center', lg: 'left' }}
    >
      Latest Gist
    </Heading>
    <Stack
      align="center"
      spacing={[5, 10]}
      direction={['column', 'row']}
      mt={[3, 10]}
    >
      <VStack w={{ base: 'full', md: '60%', lg: '45%' }} spacing={[5, 10]}>
        <Heading
          fontSize={{ base: '1.1rem', md: '1.5rem', xl: '2.5rem' }}
          color="brand.200"
        >
          The Differences between UI design and UX design
        </Heading>
        <Text fontSize=".9rem" fontWeight="regular" w="95%">
          In this article, you will learn “What is UI?”, “What is UX?”, and the
          Difference between UI and UX design.
          <br /> <br />
          Often times, the term UI and UX Design are being used mutually in the
          industry and outside the design industry. Incase you don’t know, UI
          and UX are two different words but work together. UI means User
          Interface while UX means User Experience. <br /> <br />
          As a product designer when being ask by friends or people outside the
          tech industry what UI and UX Design is, i personally tell them that UI
          refers to how your design (Web, Mobile,…) looks while UX refers to how
          your applications works and how it feels.
        </Text>
        <Link passHref href={`/blog/1`}>
          <Button
            fontSize=".9rem"
            variant="ghost"
            color="brand.100"
            alignSelf="flex-end"
            mt="0 !important"
          >
            Read More
          </Button>
        </Link>
      </VStack>
      <Box w={{ base: 'full', md: '40%', lg: '55%' }}>
        <Image src="img8.jpg" alt="work" />
      </Box>
    </Stack>
  </Box>
);

export default Gist;
