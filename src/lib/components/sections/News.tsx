import {
  Box,
  Button,
  GridItem,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { PostView } from '../../../../client';
import parse from 'html-react-parser';

const News = ({ data }: any) => {
  const listPost = data?.value;
  console.log({ listPost });

  const router = useRouter();
  return (
    <Box px={[4, 16]} mb={['3rem', '5rem']}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacingX={10}
        spacingY={10}
        mt="2rem"
      >
        {listPost?.slice(1).map((item: PostView) => (
          <GridItem
            key={item?.id}
            colSpan={1}
            borderRadius="10px"
            boxShadow="-10px -10px 25px 5px rgba(0, 0, 0, 0.15);"
            bg="white"
            overflow="hidden"
            p="1rem 1rem 3rem"
            position="relative"
          >
            <Box h="200px" w="full" overflow="hidden">
              <Image
                src={item?.thumbnail as string}
                alt={item?.title as string}
                h="full"
                objectFit="cover"
                borderRadius="10px 10px 0 0"
              />
            </Box>
            <VStack align="start" px={4} pt="1.3rem" pb="5">
              <Text
                fontWeight="600"
                fontSize="1.1rem"
                color="brand.200"
                textTransform="capitalize"
              >
                {item?.title}
              </Text>
              <Text
                fontWeight="400"
                fontSize="14px"
                color="brand.200"
                mt={3}
                noOfLines={8}
              >
                {parse(item?.content as string)}
              </Text>
              <Button
                fontSize="12px"
                variant="ghost"
                color="brand.100"
                fontWeight="bold"
                position="absolute"
                pb="2rem"
                bottom="0"
                _hover={{
                  color: 'red.300',
                }}
                px="0"
                onClick={() => {
                  router.push(`/blog/${item?.id}`);
                }}
              >
                Continue Reading
              </Button>
            </VStack>
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
};
export default News;
