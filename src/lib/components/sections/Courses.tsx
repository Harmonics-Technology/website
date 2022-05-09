import {
  Box,
  Flex,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';

const Courses = () => (
  <Box px={16} my="8rem">
    <Flex justify="space-between" w="full" align="center">
      <Heading fontSize="2.5rem" fontFamily="brSemi" color="brand.200">
        Courses
      </Heading>
      <Text fontSize=".9rem" fontWeight="medium">
        View All Courses
      </Text>
    </Flex>
    <SimpleGrid columns={3} spacing={5} height="420px" mt="2rem">
      <GridItem
        colSpan={1}
        h="full"
        borderRadius="10px"
        boxShadow="0px 20px 25px rgba(212, 212, 212, 0.35);"
        bg="white"
      >
        <Box
          pos="relative"
          _before={{
            content: '""',
            width: '5rem',
            height: '5rem',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            zIndex: '3',
            backgroundImage: 'url(Play.png)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <Image
            src="/Rectangle 1.png"
            alt="course1"
            borderRadius="10px 10px 0 0"
          />
        </Box>
        <Box px={4} pt="1.5rem">
          <Text
            fontWeight="500"
            fontSize="2rem"
            color="brand.200"
            lineHeight={1.2}
          >
            Beginner guild to Software Development
          </Text>
          <Text fontWeight="500" fontSize="1rem" color="brand.400" mt={3}>
            Folashade Olugbogi
          </Text>
        </Box>
      </GridItem>
    </SimpleGrid>
  </Box>
);
export default Courses;
