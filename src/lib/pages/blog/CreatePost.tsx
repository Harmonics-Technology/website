import {
  Box,
  Button,
  Flex,
  HStack,
  Link,
  Text,
  useToast,
  VStack,
  Image,
  Spinner,
  Stack,
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import { Widget } from '@uploadcare/react-widget';
import { PrimaryEditor } from 'lib/components/Utils/PrimaryEditor';
import { PrimaryInput } from '../../components/Utils/PrimaryInput';
import { SRLWrapper } from 'simple-react-lightbox';
import {
  OpenAPI,
  PostCategoryModel,
  PostCategoryView,
  PostModel,
  PostService,
  PostViewStandardResponse,
} from '../../../../client';
import { PrimarySelect } from 'lib/components/Utils/PrimarySelect';
import Cookies from 'js-cookie';

const CreatePost = ({
  postCategoryList,
}: {
  postCategoryList: PostCategoryView[];
}) => {
  const [uploadedThumbnail, setUploadedThumbnail] = useState<string>();
  const schema = yup.object().shape({
    title: yup.string().required(),
    content: yup.string().required(),
    postCategoryId: yup.string().required(),
    thumbnail: yup.string(),
  });

  const widgetapi = useRef<any>();

  const router = useRouter();
  const [published, setPublished] = useState<any>();
  const token = Cookies.get('token');

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm<PostModel>({
    resolver: yupResolver(schema),
    mode: 'all',
  });
  const toast = useToast();
  const [error, setError] = useState<string>();

  const onChangeThumbnail = async (info: any) => {
    const thumbnailUrl = info.originalUrl;
    setUploadedThumbnail(thumbnailUrl);
  };
  const onSubmit = async (data: PostModel) => {
    data.thumbnail = uploadedThumbnail;
    console.log({ data });
    try {
      const response = (await PostService.createPost({
        requestBody: data,
      })) as PostViewStandardResponse;
      if (response.status === true) {
        console.log({ response });

        // setPublished(response.data);
        return;
      }
      toast({
        position: 'top-right',
        render: () => (
          <Box color="white" p={3} bg="red.500">
            {response.message}
          </Box>
        ),
      });
      return;
    } catch (error) {
      console.log({ error });
      setError('An error occured');
    }
  };

  return (
    <Box w="100%">
      <Box w="90%" mx="auto" pb="30px">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack w="100%" direction="row" py="5rem" gap="2rem">
            <Box w="80%">
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
                <PrimaryInput<PostModel>
                  name="title"
                  error={errors.title}
                  defaultValue=""
                  register={register}
                  label="title"
                  placeholder="Post title"
                />

                <PrimaryEditor<PostModel>
                  name="content"
                  control={control}
                  label="Description"
                  register={register}
                  defaultValue=""
                  error={errors.content}
                />
              </VStack>
            </Box>
            <Box w="20%">
              <Stack direction="column" spacing="1rem">
                <Flex w="100%">
                  <Button
                    textTransform="capitalize"
                    w="full"
                    type="submit"
                    _hover={{
                      bg: 'transparent',
                      color: 'brand.100',
                      border: '2px solid #A03CAE',
                    }}
                    _focus={{
                      outline: 'none',
                    }}
                    isLoading={isSubmitting}
                  >
                    publish
                  </Button>
                </Flex>
                <Box>
                  <Text mb="2">Select a Category</Text>
                  {postCategoryList?.length > 0 && (
                    <PrimarySelect<PostModel>
                      register={register}
                      error={errors.postCategoryId}
                      label="Category"
                      placeholder="Select a category"
                      placeholderColor="gray"
                      name="postCategoryId"
                      options={
                        <>
                          {postCategoryList.map((x: PostCategoryView) => {
                            return <option value={x.id}>{x.name}</option>;
                          })}
                        </>
                      }
                    />
                  )}
                  <Text fontSize=".8rem">Create New Category</Text>
                </Box>
                <VStack
                  spacing="2"
                  align="flex-end"
                  w="full"
                  justify="space-between"
                >
                  <Box
                    w="100%"
                    h="13rem"
                    borderRadius="5px"
                    bgColor="brand.100"
                    flexShrink={0}
                    overflow="hidden"
                  >
                    <SRLWrapper>
                      {uploadedThumbnail && (
                        <Image
                          src={uploadedThumbnail as unknown as string}
                          alt="propery-image"
                          w="100%"
                          height="100%"
                          objectFit="cover"
                        />
                      )}
                    </SRLWrapper>
                  </Box>

                  <Button
                    variant="outline"
                    textTransform="capitalize"
                    type="button"
                    w="full"
                    onClick={() => widgetapi.current.openDialog()}
                  >
                    {uploadedThumbnail ? 'change image' : 'add thumbnail'}
                  </Button>

                  <Box display="none">
                    <Widget
                      publicKey="fda3a71102659f95625f"
                      imagesOnly
                      imageShrink="640x480"
                      imagePreviewMaxSize={9}
                      ref={widgetapi}
                      onChange={(info) => onChangeThumbnail(info)}
                    />
                  </Box>
                </VStack>
              </Stack>
            </Box>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default CreatePost;
