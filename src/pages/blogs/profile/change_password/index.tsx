import { Flex, Text, VStack, Box, Image } from '@chakra-ui/react';
import ChangePassword from 'lib/pages/blog/ChangePassword';
import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from 'lib/components/Utils/MainContext';

const ChangeUserPassword = () => {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);

  const showEditProfile = () => {
    router.push('/blogs/profile');
  };

  const showChangePassword = () => {
    router.push('/blogs/profile/change_password');
  };
  return (
    <Box>
      <Flex
        position="sticky"
        top="0"
        px={['1rem', 16]}
        h="5rem"
        zIndex={4}
        alignItems="center"
        justifyContent="space-between"
        shadow="lg"
        bgColor="white"
      >
        <Text
          color="brand.100"
          textTransform="capitalize"
          fontSize="1.1rem"
          fontWeight="bold"
        >
          {user?.firstName}
        </Text>

        <Box w="50px" h="50px" borderRadius="50%">
          <Image src={user?.profilePicture || '/dummy.png'} w="100%" h="100%" />
        </Box>
      </Flex>
      <Box w="90%" mx="auto">
        <Flex
          direction={['column', 'column', 'row']}
          w="100%"
          pt={['30px', '30px', '50px']}
          // border="2px solid green"
        >
          <VStack
            w={['100%', '100%', '25%']}
            spacing={6}
            alignItems="flex-start"
          >
            <Text
              textTransform="capitalize"
              fontSize="18px"
              fontWeight={600}
              // color="gray.400"
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
              color={
                router.asPath === '/blogs/profile/change_password'
                  ? 'brand.100'
                  : ''
              }
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
            <ChangePassword />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default ChangeUserPassword;
