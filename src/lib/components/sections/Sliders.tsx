import { Box, Circle, Flex, Image, Text, VStack } from '@chakra-ui/react';
import { BsStar, BsStarFill } from 'react-icons/bs';
import { HiBadgeCheck } from 'react-icons/hi';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReactRating from 'react-rating';

// var ReactRating = require('react-rating');

function Sliders() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      showDots={false}
      arrows
      removeArrowOnDeviceType={['tablet', 'mobile']}
      autoPlay
      autoPlaySpeed={6000}
      infinite
    >
      <Box>
        <Box
          as="div"
          w={['90%', '60% !important']}
          h="auto"
          px="1rem"
          py="2rem"
          bgColor="white"
          mx="auto"
          borderRadius="12px"
          display="flex !important"
          flexDirection="column"
          justifyContent="center"
        >
          <Flex align="center" mb="1rem">
            <Circle bgColor="red" size="5rem" overflow="hidden">
              <Image src="/heros.png" h="full" w="full" objectFit="cover" />
            </Circle>
            <VStack spacing={1} align="flex-start" ml="1rem">
              <Box>
                <Flex align="center">
                  <Text fontSize="1.2rem" fontWeight="bold" pr=".2rem">
                    Mr Abiodun
                  </Text>
                  <HiBadgeCheck color="#1da1f2" />
                </Flex>
                <Text
                  fontSize=".6rem"
                  fontWeight="bold"
                  textTransform="uppercase"
                  mt="-5px"
                >
                  (CTO Liquede)
                </Text>
              </Box>
              {/* <ReactRating
                fractions={2}
                initialRating={4.5}
                readonly
                fullSymbol={<BsStarFill color="A03CAE" size="1.5rem" />}
                emptySymbol={<BsStar color="A03CAE" size="1.5rem" />}
              /> */}
            </VStack>
          </Flex>
          <Text
            fontWeight="bold"
            fontSize={['1rem', '22px']}
            textAlign="center"
            mb={2}
          >
            It was a very good experience
          </Text>
          <Text fontSize={['.9rem', '1rem']} textAlign="center">
            “Over the years I have had to struggle with growth in my business
            but with the help of Harmonics Technology, my business has been able
            to grow. During the design period, they carried me along with all
            their progress so far by conducting weekly meetings where they
            provide me with updates on my design and we deliberate more on
            achieving my goal.”{' '}
          </Text>
          <Text
            textAlign="center"
            fontWeight="600"
            mt="2rem"
            textDecoration="underline dotted"
          >
            Verified User
          </Text>
        </Box>
      </Box>
      <Box>
        <Box
          as="div"
          w={['90%', '60% !important']}
          h="auto"
          px="1rem"
          py="2rem"
          bgColor="white"
          mx="auto"
          borderRadius="12px"
          display="flex !important"
          flexDirection="column"
          justifyContent="center"
        >
          <Flex align="center" mb="1rem">
            <Circle bgColor="red" size="5rem" overflow="hidden">
              <Image src="/laptop.png" h="full" w="full" objectFit="cover" />
            </Circle>
            <VStack spacing={1} align="flex-start" ml="1rem">
              <Box>
                <Flex align="center">
                  <Text fontSize="1.2rem" fontWeight="bold" pr=".2rem">
                    Gboyega
                  </Text>
                  <HiBadgeCheck color="#1da1f2" />
                </Flex>
                <Text
                  fontSize=".6rem"
                  fontWeight="bold"
                  textTransform="uppercase"
                  mt="-5px"
                >
                  (COO PropertyMattaz)
                </Text>
              </Box>
              {/* <ReactRating
                fractions={2}
                initialRating={4.5}
                readonly
                fullSymbol={<BsStarFill color="A03CAE" size="1.5rem" />}
                emptySymbol={<BsStar color="A03CAE" size="1.5rem" />}
              /> */}
            </VStack>
          </Flex>
          <Text
            fontWeight="bold"
            fontSize={['1rem', '22px']}
            textAlign="center"
            mb={2}
          >
            The best team
          </Text>
          <Text fontSize={['.9rem', '1rem']} textAlign="center">
            “Over the years I have had to struggle with growth in my business
            but with the help of Harmonics Technology, my business has been able
            to grow. During the design period, they carried me along with all
            their progress so far by conducting weekly meetings where they
            provide me with updates on my design and we deliberate more on
            achieving my goal.”{' '}
          </Text>
          <Text
            textAlign="center"
            fontWeight="600"
            mt="2rem"
            textDecoration="underline dotted"
          >
            Verified User
          </Text>
        </Box>
      </Box>
      <Box>
        <Box
          as="div"
          w={['90%', '60% !important']}
          h="auto"
          px="1rem"
          py="2rem"
          bgColor="white"
          mx="auto"
          borderRadius="12px"
          display="flex !important"
          flexDirection="column"
          justifyContent="center"
        >
          <Flex align="center" mb="1rem">
            <Circle bgColor="red" size="5rem" overflow="hidden">
              <Image src="/heros.png" h="full" w="full" objectFit="cover" />
            </Circle>
            <VStack spacing={1} align="flex-start" ml="1rem">
              <Box>
                <Flex align="center">
                  <Text fontSize="1.2rem" fontWeight="bold" pr=".2rem">
                    Mr Abiodun
                  </Text>
                  <HiBadgeCheck color="#1da1f2" />
                </Flex>
                <Text
                  fontSize=".6rem"
                  fontWeight="bold"
                  textTransform="uppercase"
                  mt="-5px"
                >
                  (CTO Liquede)
                </Text>
              </Box>
              {/* <ReactRating
                fractions={2}
                initialRating={4.5}
                readonly
                fullSymbol={<BsStarFill color="A03CAE" size="1.5rem" />}
                emptySymbol={<BsStar color="A03CAE" size="1.5rem" />}
              /> */}
            </VStack>
          </Flex>
          <Text
            fontWeight="bold"
            fontSize={['1rem', '22px']}
            textAlign="center"
            mb={2}
          >
            It was a very good experience
          </Text>
          <Text fontSize={['.9rem', '1rem']} textAlign="center">
            “Over the years I have had to struggle with growth in my business
            but with the help of Harmonics Technology, my business has been able
            to grow. During the design period, they carried me along with all
            their progress so far by conducting weekly meetings where they
            provide me with updates on my design and we deliberate more on
            achieving my goal.”{' '}
          </Text>
          <Text
            textAlign="center"
            fontWeight="600"
            mt="2rem"
            textDecoration="underline dotted"
          >
            Verified User
          </Text>
        </Box>
      </Box>
      <Box>
        <Box
          as="div"
          w={['90%', '60% !important']}
          h="auto"
          px="1rem"
          py="2rem"
          bgColor="white"
          mx="auto"
          borderRadius="12px"
          display="flex !important"
          flexDirection="column"
          justifyContent="center"
        >
          <Flex align="center" mb="1rem">
            <Circle bgColor="red" size="5rem" overflow="hidden">
              <Image src="/heros.png" h="full" w="full" objectFit="cover" />
            </Circle>
            <VStack spacing={1} align="flex-start" ml="1rem">
              <Box>
                <Flex align="center">
                  <Text fontSize="1.2rem" fontWeight="bold" pr=".2rem">
                    Mr Abiodun
                  </Text>
                  <HiBadgeCheck color="#1da1f2" />
                </Flex>
                <Text
                  fontSize=".6rem"
                  fontWeight="bold"
                  textTransform="uppercase"
                  mt="-5px"
                >
                  (CTO Liquede)
                </Text>
              </Box>
              {/* <ReactRating
                fractions={2}
                initialRating={4.5}
                readonly
                fullSymbol={<BsStarFill color="A03CAE" size="1.5rem" />}
                emptySymbol={<BsStar color="A03CAE" size="1.5rem" />}
              /> */}
            </VStack>
          </Flex>
          <Text
            fontWeight="bold"
            fontSize={['1rem', '22px']}
            textAlign="center"
            mb={2}
          >
            It was a very good experience
          </Text>
          <Text fontSize={['.9rem', '1rem']} textAlign="center">
            “Over the years I have had to struggle with growth in my business
            but with the help of Harmonics Technology, my business has been able
            to grow. During the design period, they carried me along with all
            their progress so far by conducting weekly meetings where they
            provide me with updates on my design and we deliberate more on
            achieving my goal.”{' '}
          </Text>
          <Text
            textAlign="center"
            fontWeight="600"
            mt="2rem"
            textDecoration="underline dotted"
          >
            Verified User
          </Text>
        </Box>
      </Box>
    </Carousel>
  );
}

export default Sliders;
