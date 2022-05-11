/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { Box, Flex, Heading, Image } from '@chakra-ui/react';

const Brands = () => {
  const [images, setImages] = useState<string[]>([
    '/Frame1.svg',
    '/Frame.svg',
    '/Frame2.svg',
    '/Frame3.svg',
    '/Frame4.svg',
  ]);

  return (
    <Box
      w="100%"
      mt="40px"
      mb="50px"
      boxShadow="0 20px 10px -9px rgba(0, 0, 0, 0.18)"
      pb="20px"
    >
      <Box w="100%">
        <Heading
          w="95%"
          margin="auto"
          sx={{
            '::first-letter': {
              textTransform: 'uppercase',
            },
            '@media(min-width: 800px)': {
              fontSize: '48px',
              width: '90%',
            },
          }}
          lineHeight={1.5}
          fontSize="24px"
        >
          notable brands we have worked with
        </Heading>
        <Box
          w="100%"
          sx={{
            '@media(min-width: 800px)': {
              width: '90%',
              margin: 'auto',
            },
          }}
        >
          <Flex
            w="100%"
            overflow="hidden"
            justifyContent="space-between"
            align="center"
            mt="20px"
          >
            {images.map((image, index) => {
              return (
                <Image
                  key={index}
                  src={image}
                  alt="logipsum"
                  w="154px"
                  h="27px"
                  objectFit="cover"
                  mr="10px"
                />
              );
            })}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Brands;
