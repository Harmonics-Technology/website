import {
  Box,
  Button,
  Flex,
  HStack,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import { Widget } from '@uploadcare/react-widget';
import { PrimaryEditor } from 'lib/components/Utils/PrimaryEditor';
import { PrimaryInput } from '../blog/PrimaryInput';

interface IFormInput {
  title: string;
  articleBody: string;
}

const CreatePost = () => {
  const schema = yup.object().shape({
    title: yup.string().required(),
    articleBody: yup.string().required(),
    // articleImage: yup.string().required(),
  });

  const widgetapi = useRef<any>();

  const router = useRouter();
  const [published, setPublished] = useState<any>();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const onSubmit = (data: IFormInput) => {
    console.log({ data });
    try {
      const result = { status: true, data: { id: 1, name: 'no' } };
      if (result.status) {
        setPublished(result.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box w="100%">
      <Box w="90%" mx="auto" pb="30px">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex w="100%" py="2rem" justifyContent={['', 'flex-end']}>
            <Button
              textTransform="capitalize"
              w={['100%', 'unset']}
              type="submit"
              _hover={{
                bg: 'transparent',
                color: 'brand.100',
                border: '2px solid #A03CAE',
              }}
              _focus={{
                outline: 'none',
              }}
              // isLoading={loading}
            >
              publish
            </Button>
          </Flex>

          {published && (
            <HStack my=".5rem">
              <Text>Post Published Successfully!</Text>
              <Link
                color="brand.100"
                fontWeight="500"
                href={`/blog/${published.id}`}
              >
                View Post
              </Link>
            </HStack>
          )}
          <VStack alignItems="flex-start" w="100%" spacing={5}>
            <PrimaryInput<IFormInput>
              name="title"
              error={errors.title}
              defaultValue=""
              register={register}
              label="title"
              placeholder="Post title"
            />
            <PrimaryEditor<IFormInput>
              name="articleBody"
              control={control}
              label="Description"
              register={register}
              defaultValue=""
              error={errors.articleBody}
            />
            <Box>
              <Button
                variant="outline"
                textTransform="capitalize"
                type="button"
                onClick={() => widgetapi.current.openDialog()}
              >
                add image
              </Button>

              <Box display="none">
                <Widget
                  publicKey="fda3a71102659f95625f"
                  imagesOnly
                  ref={widgetapi}
                />
              </Box>
            </Box>
          </VStack>
        </form>
      </Box>
    </Box>
  );
};

export default CreatePost;
