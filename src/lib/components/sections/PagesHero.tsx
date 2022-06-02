import { Box, Text } from '@chakra-ui/react';

interface PagesProps {
  title: string;
  subtitle: string;
}

function PagesHero({ title, subtitle }: PagesProps) {
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
        {title}
      </Text>
      <Text color="white" fontSize={['13px', '18px']} w={['full', '80%']}>
        {subtitle}
      </Text>
    </Box>
  );
}

export default PagesHero;
