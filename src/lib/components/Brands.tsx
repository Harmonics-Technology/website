import { useState } from 'react';
import { Box, Heading, Image } from '@chakra-ui/react';
import BrandSliders from './sections/BrandSlider';

const Brands = () => {
  const [images, setImages] = useState<string[]>([
    '/brands/liquede.png',
    '/brands/flypal.png',
    '/Frame2.svg',
    '/Frame3.svg',
    '/Frame4.svg',
  ]);

  return (
    <Box w="100%" mt="40px" mb="50px">
      <Box w="100%">
        <Heading
          w="95%"
          margin="auto"
          fontFamily="brSemi"
          sx={{
            '::first-letter': {
              textTransform: 'uppercase',
            },
            '@media(min-width: 800px)': {
              fontSize: '45px',
              width: '90%',
            },
          }}
          lineHeight={1.5}
          fontSize="24px"
          textAlign={['center', 'left']}
        >
          some notable brands we have worked with
        </Heading>
        <Box
          w="100%"
          boxShadow="0px 20px 25px rgba(212, 212, 212, 0.35)"
          sx={{
            '@media(min-width: 800px)': {
              width: '100%',
              margin: 'auto',
            },
          }}
        >
          <Box
            w="90%"
            // overflow="hidden"
            py="2rem"
            display="block"
            placeContent="center"
            h="8rem"
            mx="auto"
          >
            <BrandSliders
              item={images.map((image, index) => (
                <Box w="9rem" h="50px" key={index}>
                  <Image
                    display="inline-block"
                    src={image}
                    alt="logipsum"
                    // objectFit="cover"
                    w="100%"
                    h="100%"
                    mr="10px"
                    cursor="pointer"
                    filter="grayscale(100%)"
                    _hover={{ filter: 'grayscale(0%)' }}
                  />
                </Box>
              ))}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Brands;
