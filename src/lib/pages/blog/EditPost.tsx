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
  
  const data = [
    { id: '08da9db0-ce67-4037-867d-db79ce9d79f1', name: 'technology' },
  ];
  
  const EditPost = ({
    postCategoryList,
  }: {
    postCategoryList: PostCategoryView[];
  }) => {
    
  
    const [uploadedThumbnail, setUploadedThumbnail] = useState<string>("https://ucarecdn.com/7a930d30-0948-418f-9a18-28323b6a0c78/");
    const schema = yup.object().shape({
      title: yup.string().required(),
      content: yup.string().required(),
      postCategoryId: yup.string().required(),
      thumbnail: yup.string(),
    });
  
    const widgetapi = useRef<any>();
  
    const router = useRouter();
    const [published, setPublished] = useState<any>();
    const token = Cookies.get("token")
  
    const {
      register,
      handleSubmit,
      control,
      formState: { errors, isValid, isSubmitting },
    } = useForm<PostModel>({
      resolver: yupResolver(schema),
      mode: 'all',
      defaultValues: {
        title: "hello",
        content: "hello world",
        // postCategoryId: '08da9db0-ce67-4037-867d-db79ce9d79f1',
        thumbnail: "https://ucarecdn.com/7a930d30-0948-418f-9a18-28323b6a0c78/"
      }
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
        OpenAPI.TOKEN = token as string
        const response = (await PostService.createPost({
          requestBody: data
        })) as PostViewStandardResponse;
        if (response.status === true) {
          toast({
            position: 'top-right',
            render: () => (
              <Box color="white" p={3} bg="brand.100">
                Post created successfully!
              </Box>
            ),
          });
          router.push('/blogs/dashboard');
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
                isLoading={isSubmitting}
              >
                update
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
              <PrimaryInput<PostModel>
                name="title"
                error={errors.title}
                defaultValue=""
                register={register}
                label="title"
                placeholder="Post title"
              />
              <PrimarySelect<PostModel>
                register={register}
                error={errors.postCategoryId}
                label="Category"
                placeholder="Select a category"
                placeholderColor="gray"
                name="postCategoryId"
                options={
                  <>
                    {data.map((x: PostCategoryView) => {
                      return <option
                       value={x.id}>{x.name}</option>;
                    })}
                  </>
                }
              />
              <PrimaryEditor<PostModel>
                name="content"
                control={control}
                label="Description"
                register={register}
                defaultValue=""
                error={errors.content}
              />
              <HStack
                spacing="2"
                align="flex-start"
                w="full"
                justify="space-between"
              >
                <Button
                  variant="outline"
                  textTransform="capitalize"
                  type="button"
                  onClick={() => widgetapi.current.openDialog()}
                >
                  {uploadedThumbnail ? 'change image' : 'add image'}
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
                <Box>
                  {/* <Spinner color='brand.100' /> */}
                  {uploadedThumbnail && (
                    <>
                      <HStack w="full" spacing="1rem" overflow="auto">
                        <SRLWrapper>
                          <Box
                            w="50rem"
                            h="50rem"
                            borderRadius="5px"
                            bgColor="brand.50"
                            flexShrink={0}
                            overflow="hidden"
                          >
                            <Image
                              src={uploadedThumbnail as unknown as string}
                              alt="propery-image"
                              w="100%"
                              height="100%"
                              objectFit="cover"
                            />
                          </Box>
                        </SRLWrapper>
                      </HStack>
                    </>
                  )}
                </Box>
              </HStack>
            </VStack>
          </form>
        </Box>
      </Box>
    );
  };
  
  export default EditPost;
  