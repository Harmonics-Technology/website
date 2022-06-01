/* eslint-disable prettier/prettier */
/* eslint-disable no-lone-blocks */
import {
  Box,
  Heading,
  VStack,
  Text,
  Flex,
  Button,
  Image,
} from '@chakra-ui/react';

const About = () => (
  <Box w="90%" margin="6rem auto 0px">
    <Flex
      width="full"
      align="center"
      position="relative"
      border="2px hidden red"
      direction="column"
      sx={{
        '@media(min-width: 700px)': {
          flexDirection: 'row',
        },
      }}
    >
      <VStack
        alignItems="flex-start"
        width="full"
        mb="90px"
        sx={{
          '@media(min-width: 700px)': {
            marginBottom: 0,
          },
        }}
      >
        <Box
          w="full"
          borderRadius="10px"
          border="2px hidden green"
          sx={{
            '@media(min-width: 700px)': {
              width: '90%',
            },
          }}
        >
          <Box
            w="80%"
            height="300px"
            bg="brand.grey"
            bgColor="brand.100"
            borderRadius="10px"
            ml="auto"
            pos="relative"
            sx={{
              '@media(min-width: 500px)': {
                marginRight: 'auto',
                width: '60%',
              },

              '@media(min-width: 700px)': {
                marginRight: 0,
                width: '90%',
                height: '350px',
              },
            }}
          >
            <Image
              src="/image 3.png"
              alt="Placeholder"
              objectFit="cover"
              height="full"
              w="100%"
              borderRadius="10px"
              pos="absolute"
              left="-4.2rem"
              top="2.5rem"
              sx={{
                '@media(min-width: 700px)': {
                  left: '-3rem',
                },
              }}
            />
          </Box>
        </Box>
      </VStack>

      <Box
        width="100%"
        height="full"
        border="2px hidden blue"
        sx={{
          '@media(min-width: 700px)': {},
        }}
      >
        <Heading
          fontSize="24px"
          fontFamily="brSemi"
          color="brand.200"
          sx={{
            '@media(min-width: 700px)': {
              fontSize: '2rem',
            },
          }}
          lineHeight={1.5}
          mb="10px"
        >
          Who are we?
        </Heading>
        <Text
          fontSize="1rem"
          fontWeight="regular"
          w="95%"
          mb="20px"
          sx={{
            '@media(min-width: 700px)': {
              fontSize: '1.265rem',
            },
          }}
          lineHeight={1.5}
        >
         We are a brand that is powered by an ingenious team committed to creating world-class products that reflect your ideas. Our goal is to provide organizations with services that add value to their businesses and solve problems thereby allowing the space for financial growth.

<br/>As a team, we are attentive & empathetic to our client’s needs & wants and we strive to create unique design solutions that are user-centred for their various businesses.

<br/>At harmonic technologies, we believe in continuity, so we provide courses in uiux, software development(frontend & Backend ), Graphics. to help build your career in tech.
        </Text>
        <Button variant="outline">Learn More</Button>
      </Box>
    </Flex>
  </Box>
);

export default About;

{
  /* <Box mb="20px" mt="20px" w="100%">
  <Box
    border="2px solid green"
    w="80%"
    h="300px"
    margin="80px 0 20px"
    pos="relative"
    sx={{
      '::before': {
        content: '""',
        width: '100%',
        backroundColor: 'red',
        position: 'absolute',
        zIndex: -1,
        top: '-50px',
        left: '50px',
        borderRadius: '10px',
      },
    }}
  >
    <Image
      src="/image 3.png"
      alt="image3"
      w="100%"
      h="100%"
      borderRadius="10px"
      sx={{
        objectFit: 'cover',
      }}
    />
  </Box>
</Box>; */
}
