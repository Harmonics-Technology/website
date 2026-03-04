import { Flex, Text, SimpleGrid, Button, Center } from '@chakra-ui/react';
import BlogCard from 'lib/components/sections/BlogCard';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { UserContext } from 'lib/components/Utils/MainContext';
import { Key, useContext } from 'react';
import { PostModel, PostView } from '../../../../client';
import Pagination from 'lib/components/Utils/Pagination';
import WelcomePost from './WelcomePost';

function MyBlog({ data }: { data: any }) {

  const result = data?.value;
  const length = result?.length;
  const router = useRouter();

  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <Flex
        position="sticky"
        top="0"
        px={['1rem', 16]}
        h="5rem"
        zIndex={4}
        alignItems="center"
        justifyContent="space-between"
        shadow="lg"
        bgColor="white"
      >
        <Text
          color="brand.100"
          textTransform="capitalize"
          fontSize="1.1rem"
          fontWeight="bold"
        >
          {user?.firstName}
        </Text>
        <Button
          cursor="pointer"
          color="white"
          w={['auto', '4rem']}
          minWidth={['auto', '10rem']}
          height="2.5rem"
          _hover={{ color: 'white', bgColor: 'black' }}
          fontSize=".9rem"
          bgColor="brand.100"
          variant="solid"
          onClick={() => router.push('/blogs/create-post/')}
        >
          Create Post
        </Button>
      </Flex>

      <WelcomePost />

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacingX={5}
        spacingY={10}
        mt="3rem"
        pb="4rem"
        px={['1rem', 16]}
      >
        {/* {result?.map((item: PostView) => (
          <BlogCard key={item.title} item={item} />
        ))} */}
        
      </SimpleGrid>
      {/* <Center my="2rem">
          <Pagination data={data} />
        </Center> */}
    </>
  );
}

export default MyBlog;
