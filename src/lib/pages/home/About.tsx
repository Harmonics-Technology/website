/* eslint-disable import/no-unresolved */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import {
  Box,
  Button,
  Flex,
  Grid,
  Text,
  Heading,
  Link,
  Image,
} from '@chakra-ui/react';
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
      <PagesHero
        title="About Harmonic Technologies"
        subtitle=" We are a brand that is powered by an ingenious team committed to
        empowering businesses and individuals through technology and innovation
        that reflect your ideas."
      />

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
              borderRadius="5px"
              overflow="hidden"
              sx={{
                '@media(min-width: 800px)': {
                  width: '305px',
                  height: '350px',
                  borderRadius: '10px',
                },
              }}
              mb="20px"
            >
              <Image src="img1.jpg" w="100%" h="100%" objectFit="cover" />
            </Box>
            <Box
              w="100%"
              h="331px"
              bg="brand.700"
              borderRadius="5px"
              overflow="hidden"
              mt="40px"
              sx={{
                '@media(min-width: 800px)': {
                  width: '305px',
                  height: '350px',
                  borderRadius: '10px',
                },
              }}
              mb="20px"
            >
              <Image src="img2.jpg" w="100%" h="100%" objectFit="cover" />
            </Box>
            <Box
              w="100%"
              h="331px"
              bg="brand.700"
              borderRadius="5px"
              overflow="hidden"
              sx={{
                '@media(min-width: 800px)': {
                  width: '305px',
                  height: '350px',
                  borderRadius: '10px',
                },
              }}
              mb="20px"
            >
              <Image src="img6.jpg" w="100%" h="100%" objectFit="cover" />
            </Box>
            <Box
              w="100%"
              h="331px"
              bg="brand.700"
              borderRadius="5px"
              overflow="hidden"
              mt="40px"
              sx={{
                '@media(min-width: 800px)': {
                  width: '305px',
                  height: '350px',
                  borderRadius: '10px',
                },
              }}
              mb="20px"
            >
              <Image src="img5.jpg" w="100%" h="100%" objectFit="cover" />
            </Box>
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
              Harmonics Technologies is an online education platform aimed at
              educating and inspiring designers and developers around the world.
              As an innovative product market, we offer a wealth of advanced
              e-learning solutions to help product enthusiasts and businesses
              grow. <br /> <br /> We are committed to growing the community in
              the technology industry by providing practical user-centric design
              and product knowledge to increase creativity and passion.
            </Text>

            <Heading
              fontSize="24px"
              textAlign={['center', 'left']}
              lineHeight={1.5}
              mb="10px"
              mt="40px"
            >
              Our Mission
            </Heading>

            <Text fontSize={['16px', '18px']} lineHeight={1.5}>
              To provide the best resources and opportunities for individuals
              and businesses to improve their skills and create reliable
              products through advanced technology for the future.
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

      <Box mt="2.5rem"></Box>

      <MeetourPeople />
    </Box>
  );
}

export default About;
