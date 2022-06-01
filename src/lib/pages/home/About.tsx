/* eslint-disable import/no-unresolved */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import { Box, Button, Flex, Grid, Text, Heading, Link } from '@chakra-ui/react';
import Brands from 'lib/components/Brands';
// import AboutusHeader from 'lib/components/sections/AboutusHeader';
import MeetourPeople from 'lib/components/sections/MeetourPeople';
import PagesHero from 'lib/components/sections/PagesHero';
import Services from 'lib/components/sections/Services';
import NextLink from 'next/link';
// import { useRef } from 'react';
// import useRandomJokes from './useRandomJokes';

function About() {
  return (
    <Box w="full" border="2px hidden red">
      <PagesHero />

      <Box w="100%" mt="40px">
        <Grid
          templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
          w="90%"
          margin="auto"
          sx={{
            '@media(min-width: 800px)': {
              width: '90%',
            },
          }}
        >
          <Grid
            templateColumns="repeat(2, 1fr)"
            columnGap={4}
            border="2px hidden yellow"
            w="100%"
          >
            <Box
              w="100%"
              h="331px"
              bg="brand.700"
              borderRadius="5px"
              sx={{
                '@media(min-width: 800px)': {
                  width: '305px',
                  height: '350px',
                  borderRadius: '10px',
                },
              }}
              mb="20px"
            ></Box>
            <Box
              w="100%"
              h="331px"
              bg="brand.700"
              borderRadius="5px"
              mt="40px"
              sx={{
                '@media(min-width: 800px)': {
                  width: '305px',
                  height: '350px',
                  borderRadius: '10px',
                },
              }}
              mb="20px"
            ></Box>
            <Box
              w="100%"
              h="331px"
              bg="brand.700"
              borderRadius="5px"
              sx={{
                '@media(min-width: 800px)': {
                  width: '305px',
                  height: '350px',
                  borderRadius: '10px',
                },
              }}
              mb="20px"
            ></Box>
            <Box
              w="100%"
              h="331px"
              bg="brand.700"
              borderRadius="5px"
              mt="40px"
              sx={{
                '@media(min-width: 800px)': {
                  width: '305px',
                  height: '350px',
                  borderRadius: '10px',
                },
              }}
              mb="20px"
            ></Box>
          </Grid>

          <Box
            w="100%"
            mt="50px"
            sx={{
              '@media(min-width: 800px)': {
                paddingLeft: '20px',
              },
            }}
          >
            <Heading
              fontSize="24px"
              textAlign={['center', 'left']}
              lineHeight={1.5}
              mb="10px"
            >
              Who are we ?
            </Heading>

            <Text fontSize={['16px', '18px']} lineHeight={1.5}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi. Aenean vulputate eleifend tellus. Lorem ipsum dolor
              sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
              dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Donec quam felis,
              ultricies nec, pellentesque eu,
            </Text>
          </Box>
        </Grid>
      </Box>

      <Brands />

      <Services />

      <NextLink href="/contact-us" passHref>
        <Link>
          <Flex
            direction="column"
            w="90%"
            margin="20px auto"
            sx={{
              '@media(min-width: 800px)': {
                width: '90%',
                flexDirection: 'row',
                justifyContent: 'flex-end',
              },
            }}
          >
            <Button
              textTransform="capitalize"
              w="100%"
              outline="none"
              _hover={{
                outline: 'none',
              }}
              _focus={{
                outline: 'none',
              }}
              sx={{
                '@media(min-width: 800px)': {
                  width: '300px',
                },
              }}
            >
              work with us
            </Button>
          </Flex>
        </Link>
      </NextLink>

      <MeetourPeople />
    </Box>
  );
}

export default About;
