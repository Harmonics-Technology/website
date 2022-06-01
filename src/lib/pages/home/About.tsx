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
            We are a brand that is powered by an ingenious team committed to creating world-class products that reflect your ideas.
             Our goal is to provide organizations with services that add value to their businesses and solve problems thereby allowing the space for financial growth.<br/>
As a team, we are attentive & empathetic to our client’s needs & wants and we strive to create unique design solutions that are user-centred for their various businesses.<br/>
At harmonic technologies, we believe in continuity, so we provide courses in uiux, software development(frontend & Backend ), Graphics. to help build your career in tech.
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
