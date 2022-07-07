import { Flex, Text, SimpleGrid, Button } from '@chakra-ui/react';
import BlogCard from 'lib/components/sections/BlogCard';
import { useRouter } from 'next/router';

const data = [
  {
    id: 1,
    title: 'The Differences between UI design and UX design',
    src: 'news3.png',
    desc: 'Life Before Starting a Career in Tech I am a graduate of Business Administration, from Tai Solarin University of Education. I graduated in 2015, after 7 months of staying at home and teaching, I was deployed to Arokho, Owan East in Edo state to serve my father land, as a teacher, in a private school.',
  },
  {
    id: 2,
    title: 'The Differences between UI design and UX design',
    src: 'news3.png',
    desc: 'Life Before Starting a Career in Tech I am a graduate of Business Administration, from Tai Solarin University of Education. I graduated in 2015, after 7 months of staying at home and teaching, I was deployed to Arokho, Owan East in Edo state to serve my father land, as a teacher, in a private school.',
  },
  {
    id: 3,
    title: 'The Differences between UI design and UX design',
    src: 'news3.png',
    desc: 'Life Before Starting a Career in Tech I am a graduate of Business Administration, from Tai Solarin University of Education. I graduated in 2015, after 7 months of staying at home and teaching, I was deployed to Arokho, Owan East in Edo state to serve my father land, as a teacher, in a private school.',
  },
];

function MyBlog() {
  const router = useRouter();
  return (
    <>
      <Flex
        position="sticky"
        top="0"
        px={['1rem', 16]}
        h="5rem"
        zIndex={20}
        alignItems="center"
        justifyContent="space-between"
        bgColor="brand.100"
      >
        <Text color="white" fontSize="1.1rem">
          Hi Anukam
        </Text>
        <Button
          cursor="pointer"
          color="black"
          w={['3rem','4rem']}
          height="2.5rem"
          _hover={{ color: 'white', bgColor: 'black' }}
          fontSize=".9rem"
          bgColor="white"
          variant="solid"
          onClick={() => router.push('/')}
        >
          Create Post
        </Button>
      </Flex>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacingX={5}
        spacingY={10}
        mt="3rem"
        pb="4rem"
        px={['1rem', 16]}
      >
        {data.map((item) => (
          <BlogCard key={item.id} item={item} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default MyBlog;
