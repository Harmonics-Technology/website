import { Box, Button, Circle, Image, Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// const responsive = {
//   superLargeDesktop: {
//     breakpoint: { max: 4000, min: 3000 },
//     items: 1,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 1,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 1,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };

const Testimonials = () => {
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    autoplay: true,
  // asNavFor: '.slider-nav',
    nextArrow: <BsChevronRight color="white" />,
    prevArrow: <BsChevronLeft color="white" />,
  };

  return (
    <Box bgColor="brand.100" h="780px" w="full" px={16} py={10}>
      <Text color="white" fontSize="2.5rem" fontWeight="700" textAlign="center">
        Here is what our Clients are saying About us
      </Text>
      <Box w="70%" mx="auto" mt="2rem">
        <Slider {...settings}>
          <Box
            w="60% !important"
            h="350px"
            px="1rem"
            bgColor="white"
            mx="auto"
            borderRadius="12px"
            display="flex !important"
            flexDirection="column"
            justifyContent="center"
          >
            <Text fontWeight="bold" fontSize="22px" textAlign="center" mb={4}>
              It was a very good experience
            </Text>
            <Text fontSize="1rem" textAlign="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
              magna eget nibh in turpis. Consequat duis diam lacus arcu.
              Faucibus venenatis felis id augue sit cursus pellentesque enim
              arcu. Elementum felis magna{' '}
            </Text>
          </Box>
          <Box
            w="60% !important"
            h="350px"
            px="1rem"
            bgColor="white"
            mx="auto"
            borderRadius="12px"
            display="flex !important"
            flexDirection="column"
            justifyContent="center"
          >
            <Text fontWeight="bold" fontSize="22px" textAlign="center" mb={4}>
              It was a very good experience
            </Text>
            <Text fontSize="1rem" textAlign="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
              magna eget nibh in turpis. Consequat duis diam lacus arcu.
              Faucibus venenatis felis id augue sit cursus pellentesque enim
              arcu. Elementum felis magna{' '}
            </Text>
          </Box>
          <Box
            w="60% !important"
            h="350px"
            px="1rem"
            bgColor="white"
            mx="auto"
            borderRadius="12px"
            display="flex !important"
            flexDirection="column"
            justifyContent="center"
          >
            <Text fontWeight="bold" fontSize="22px" textAlign="center" mb={4}>
              It was a very good experience
            </Text>
            <Text fontSize="1rem" textAlign="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
              magna eget nibh in turpis. Consequat duis diam lacus arcu.
              Faucibus venenatis felis id augue sit cursus pellentesque enim
              arcu. Elementum felis magna{' '}
            </Text>
          </Box>
          <Box
            w="60% !important"
            h="350px"
            px="1rem"
            bgColor="white"
            mx="auto"
            borderRadius="12px"
            display="flex !important"
            flexDirection="column"
            justifyContent="center"
          >
            <Text fontWeight="bold" fontSize="22px" textAlign="center" mb={4}>
              It was a very good experience
            </Text>
            <Text fontSize="1rem" textAlign="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
              magna eget nibh in turpis. Consequat duis diam lacus arcu.
              Faucibus venenatis felis id augue sit cursus pellentesque enim
              arcu. Elementum felis magna{' '}
            </Text>
          </Box>
          <Box
            w="60% !important"
            h="350px"
            px="1rem"
            bgColor="white"
            mx="auto"
            borderRadius="12px"
            display="flex !important"
            flexDirection="column"
            justifyContent="center"
          >
            <Text fontWeight="bold" fontSize="22px" textAlign="center" mb={4}>
              It was a very good experience
            </Text>
            <Text fontSize="1rem" textAlign="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
              magna eget nibh in turpis. Consequat duis diam lacus arcu.
              Faucibus venenatis felis id augue sit cursus pellentesque enim
              arcu. Elementum felis magna{' '}
            </Text>
          </Box>
          <Box
            w="60% !important"
            h="350px"
            px="1rem"
            bgColor="white"
            mx="auto"
            borderRadius="12px"
            display="flex !important"
            flexDirection="column"
            justifyContent="center"
          >
            <Text fontWeight="bold" fontSize="22px" textAlign="center" mb={4}>
              It was a very good experience
            </Text>
            <Text fontSize="1rem" textAlign="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
              magna eget nibh in turpis. Consequat duis diam lacus arcu.
              Faucibus venenatis felis id augue sit cursus pellentesque enim
              arcu. Elementum felis magna{' '}
            </Text>
          </Box>
        </Slider>
      </Box>
    </Box>
  );
};
export default Testimonials;
