import { Box, Button, FormControl, Input, Text } from '@chakra-ui/react';
import { useRef } from 'react';
import useRandomJokes from './useRandomJokes';

function About() {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const [loading, jokes, fetchJokes] = useRandomJokes();

  const getJokes = () => {
    fetchJokes(
      firstNameRef?.current?.value as string,
      lastNameRef?.current?.value as string
    );
  };

  return (
    <Box mt="8rem" w="50%" mx="auto" mb="5rem">
      <Text fontSize="3rem" textAlign="center" fontFamily="brBold">
        Random Jokes
      </Text>
      <Text textAlign="center">
        Put in your Name and click get jokes to view jokes
      </Text>
      <Box bgColor="brand.200" color="white" px={20} py={10}>
        <Text fontSize="1.5rem" textAlign="center" mb={3}>
          {jokes}
        </Text>

        <FormControl>
          <Input
            placeholder="FirstName"
            bgColor="transparent"
            border="1px solid white !important"
            borderRadius="none"
            mb={4}
            ref={firstNameRef}
          />
          <Input
            placeholder="LastName"
            bgColor="transparent"
            border="1px solid white !important"
            borderRadius="none"
            mb={4}
            ref={lastNameRef}
          />
          <Button
            w="full"
            bgColor="brand.100"
            borderRadius={0}
            onClick={() => getJokes()}
            isLoading={loading}
          >
            Get Jokes
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
}

export default About;
