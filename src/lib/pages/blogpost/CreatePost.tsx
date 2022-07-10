import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import { Widget } from '@uploadcare/react-widget';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/router';

type Props = {};

const CreatePost = (props: Props) => {
  const schema = yup.object().shape({
    title: yup.string().required(),
    articleBody: yup.string().required(),
    // articleImage: yup.string().required(),
  });

  const widgetapi = useRef<any>();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const onsubmit = (data: any) => {
    try {
      console.log({ data });
      router.push('/my-post');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box w="100%">
      <Box w="90%" margin="auto" pb="30px" pt={['5px', '30px']}>
        <form onSubmit={handleSubmit(onsubmit)}>
          <Flex w="100%" my="20px" justifyContent={['', 'flex-end']}>
            <Button
              textTransform="capitalize"
              w={['100%', 'unset']}
              _hover={{
                bg: 'transparent',
                color: 'brand.100',
                border: '2px solid #A03CAE',
              }}
              type="submit"
              _focus={{
                outline: 'none',
              }}
            >
              publish
            </Button>
          </Flex>

          <VStack alignItems="flex-start" w="100%" spacing={5}>
            <FormControl w="100%">
              <Input
                placeholder="Title"
                type="text"
                variant="outline"
                // borderColor=" #E6E4E4"
                borderColor={errors?.title ? 'red' : '#E6E4E4'}
                h="3rem"
                backgroundColor="transparent"
                _focus={{
                  outline: 'none',
                }}
                {...register('title')}
              />
            </FormControl>

            <FormControl w="100%">
              <Textarea
                resize="none"
                minH="50vh"
                _focus={{
                  outline: 'none',
                }}
                {...register('articleBody')}
                borderColor={errors?.articleBody && 'red'}
              />
            </FormControl>

            <Box>
              <Button
                variant="outline"
                textTransform="capitalize"
                type="button"
                onClick={() => widgetapi.current.openDialog()}
              >
                add image
              </Button>

              <Widget
                publicKey="fda3a71102659f95625f"
                imagesOnly
                ref={widgetapi}
              />
            </Box>
          </VStack>
        </form>
      </Box>
    </Box>
  );
};

export default CreatePost;
