import {
  Box,
  Image,
  Heading,
  HStack,
  Text,
  Avatar,
  VStack,
  Button,
  Stack,
} from '@chakra-ui/react';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import {
  AiOutlineUser,
  AiOutlineCalendar,
  AiOutlineComment,
  AiOutlineFieldTime,
} from 'react-icons/ai';
import { PrimaryInput } from '../../components/Utils/PrimaryInput';
import { PrimaryTextArea } from 'lib/components/Utils/PrimaryTextArea';
import { PostView } from '../../../../client';
import parse from 'html-react-parser';
import { BiCategory } from 'react-icons/bi';

interface FormInputProps {
  fullName: string;
  comment: string;
}

const schema = yup.object().shape({
  fullName: yup.string().email().required(),
  comment: yup.string().required(),
});

const Mypost = ({ data }: { data: PostView }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormInputProps>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const router = useRouter();
  const readingTime = require('reading-time');
  const stats = readingTime(data.content);

  const onSubmit = (data: FormInputProps) => {};
  return (
    <Box bg="#333333" pt={['.1rem', '3rem']}>
      <Box
        w={['full', '90%']}
        mx="auto"
        p={['1rem 1rem', '3rem']}
        bgColor="white"
      >
        <Box pb="40px">
          <Heading fontSize={['1.8rem', '3rem']} textTransform="capitalize">
            {data?.title}
          </Heading>
          <HStack
            columnGap={6}
            spacing={0}
            mt=".5rem"
            fontSize={['.8rem', '.9rem']}
            flexWrap="wrap"
          >
            <HStack fontSize=".9rem" align="center" color="gray.500">
              <AiOutlineUser />
              <Text>{data?.createdBy?.fullName}</Text>
            </HStack>
            <HStack fontSize=".9rem" align="center" color="gray.500">
              <AiOutlineCalendar />
              <Text>18th June 2022 </Text>
            </HStack>
            <HStack fontSize=".9rem" align="center" color="gray.500">
              <AiOutlineComment />
              <Text>0 Comments</Text>
            </HStack>
            <HStack fontSize=".9rem" align="center" color="gray.500">
              <BiCategory />
              <Text>{data?.categoryName}</Text>
            </HStack>
            <HStack fontSize=".9rem" align="center" color="gray.500">
              <AiOutlineFieldTime />
              <Text>{stats.minutes} min read</Text>
            </HStack>
          </HStack>

          <Box w="full" h={['300px', '500px']} my="3rem" overflow="hidden">
            <Image
              src={data?.thumbnail as string}
              alt="placeholder"
              w="full"
              h="full"
              objectFit="cover"
            />
          </Box>

          <Text w="full" mx="auto" fontSize={['1rem', '1.2rem']}>
            {parse(data?.content as string)}
          </Text>

          <Stack
            align="flex-start"
            columnGap={8}
            direction={['column', 'row']}
            mt="2rem"
          >
            <Box w="full">
              <Text fontSize="1.5rem" fontWeight="500" mt="2rem" mb="1rem">
                Comments
              </Text>
              <VStack w="full">
                <Box w="full" bgColor="gray.100" p="1rem">
                  <HStack>
                    <Avatar />
                    <Box>
                      <Text>Innocent Kenneth</Text>
                      <Text fontSize=".8rem" color="gray.400">
                        12th June 2022
                      </Text>
                    </Box>
                  </HStack>
                  <Text mt=".5rem">Nice read. Congratulations</Text>
                </Box>
                <Box w="full" bgColor="gray.100" p="1rem">
                  <HStack>
                    <Avatar />
                    <Box>
                      <Text>Aderibigbe John</Text>
                      <Text fontSize=".8rem" color="gray.400">
                        7th June 2022
                      </Text>
                    </Box>
                  </HStack>
                  <Text mt=".5rem">Fantastic post</Text>
                </Box>
              </VStack>
            </Box>
            <Box w="full">
              <Text fontSize="1.5rem" fontWeight="500" mt="2rem" mb="1rem">
                Post a comment
              </Text>
              <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
                <VStack w="full" spacing={4}>
                  <PrimaryInput<FormInputProps>
                    name="fullName"
                    error={errors.fullName}
                    defaultValue=""
                    register={register}
                    label="Full name"
                    placeholder="Full name"
                  />
                  <PrimaryTextArea<FormInputProps>
                    name="comment"
                    error={errors.comment}
                    defaultValue=""
                    register={register}
                    minH="150px"
                    label="Comment"
                    placeholder="Your comment"
                  />
                  <Button
                    color="#fff"
                    w="100%"
                    bg="#A03CAE"
                    borderRadius="8px"
                    border="none"
                    type="submit"
                    _hover={{
                      color: '#A03CAE',
                      bg: '#fff',
                      border: '1px solid #A03CAE',
                    }}
                  >
                    Post Comment
                  </Button>
                </VStack>
              </form>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Mypost;
