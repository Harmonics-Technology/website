/* eslint-disable prettier/prettier */
import {
  Box,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';

const Services = () => (
  <Box
    w="95%"
    margin="20px auto"
    sx={{
      '@media(min-width: 800px)': {
        width: '90%',
      },
    }}
  >
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
        bg="rgba(160, 60, 174, 0.08)"
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
            Product Design
          </Text>
          <Text
            fontSize="1rem"
            fontWeight="regular"
            mt="1rem"
            lineHeight={1.5}
            pb="5px"
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu,{' '}
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
            Product Design
          </Text>
          <Text
            fontSize="1rem"
            fontWeight="regular"
            mt="1rem"
            lineHeight={1.5}
            pb="5px"
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu,{' '}
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
            Product Design
          </Text>
          <Text
            fontSize="1rem"
            fontWeight="regular"
            mt="1rem"
            lineHeight={1.5}
            pb="5px"
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu,{' '}
          </Text>
        </Box>
      </GridItem>
    </SimpleGrid>
  </Box>
);
export default Services;
