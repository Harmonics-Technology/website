import { Box, Text, Heading } from '@chakra-ui/react';

const AboutusHeader = () => (
  <Box
    w="100%"
    h="17.6875rem"
    border="2px hidden green"
    sx={{
      backgroundImage: "url('/about-bg2.svg')",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',

      '@media(min-width: 800px)': {
        height: '500px',
      },
    }}
  >
    <Box
      w="100%"
      h="100%"
      bg="brand.500"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box
        border="2px hidden red"
        w="95%"
        margin="auto"
        sx={{
          '@media(min-width: 800px)': {
            width: '90%',
          },
        }}
      >
        <Heading
          color="brand.600"
          lineHeight={1.5}
          fontSize="1.5rem"
          w="100%"
          sx={{
            '@media(min-width: 800px)': {
              fontSize: '3.5rem',
              width: '90%',
            },
          }}
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
        </Heading>

        <Text
          color="brand.600"
          lineHeight={1.5}
          fontSize="1rem"
          mt="0.625rem"
          sx={{
            '@media(min-width: 800px)': {
              fontSize: '1.25rem',
              width: '90%',
            },
          }}
        >
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.
        </Text>
      </Box>
    </Box>
  </Box>
);

export default AboutusHeader;
