import { Flex, Text, VStack, Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import UpdateProfile from './UpdateProfile';
import { useRouter } from 'next/router';

const ProfileUpdate = ({ user }: { user: any }) => {
  const router = useRouter();
  const showEditProfile = () => {
    router.push('/blogs/profile');
  };

  const showChangePassword = () => {
    router.push('/blogs/profile/change_password');
  };
  return (
    <Box w="90%" mx="auto">
      <Flex
        direction={['column', 'column', 'row']}
        w="100%"
        pt={['30px', '30px', '50px']}
        // border="2px solid green"
      >
        <VStack w={['100%', '100%', '25%']} spacing={6} alignItems="flex-start">
          <Text
            textTransform="capitalize"
            fontSize="18px"
            fontWeight={600}
            // color="gray.400"
            color={router.asPath === '/blogs/profile' ? 'brand.100' : ''}
            onClick={showEditProfile}
            cursor="pointer"
          >
            edit profile
          </Text>
          <Text
            textTransform="capitalize"
            fontSize="18px"
            fontWeight={600}
            // color="gray.400"
            onClick={showChangePassword}
            cursor="pointer"
          >
            change password
          </Text>
        </VStack>

        <Box
          w={['100%', '100%', '75%']}
          borderLeft="2px solid #E2E8F0"
          minH="50vh"
          pl={['20px', '20px', '30px']}
          mt={['30px', '30px', 0]}
        >
          <UpdateProfile user={user} />
        </Box>
      </Flex>
    </Box>
  );
};

export default ProfileUpdate;
