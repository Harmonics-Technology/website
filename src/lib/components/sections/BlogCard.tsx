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
import DeletePost from './DeletePost';

type Props = {
  item: any;
};

const BlogCard = ({ item }: Props) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const router = useRouter();
  return (
    <>
      <Box shadow="lg">
        <Box>
          {item.src ? (
            <Image
              src={item.src}
              h="11rem"
              objectFit="cover"
              w="full"
              alt={item.title}
              borderRadius="10px 10px 0 0"
            />
          ) : (
            <Image
              src="default.png"
              h="11rem"
              objectFit="cover"
              w="full"
              alt={item.title}
              borderRadius="10px 10px 0 0"
            />
          )}
        </Box>
        <VStack align="start" px={4} pt="1.3rem" pb="5">
          <Text
            fontWeight="900"
            fontSize={['1rem', '1.1rem']}
            color="brand.200"
          >
            {item.title}
          </Text>
          <Text fontWeight="400" fontSize={['13px','14px']} color="brand.200" mt={3}>
            {item.desc}
          </Text>
          <SimpleGrid columns={2} py=".5rem" spacing="5" w="full">
            <Button
              fontSize="12px"
              variant="outline"
              color="brand.100"
              height="3rem"
              minWidth="unset"
              fontWeight="light"
              _hover={{
                bgColor: 'brand.100',
                color: 'white',
              }}
              onClick={() => router.push(`/blog/edit/${item.id}`)}
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
