import React from 'react'
import {Box, Text, Button} from '@chakra-ui/react'

const WelcomePost = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        w="full"
        h="100%"
        p='2rem'
        justifyContent="center"
      >
        <Text fontWeight='500' fontSize={['1.3rem', '1.5rem']} color="">
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