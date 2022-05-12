/* eslint-disable prettier/prettier */
import Image from 'next/image';
<<<<<<< HEAD
import { Box, Heading, Text, Stack, Button } from '@chakra-ui/react';

const Work = ({ bg }: { bg: string }) => (
  <Box
    w="full"
    h={['18rem', '40rem']}
    bg={bg}
    boxShadow={['0', '2xl']}
    rounded={['sm', 'md']}
    overflow="hidden"
  >
    <Box h="50%" bg="#c4c4c4" mt="-6" mx="-6" mb="6" pos="relative">
      <Image src="/ourWork.svg" layout="fill" />
    </Box>
    <Stack px={['1rem', '3rem']} pt={['0', '1rem']}>
      <Heading
        color="#343434"
        fontFamily="brRegular"
        fontSize={['1rem', '2.2em']}
      >
        Project Name
      </Heading>
      <Text
        fontWeight="400"
        fontSize={['.7rem', '1.2rem']}
        color="brand.200"
        my={['.4rem !important', '1.5rem !important']}
        h={['3rem', '7rem']}
        overflow="hidden"
      >
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem
        cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.
      </Text>
      <Button
        bgColor="brand.800"
        variant="solid"
        minWidth={['100%', '50%']}
        width={['100%', '50%']}
        height={['2rem', '58px']}
        fontSize={['.7rem', '1rem']}
        borderRadius={['2px', '6px']}
      >
        Read More
      </Button>
    </Stack>
  </Box>
);
export default Work;
=======
import {
  Box,
  Heading,
  Text,
  Stack,
Button,
} from '@chakra-ui/react';
  
  const Work = (props) => (

    
      <Box w='90%'  h='40rem'  bg={props.color} boxShadow='2xl'  rounded='md'  p='6' overflow='hidden'>
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
            <Button bgColor='brand.800' color='#fff' mb='.75rem'  w={['50%', '50%']}>Read More</Button>
        </Stack>
      </Box>

    
    
  );
  export default Work;
  
>>>>>>> fb3b1acbb40e943caccfd560de4f7ce7455c3481
