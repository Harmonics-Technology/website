import {
  Box,
  Button,
  VStack,
  Text,
  Image,
  SimpleGrid,
  useDisclosure,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { PostView } from '../../../../client';
import parse from 'html-react-parser';
import DeletePost from './DeletePost';

const BlogCard = ({ item }: { item: PostView }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const router = useRouter();
  console.log(item);
  return (
    <>
      <Box shadow="lg" h="30rem" pos="relative">
        <Box>
          {item?.thumbnail !== null && item?.thumbnail !== 'string' ? (
            <Image
              src={item?.thumbnail as string}
              h="11rem"
              objectFit="cover"
              w="100%"
              alt={item?.title as string}
              borderRadius="10px 10px 0 0"
            />
          ) : (
            <Image
              src="/default.png"
              h="11rem"
              objectFit="cover"
              w="100%"
              alt={item?.title as string}
              borderRadius="10px 10px 0 0"
            />
          )}
        </Box>
        <VStack align="start" px={4} pt="1.3rem" pb="5">
          <Text
            fontWeight="900"
            fontSize={['1rem', '1.1rem']}
            color="brand.200"
            textTransform="capitalize"
          >
            {item.title}
          </Text>
          <Box>
            <Text
              fontWeight="400"
              fontSize={['13px', '14px']}
              color="brand.200"
              mt={3}
              noOfLines={6}
            >
              {parse(item?.content as unknown as string)}
            </Text>
          </Box>
          <SimpleGrid
            columns={2}
            py=".5rem"
            spacing="5"
            w="full"
            pos="absolute"
            bottom="5"
            left="0"
          >
            <Button
              fontSize="12px"
              variant="outline"
              color="brand.100"
              height="3rem"
              minWidth="unset"
              ml="5"
              fontWeight="light"
              _hover={{
                bgColor: 'brand.100',
                color: 'white',
              }}
              onClick={() => router.push(`/blogs/edit/${item?.title}`)}
            >
              Edit
            </Button>
            <Button
              fontSize="12px"
              variant="outline"
              color="brand.600"
              minWidth="unset"
              fontWeight="light"
              height="3rem"
              mr="5"
              borderColor="brand.600"
              _hover={{
                bgColor: 'brand.600',
                color: 'white',
              }}
              onClick={onOpen}
            >
              Delete
            </Button>
          </SimpleGrid>
        </VStack>
      </Box>
      <DeletePost onClose={onClose} isOpen={isOpen} />
    </>
  );
};

export default BlogCard;
