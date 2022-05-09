import {
  Box,
  Flex,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { BsArrowRight } from 'react-icons/bs';

const Thoughts = () => (
  <Box px={16} my="8rem">
    <Flex justify="space-between" w="full" align="center">
      <Heading fontSize="2.5rem" fontFamily="brSemi" color="brand.200">
        Courses
      </Heading>
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
            fontSize="1.1rem"
            color="brand.200"
            lineHeight={1.2}
          >
            5 Importance of Sktech in Design
          </Text>
          <Text fontWeight="400" fontSize=".9rem" color="brand.200" mt={3}>
            You know how often we try to save up for a purpose, to meet a target
            or just a general “putting aside some money” for miscellaneous
            expenses.
          </Text>
          <Flex justify="flex-end" mt="1.4rem">
            <BsArrowRight />
          </Flex>
        </Box>
      </GridItem>
    </SimpleGrid>
  </Box>
);
export default Thoughts;
