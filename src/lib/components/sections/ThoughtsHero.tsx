import { Box, Text, Input, Button, Stack } from '@chakra-ui/react';

function ThoughtsHero() {
  return (
    <Box
      w="full"
      h={['260px', '400px']}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      backgroundColor="rgba(4, 12, 33, 0.7)"
      backgroundImage="/thoughthero.png"
      backgroundBlendMode="overlay"
      backgroundSize="cover"
      px={['1rem', 16]}
    >
      <Text
        color="white"
        fontSize={{ base: '1.2rem', md: '44px', lg: '52px' }}
        fontFamily="brEbold"
        mb={3}
      >
        Lorem ipsum dolor sit amet
      </Text>
      <Text
        color="white"
        fontSize={['13px', '18px']}
        w={{ base: 'full', md: '80%', lg: '60%' }}
      >
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem
        cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.
      </Text>
      <Stack
        direction={['column', 'row']}
        w={{ base: 'full', md: '80%', xl: '50%' }}
        spacing={4}
        mt="5"
      >
        <Input
          rounded="5"
          bg="gray.100"
          placeholder="Enter your email address"
          size="lg"
        />

        <Button
          bgColor="brand.100"
          rounded="5"
          color="white"
          height={12}
          px="14"
        >
          Subscribe
        </Button>
      </Stack>
    </Box>
  );
}

export default ThoughtsHero;
