/* eslint-disable prettier/prettier */
import { Box, GridItem, Heading, SimpleGrid, Text } from '@chakra-ui/react';

const Services = () => (
  <Box w="90%" margin="20px auto">
    <Box w="100%" mt="20px">
      <Heading
        fontSize="1.5rem"
        fontFamily="brSemi"
        lineHeight={1.5}
        color="brand.200"
        sx={{
          '@media(min-width: 800px)': {
            fontSize: '2.5rem',
          },
        }}
        textAlign={['center', 'left']}
      >
        What we do
      </Heading>
    </Box>
    <SimpleGrid columns={[1, 3]} spacing={5} mt="2rem">
      <GridItem
        colSpan={1}
        h="full"
        borderRadius={['5px', '10px']}
        bg="brand.100"
        padding="1.5rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
      >
        <Box>
          <Text
            fontSize={['1.25rem', '2rem']}
            fontWeight="bold"
            // color="brand.100"
          >
            Product Design
          </Text>
          <Text
            fontSize="0.9rem"
            fontWeight="regular"
            mt="1rem"
            lineHeight={1.5}
            pb="5px"
          >
            Our appetite for curiosity has led us to create ideas that are built
            on empathy which has over the years motivated our design thinking to
            produce functional prototypes and usable designs.
          </Text>
        </Box>
      </GridItem>
      <GridItem
        colSpan={1}
        h="full"
        borderRadius={['5px', '10px']}
        bg="rgba(255, 0, 0, 0.08)"
        padding="1.5rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <Text
            fontSize={['1.25rem', '2rem']}
            fontWeight="bold"
            color="brand.100"
          >
            Web Development
          </Text>
          <Text
            fontSize="0.9rem"
            fontWeight="regular"
            mt="1rem"
            lineHeight={1.5}
            pb="5px"
          >
            We are dedicated to guaranteeing modern designs that are usable and
            relatable to our clients by creating and maintaining applications
            that would help their businesses thrive in any weather.
          </Text>
        </Box>
      </GridItem>
      <GridItem
        colSpan={1}
        h="full"
        borderRadius={['5px', '10px']}
        bg="rgba(0, 137, 47, 0.08)"
        padding="1.5rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <Text
            fontSize={['1.25rem', '2rem']}
            fontWeight="bold"
            color="brand.100"
          >
            Graphic Design
          </Text>
          <Text
            fontSize="0.9rem"
            fontWeight="regular"
            mt="1rem"
            lineHeight={1.5}
            pb="5px"
          >
            We create engaging content that consists of projecting visual
            communications intended to transmit specific messages to social
            groups, with specific objectives. We create and recreate brand
            identity that makes your business stand out.
          </Text>
        </Box>
      </GridItem>
    </SimpleGrid>
  </Box>
);
export default Services;
