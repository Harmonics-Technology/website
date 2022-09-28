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
import { PostView } from '../../../../client';
import parse from 'html-react-parser';

const Gist = ({ data }: any) => {
  const singleGist: PostView = data?.value[0];
  return (
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
        <VStack
          w={{ base: 'full', md: '60%', lg: '45%' }}
          spacing={[5, 10]}
          align="flex-start"
        >
          <Heading
            fontSize={{ base: '1.1rem', md: '1.5rem', xl: '1.8rem' }}
            color="brand.200"
            textTransform="capitalize"
          >
            {singleGist?.title}
          </Heading>
          <Text fontSize=".9rem" fontWeight="regular" w="95%" noOfLines={10}>
            {parse(singleGist?.content as string)}
          </Text>
          <Link passHref href={`/blog/${singleGist.id}`}>
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
        <Box
          w={{ base: 'full', md: '40%', lg: '55%' }}
          overflow="hidden"
          h="500px"
        >
          <Image
            src={singleGist.thumbnail as string}
            alt="work"
            w="full"
            objectFit="cover"
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default Gist;
