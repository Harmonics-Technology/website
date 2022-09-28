import React from 'react';
import { Box, Text, Button, Icon, Circle } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { RiBallPenLine } from 'react-icons/ri';

const WelcomePost = () => {
  const router = useRouter();
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        w="full"
        h={['100%', '70vh']}
        p="2rem"
        justifyContent="center"
      >
        <Circle bgColor="brand.100" color="white" padding="2rem">
          <Icon boxSize={['3rem', '4rem']} as={RiBallPenLine} />
        </Circle>
        <Text
          fontWeight="700"
          fontSize={['1.3rem', '2.5rem']}
          color=""
          mt="1rem"
          fontFamily="brEbold"
        >
          Welcome to Harmonics Blog
        </Text>
        <Text w="30%" textAlign="center" mb="1rem">
          You currently do not have any blog post. You can get started by
          creating a blog post.
        </Text>
        <Button
          color="#fff"
          w="30%"
          bg="#A03CAE"
          mt="1rem"
          borderRadius="8px"
          border="none"
          type="submit"
          onClick={() => router.push('/blogs/create-post/')}
          _hover={{
            color: '#A03CAE',
            bg: '#fff',
            border: '1px solid #A03CAE',
          }}
        >
          Get Started
        </Button>
      </Box>
    </>
  );
};

export default WelcomePost;
