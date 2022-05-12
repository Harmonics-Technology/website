/* eslint-disable prettier/prettier */
import Image from 'next/image';
import {
  Box,
  Heading,
  Text,
  Stack,
Button,
} from '@chakra-ui/react';
  
  const Work = () => (

    
      <Box w='90%'  h='40rem'  bg='#f8c8ff' boxShadow='2xl'  rounded='md'  p='6' overflow='hidden'>
        <Box h='20rem' bg='#c4c4c4' mt='-6' mx='-6' mb='6' pos='relative'>
          <Image
            src="/ourWork.svg"
            layout='fill'
          />
        </Box>
        <Stack>
          <Heading color='#343434' fontWeight='400' fontSize={['1.1em','2.2em']}>Project Name</Heading>
          <Text fontWeight="400" fontSize={['.7rem','1.2rem']} color="brand.200" my={['1.1rem !important','2.5rem !important']}>
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.
            </Text>
            <Button bgColor='brand.800' color='#fff'  w={['100%', '50%']}>Read More</Button>
        </Stack>
      </Box>

    
    
  );
  export default Work;
  