import {
  Box,
  Flex,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { BsArrowRight } from 'react-icons/bs';

const Thoughts = () => {
  const thoughts = [
    {
      heading: '5 Importance of Sktech in Design',
      textContent:
        'You know how often we try to save up for a purpose, to meet a target or just a general “putting aside some money” for miscellaneous expenses.',
    },

    {
      heading: '5 Importance of Sktech in Design',
      textContent:
        'You know how often we try to save up for a purpose, to meet a target or just a general “putting aside some money” for miscellaneous expenses.',
    },

    {
      heading: '5 Importance of Sktech in Design',
      textContent:
        'You know how often we try to save up for a purpose, to meet a target or just a general “putting aside some money” for miscellaneous expenses.',
    },
  ];
  return (
    <Box my="3rem" w="90%" mr="auto" ml="auto">
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
          Our thought
        </Heading>
      </Flex>
      <SimpleGrid
        columns={2}
        spacing={5}
        mt="2rem"
        sx={{
          '@media(min-width: 700px)': {
            gridTemplateColumns: 'repeat(3, 1fr)',
          },
        }}
      >
        {thoughts.map((item, index) => (
          <GridItem
            key={index}
            colSpan={1}
            h="full"
            borderRadius="10px"
            boxShadow="0px 20px 25px rgba(212, 212, 212, 0.35);"
            bg="white"
            display={index === 2 ? 'none' : ''}
            sx={{
              '@media(min-width: 700px)': {
                fontSize: '1rem',
                display: index === 2 ? 'block' : '',
              },
            }}
          >
            <Box
              w="100%"
              h="100px"
              sx={{
                '@media(min-width: 700px)': {
                  height: '200px',
                },
              }}
            >
              <Image
                src="/Rectangle1.png"
                alt="course1"
                borderRadius="10px 10px 0 0"
                w="100%"
                h="100%"
              />
            </Box>
            <Box padding="10px">
              <Text
                fontWeight="500"
                fontSize="16px"
                color="brand.200"
                lineHeight={1.2}
                sx={{
                  '@media(min-width: 700px)': {
                    fontSize: '1.5rem',
                  },
                }}
              >
                {item.heading}
              </Text>
              <Text
                fontWeight="400"
                fontSize="10px"
                color="brand.200"
                mt={3}
                sx={{
                  '@media(min-width: 700px)': {
                    fontSize: '0.8rem',
                  },
                }}
              >
                {item.textContent}
              </Text>
              <Flex justify="flex-end" mt="1.4rem">
                <BsArrowRight />
              </Flex>
            </Box>
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
};
export default Thoughts;
