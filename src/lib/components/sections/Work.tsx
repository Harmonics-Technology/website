/* eslint-disable prettier/prettier */
import Image from 'next/image';
import {
  Box,
  Center,
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
          <Heading color='#343434' fontWeight='400' fontSize='2.2em'>Project Name</Heading>
          <Text fontWeight="400" fontSize="1.2rem" color="brand.200" my='2.5rem !important'>
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.
            </Text>
            <Button bgColor='brand.500' color='#fff'  w={['100%', '50%']}>Read More</Button>
        </Stack>
      </Box>

    
    // <Box px={16}  height={["689px", "294px"]} width={['630px', '184px']}  my="8rem">
     
    //   <SimpleGrid  spacing={5} mt="2rem">
    //     <GridItem
    //       colSpan={3}
    //       height={["689px", "294px"]}  width={['630px', '184px']}
    //       borderRadius="5px"
    //       boxShadow="0px 20px 25px rgba(212, 212, 212, 0.35);"
    //       bg="white"
    //     >
    //       <Box
    //         pos="relative"
    //         height={['334px', '126px']}
    //         width={['630px', '184px']}
    //         bg='#c4c4c4'
    //       >
    //        <Center> 
    //         <Image
    //           src="/ourWork.svg"
    //           alt="work"
    //           layout='fill'
    //           borderRadius="5px 5px 0 0"
    //         />
    //         </Center>
    //       </Box>
    //       <Box px={4}  w={['630px', '184px']} pt="1.5rem" bg={'pink'}>
    //         <Text fontWeight="400" fontSize=".9rem" color="brand.200" mt={3}>
    //           You know how often we try to save up for a purpose, to meet a target
    //           or just a general “putting aside some money” for miscellaneous
    //           expenses.
    //         </Text>
    //       </Box>
    //     </GridItem>
    //   </SimpleGrid>
    // </Box>
  );
  export default Work;
  