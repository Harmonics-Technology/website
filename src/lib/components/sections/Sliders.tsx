import { Box, Circle, Image, Text } from '@chakra-ui/react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
      autoPlay={false}
      infinite
    >
      <Box>
        <Box
          as="div"
          w={['90%', '60% !important']}
          h="350px"
          px="1rem"
          bgColor="white"
          mx="auto"
          borderRadius="12px"
          display="flex !important"
          flexDirection="column"
          justifyContent="center"
        >
          <Text
            fontWeight="bold"
            fontSize={['1rem', '22px']}
            textAlign="center"
            mb={4}
          >
            It was a very good experience
          </Text>
          <Text fontSize={['.9rem', '1rem']} textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
            mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget
            nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis
            felis id augue sit cursus pellentesque enim arcu. Elementum felis
            magna{' '}
          </Text>
        </Box>
        <Circle bgColor="red" size="8rem" mx="auto">
          <Image src="" />
        </Circle>
      </Box>
      <Box
        as="div"
        w={['90%', '60% !important']}
        h="350px"
        px="1rem"
        bgColor="white"
        mx="auto"
        borderRadius="12px"
        display="flex !important"
        flexDirection="column"
        justifyContent="center"
      >
        <Text
          fontWeight="bold"
          fontSize={['1rem', '22px']}
          textAlign="center"
          mb={4}
        >
          It was a very good experience
        </Text>
        <Text fontSize={['.9rem', '1rem']} textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
          mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget
          nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis
          felis id augue sit cursus pellentesque enim arcu. Elementum felis
          magna{' '}
        </Text>
      </Box>
      <Box
        as="div"
        w={['90%', '60% !important']}
        h="350px"
        px="1rem"
        bgColor="white"
        mx="auto"
        borderRadius="12px"
        display="flex !important"
        flexDirection="column"
        justifyContent="center"
      >
        <Text
          fontWeight="bold"
          fontSize={['1rem', '22px']}
          textAlign="center"
          mb={4}
        >
          It was a very good experience
        </Text>
        <Text fontSize={['.9rem', '1rem']} textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
          mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget
          nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis
          felis id augue sit cursus pellentesque enim arcu. Elementum felis
          magna{' '}
        </Text>
      </Box>
      <Box
        as="div"
        w={['90%', '60% !important']}
        h="350px"
        px="1rem"
        bgColor="white"
        mx="auto"
        borderRadius="12px"
        display="flex !important"
        flexDirection="column"
        justifyContent="center"
      >
        <Text
          fontWeight="bold"
          fontSize={['1rem', '22px']}
          textAlign="center"
          mb={4}
        >
          It was a very good experience
        </Text>
        <Text fontSize={['.9rem', '1rem']} textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
          mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget
          nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis
          felis id augue sit cursus pellentesque enim arcu. Elementum felis
          magna{' '}
        </Text>
      </Box>
    </Carousel>
  );
}

export default Sliders;
