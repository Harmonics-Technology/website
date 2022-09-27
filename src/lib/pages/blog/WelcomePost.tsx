import React from 'react'
import {Box, Text, Button, Icon } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import {RiBallPenLine} from 'react-icons/ri'

const WelcomePost = () => {
     const router = useRouter();
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        w="full"
        h={["100%","100vh"]}
        p='2rem'
        justifyContent="center"
      >
        <Icon boxSize={['3rem','4rem']} as={RiBallPenLine}/>
        <Text fontWeight='700' fontSize={['1.3rem', '2.5rem']} color="">
          Welcome to Harmonics Blog
        </Text>
        <Text>
          You currently do not have any blog post. Get started by creating a
          blog post.
        </Text>
        <Button
          color="#fff"
          w="30%"
          bg="#A03CAE"
          mt='1rem'
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
}

export default WelcomePost