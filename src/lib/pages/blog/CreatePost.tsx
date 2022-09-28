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
  Heading,
} from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
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
  PostCategoryService,
  PostCategoryView,
  PostModel,
  PostService,
  PostViewStandardResponse,
} from '../../../../client';
import { PrimarySelect } from 'lib/components/Utils/PrimarySelect';
import Cookies from 'js-cookie';
import AddCategory from 'lib/components/Utils/AddCategory';

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
  const [isOpen, setIsOpen] = useState(false);
  const [listCat, setListCat] = useState<any>(postCategoryList);
  const openIsModal = () => {
    setIsOpen(true);
  };
  const closeIsModal = () => {
    setIsOpen(false);
  };

  const {
    register,
    handleSubmit,
    control,
    getValues,
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
        setPublished(response.data);
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

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const category = (await PostCategoryService.list({})).data;
        setListCat(category);
      } catch (error) {
        console.log({ error });
      }
    };
    fetchCategories();
  }, [isOpen]);

  return (
    <Box w="100%">
      <Box w="90%" mx="auto" py="4rem">
        <Text mb="2rem" fontSize="2.5rem" fontWeight="500">
          Create new Post
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack w="100%" direction="row" gap="2rem">
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
                <Box
                  w="full"
                  // p="1rem"
                  h="5rem"
                  bgColor="white"
                  borderRadius="4px"
                >
                  <Flex w="100%" justify="flex-end">
                    <Button
                      textTransform="capitalize"
                      width="fit-content"
                      type="submit"
                      px="2rem"
                      minWidth="3rem"
                      height="3rem"
                      borderRadius="0"
                      variant="solid"
                      fontSize=".9rem"
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
                      + publish
                    </Button>
                  </Flex>
                </Box>
                <Box mt="2rem !important">
                  <Text
                    mb="3"
                    w="full"
                    borderLeft="4px solid"
                    pl=".3rem"
                    fontSize=".9rem"
                    fontWeight="500"
                    borderColor="brand.100"
                  >
                    Select a Category
                  </Text>
                  {listCat?.length > 0 && (
                    <PrimarySelect<PostModel>
                      register={register}
                      error={errors.postCategoryId}
                      label="Category"
                      placeholder="Select a category"
                      placeholderColor="gray"
                      name="postCategoryId"
                      borderRadius="0"
                      options={
                        <>
                          {listCat.map((x: PostCategoryView) => {
                            return <option value={x.id}>{x.name}</option>;
                          })}
                        </>
                      }
                    />
                  )}
                  <Text
                    fontSize=".8rem"
                    my="1rem"
                    cursor="pointer"
                    textDecoration="underline"
                    onClick={() => openIsModal()}
                  >
                    + Create New Category
                  </Text>
                  {/* {addCat && <AddCategory />} */}
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
                    bgColor="brand.300"
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
                    px="2rem"
                    minWidth="3rem"
                    height="3rem"
                    borderRadius="0"
                    textTransform="capitalize"
                    type="button"
                    w="full"
                    fontSize=".9rem"
                    mt="1.5rem !important"
                    _hover={{
                      bg: 'transparent',
                      color: 'brand.100',
                      border: '2px solid #A03CAE',
                    }}
                    _focus={{
                      outline: 'none',
                    }}
                    onClick={() => widgetapi.current.openDialog()}
                  >
                    {uploadedThumbnail ? 'change image' : '[.] add thumbnail'}
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
        <AddCategory isOpen={isOpen} onClose={closeIsModal} />
      </Box>
    </Box>
  );
};

export default CreatePost;
