import { Box, Text } from '@chakra-ui/react';

function PagesHero() {
  return (
    <Box
      w="full"
      h={['260px', '400px']}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      backgroundColor="rgba(4, 12, 33, 0.7)"
      backgroundImage="/heros.png"
      backgroundBlendMode="overlay"
      backgroundSize="cover"
      px={['1rem', 16]}
    >
      <Text
        color="white"
        fontSize={['1.2rem', '52px']}
        fontFamily="brEbold"
        mb={3}
        w={['full', '80%']}
      >
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
      </Text>
      <Text color="white" fontSize={['13px', '18px']} w={['full', '80%']}>
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem
        cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.
      </Text>
    </Box>
  );
}

export default PagesHero;
