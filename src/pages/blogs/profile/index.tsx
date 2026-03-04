import { Box, Text, Flex, Button, Image } from '@chakra-ui/react';
import React from 'react';
import { UserContext } from 'lib/components/Utils/MainContext';
import { useContext } from 'react';
import ProfileUpdate from '../../../lib/pages/blog/Profile';

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
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

      <ProfileUpdate user={user} />
    </Box>
  );
};

export default Profile;
