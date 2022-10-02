import {
  Box,
  Heading,
  Image,
  Flex,
  VStack,
  HStack,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { MdEdit } from 'react-icons/md';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserService, UpdateUserModel } from '../../../../client';
import ProfileInput from 'lib/components/Utils/ProfileInput';
import { PrimaryInput } from 'lib/components/Utils/PrimaryInput';
import { GetServerSidePropsContext } from 'next';

const UpdateProfile = ({ user }: { user: any }) => {
  const schema = yup.object().shape({
    id: yup.string().required(),
    phoneNumber: yup.string().required(),
    // profilePicture: yup().string().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<UpdateUserModel>({
    resolver: yupResolver(schema),
  });

  const onsubmit = (data: UpdateUserModel) => {
    console.log(data);
  };

  return (
    <>
      <Heading fontSize="20px" lineHeight={1.5} textTransform="capitalize">
        edit profile
      </Heading>

      <form onSubmit={handleSubmit(onsubmit)}>
        <Box pos="relative" w="250px" mx="auto" my="25px">
          <Box
            w="150px"
            h="150px"
            borderRadius="50%"
            mx="auto"
            overflow="hidden"
          >
            <Image src="/ava1.png" w="100%" h="100%" />
          </Box>
          <Flex
            w="30px"
            h="30px"
            color="white"
            bg="brand.100"
            justifyContent="center"
            alignItems="center"
            borderRadius="50%"
            pos="absolute"
            bottom={0}
            right={['70px']}
          >
            <MdEdit />
          </Flex>
        </Box>
        <VStack alignItems="flex-start" spacing={6}>
          <HStack w="100%" spacing={6}>
            <ProfileInput value={user?.firstName} />
            <ProfileInput value={user?.lastName} />
          </HStack>
          <ProfileInput value={user?.email} />
          <PrimaryInput<UpdateUserModel>
            name="phoneNumber"
            error={errors.phoneNumber}
            defaultValue=""
            register={register}
            label="Phone Number"
            placeholder="Please enter your phone number"
          />
        </VStack>
        <Button
          my="25px"
          color="#fff"
          w="150px"
          bg="#A03CAE"
          borderRadius="8px"
          border="none"
          type="submit"
          isLoading={isSubmitting}
          _hover={{
            color: '#A03CAE',
            bg: '#fff',
            border: '1px solid #A03CAE',
          }}
        >
          Save
        </Button>
      </form>
    </>
  );
};

export default UpdateProfile;

export const getServerSideProps = (ctx: GetServerSidePropsContext) => {
  const { id } = ctx.query;
  return {
    props: {
      token: id,
    },
  };
};
