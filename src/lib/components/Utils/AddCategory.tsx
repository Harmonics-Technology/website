import {
  Box,
  Button,
  Text,
  useToast,
  VStack,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import { PrimaryInput } from '../../components/Utils/PrimaryInput';
import {
  PostCategoryModel,
  PostCategoryService,
  PostViewStandardResponse,
} from '../../../../client';

const AddCategory = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: any;
}) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
  });

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<PostCategoryModel>({
    resolver: yupResolver(schema),
    mode: 'all',
  });
  const toast = useToast();

  const onSubmit = async (data: PostCategoryModel) => {
    try {
      const response = (await PostCategoryService.createPostCategory({
        requestBody: data,
      })) as PostViewStandardResponse;
      onClose();
      if (response.status === true) {
        toast({
          position: 'top-right',
          render: () => (
            <Box color="white" p={3} bg="brand.100">
              New category added successfully
            </Box>
          ),
        });
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
      toast({
        position: 'top-right',
        render: () => (
          <Box color="white" p={3} bg="red.500">
            An error occurred
          </Box>
        ),
      });
    }
  };

  return (
    <Modal
      motionPreset="slideInBottom"
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent
        py={5}
        borderRadius="0"
        w={['88%', '50%']}
        overflow="hidden"
        maxH="100vh"
        mt="0"
        mb="0"
      >
        <ModalHeader>
          <Text
            color="black"
            fontSize="1.1rem"
            textAlign="left"
            fontWeight="semibold"
            px={5}
          >
            Add New Category
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box maxH="80vh" overflowY="auto" px={5}>
            <Box w="100%">
              <form onSubmit={handleSubmit(onSubmit)}>
                <VStack alignItems="flex-start" w="100%" spacing={5}>
                  <PrimaryInput<PostCategoryModel>
                    name="name"
                    error={errors.name}
                    defaultValue=""
                    register={register}
                    label="category name"
                    placeholder="Category"
                    fontSize=".8rem"
                  />
                  <PrimaryInput<PostCategoryModel>
                    name="description"
                    error={errors.description}
                    defaultValue=""
                    register={register}
                    label="short description"
                    placeholder="Short Description"
                    fontSize=".8rem"
                  />
                  <Button
                    textTransform="capitalize"
                    width="full"
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
                    + Add Category
                  </Button>
                </VStack>
              </form>
            </Box>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddCategory;
