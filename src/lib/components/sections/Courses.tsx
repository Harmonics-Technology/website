/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable arrow-body-style */
/* eslint-disable prettier/prettier */
import {
  Box,
  Flex,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';

const Courses = () => {
  const courses = [
    {
      src: '/Rectangle1.png',
      courseTitle: 'Beginner guild to Software Development',
      author: 'Folashade Olugbogi',
    },

    {
      src: '/Rectangle1.png',
      courseTitle: 'Beginner guild to Software Development',
      author: 'Folashade Olugbogi',
    },

    {
      src: '/Rectangle1.png',
      courseTitle: 'Beginner guild to Software Development',
      author: 'Folashade Olugbogi',
    },

    {
      src: '/Rectangle1.png',
      courseTitle: 'Beginner guild to Software Development',
      author: 'Folashade Olugbogi',
    },
  ];
  return (
    <Box my="8rem">
      <Box w="90%" margin="auto">
        <Flex justify="space-between" w="full" align="center">
          <Heading
            fontSize="24px"
            fontFamily="brSemi"
            color="brand.200"
            sx={{
              '@media(min-width: 700px)': {
                fontSize: '2rem',
              },
            }}
          >
            Courses
          </Heading>
          <Text
            fontSize="20px"
            fontWeight="medium"
            sx={{
              '@media(min-width: 700px)': {
                fontSize: '1rem',
              },
            }}
          >
            View All Courses
          </Text>
        </Flex>
        <SimpleGrid
          columns={2}
          spacing={4}
          mt="2rem"
          sx={{
            '@media(min-width: 700px)': {
              gridTemplateColumns: 'repeat(3,1fr)',
            },
          }}
        >
          {courses.map((item, index) => {
            return (
              <GridItem
                key={index}
                colSpan={1}
                w="100%"
                borderRadius="10px"
                boxShadow="0px 20px 25px rgba(212, 212, 212, 0.35);"
                bg="white"
                sx={{
                  '@media(min-width: 700px)': {
                    fontSize: '1rem',
                    display: index === 3 ? 'none' : '',
                  },
                }}
              >
                <Box
                  pos="relative"
                  w="100%"
                  h="100px"
                  sx={{
                    '@media(min-width: 700px)': {
                      height: '200px',
                      '::before': {
                        width: '5rem',
                        height: '5rem',
                      },
                    },
                  }}
                  _before={{
                    content: '""',
                    width: '3rem',
                    height: '3rem',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%,-50%)',
                    zIndex: '3',
                    backgroundImage: 'url(Play.png)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    cursor: 'pointer',
                  }}
                >
                  <Image
                    src={item.src}
                    alt="course1"
                    borderRadius="10px 10px 0 0"
                    w="100%"
                    h="100%"
                    objectFit="cover"
                  />
                </Box>
                <Box padding="10px 10px 20px" w="100%" margin="auto">
                  <Text
                    fontWeight="500"
                    fontSize="16px"
                    color="brand.200"
                    lineHeight={1.5}
                    sx={{
                      '@media(min-width: 700px)': {
                        fontSize: '24px',
                      },
                    }}
                    w="100%"
                  >
                    {item.courseTitle}
                  </Text>
                  <Text
                    fontWeight="500"
                    fontSize="14px"
                    color="brand.400"
                    mt={3}
                    sx={{
                      '@media(min-width: 700px)': {
                        fontSize: '18px',
                      },
                    }}
                  >
                    {item.author}
                  </Text>
                </Box>
              </GridItem>
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};
export default Courses;
