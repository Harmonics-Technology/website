import {
  Box,
  Heading,
  Image,
  Flex,
  VStack,
  HStack,
  Button,
  useToast,
  Spinner,
} from '@chakra-ui/react';
import React, { useState, useRef } from 'react';
import { MdEdit } from 'react-icons/md';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  UserService,
  UpdateUserModel,
  UserViewStandardResponse,
} from '../../../../client';
import ProfileInput from 'lib/components/Utils/ProfileInput';
import { PrimaryInput } from 'lib/components/Utils/PrimaryInput';
import { GetServerSidePropsContext } from 'next';
import { SRLWrapper } from 'simple-react-lightbox';
import { Widget } from '@uploadcare/react-widget';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const UpdateProfile = ({ user }: { user: any }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<UpdateUserModel>();
  console.log({ user });
  const [uploadedThumbnail, setUploadedThumbnail] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const widgetapi = useRef<any>();
  const toast = useToast();
  const router = useRouter();

  const onSubmit = async (data: UpdateUserModel) => {
    console.log(data);
    try {
      const response = (await UserService.updateUser({
        requestBody: data,
      })) as UserViewStandardResponse;
      console.log(response);
      if (response.status) {
        toast({
          position: 'top-right',
          duration: 9000,
          render: () => (
            <Box color="white" p={3} bg="brand.100">
              Profile updated successfully.
            </Box>
          ),
        });
        return;
      }
    } catch (err) {
      toast({
        position: 'top-right',
        duration: 9000,
        render: () => (
          <Box color="white" p={3} bg="red.500">
            An error occured. Please try again.
          </Box>
        ),
      });
    }
  };

  const profileUpdate = {
    profilePicture: uploadedThumbnail,
  };

  const onChangeThumbnail = async (info: any) => {
    setIsLoading(true);
    const thumbnailUrl = info.originalUrl;
    setUploadedThumbnail(thumbnailUrl);
    const updateProfilePic = async (url: UpdateUserModel) => {
      url.profilePicture = thumbnailUrl;
      try {
        const response = await UserService.updateUser({
          requestBody: url,
        });
        Cookies.set('user', JSON.stringify(response?.data));
        console.log(response);
        setIsLoading(false);
      } catch (err) {}
    };

    updateProfilePic(profileUpdate);
  };

  return (
    <>
      <Heading fontSize="20px" lineHeight={1.5} textTransform="capitalize">
        edit profile
      </Heading>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box pos="relative" w="250px" mx="auto" my="25px">
          <SRLWrapper>
            <Box
              w="150px"
              h="150px"
              borderRadius="50%"
              mx="auto"
              overflow="hidden"
              pos="relative"
            >
              <Image
                src={uploadedThumbnail || user?.profilePicture || '/dummy.png'}
                w="100%"
                h="100%"
              />

              {isLoading && (
                <Flex
                  w="100%"
                  h="100%"
                  alignItems="center"
                  justifyContent="center"
                  bg="rgba(255,255,255,0.64)"
                  pos="absolute"
                  top={0}
                >
                  <Spinner color="brand.100" />
                </Flex>
              )}
            </Box>
          </SRLWrapper>
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
            onClick={() => widgetapi.current.openDialog()}
          >
            <MdEdit />
          </Flex>
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
            defaultValue={user?.phoneNumber}
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
