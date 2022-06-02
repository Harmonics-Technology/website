/* eslint-disable prettier/prettier */

import {
  Box,
  Heading,
  Text,
  Stack,
  Button,
  Link,
  Image,
} from '@chakra-ui/react';

interface WorksProps {
  bg: string;
  img: string;
  title: string;
  content: string;
  link: string;
}

const Work = ({ bg, img, title, content, link }: WorksProps) => (
  <Box
    w="full"
    h={['18rem', '40rem']}
    bg={bg}
    boxShadow={['0', '2xl']}
    rounded={['sm', 'md']}
    overflow="hidden"
  >
    <Box h="50%" bg="#c4c4c4" mt="-6" mx="-6" mb="6" pos="relative">
      <Image src={img} w="100%" h="100%" objectFit="cover" />
    </Box>
    <Stack px={['1rem', '3rem']} pt={['0', '1rem']}>
      <Heading
        color="#343434"
        fontFamily="brRegular"
        fontSize={['1rem', '2.2em']}
      >
        {title}
      </Heading>
      <Text
        fontWeight="400"
        fontSize={['.7rem', '1.2rem']}
        color="brand.200"
        my={['.4rem !important', '1.5rem !important']}
        h={['3rem', '7rem']}
        overflow="hidden"
      >
        {content}
      </Text>
      <Link href={link} target="_blank">
        <Button
          bgColor="brand.800"
          variant="solid"
          minWidth={['100%', '50%']}
          width={['100%', '50%']}
          height={['2rem', '58px']}
          fontSize={['.7rem', '1rem']}
          borderRadius={['2px', '6px']}
        >
          View Website
        </Button>
      </Link>
    </Stack>
  </Box>
);
export default Work;
