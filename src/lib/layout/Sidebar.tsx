import {
  Box,
  Circle,
  Flex,
  HStack,
  Image,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import AdminMenu from 'lib/components/Utils/AdminMenu';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import {
  AiOutlineClose,
  AiOutlineEdit,
  AiOutlineLogout,
  AiOutlineMenuFold,
} from 'react-icons/ai';
import { TbViewfinder } from 'react-icons/tb';

function Sidebar({ isOpen, setIsOpen }: any) {
  const router = useRouter();

  return (
    <Box
      w={[isOpen ? '50%' : '0%', isOpen ? '15%' : '5%']}
      h="100vh"
      pos="fixed"
      bgColor="brand.100"
      px={isOpen ? '1.5rem' : 'unset'}
      display={isOpen ? 'block' : 'flex'}
      justifyContent="center"
      transition="all .3s ease-out"
      zIndex="5"
    >
      <Box pos="relative" w={['full', 'unset']}>
        <Flex
          onClick={() => router.push('/')}
          cursor="pointer"
          h="5rem"
          alignItems="center"
        >
          <Image
            src={isOpen ? '/harmonicw.png' : '/harmonicfavb.png'}
            alt="Harmonic Technologies"
            h={isOpen ? '3rem' : '2.5rem'}
            w="auto"
          />
        </Flex>
        <Circle
          pos="absolute"
          right={[
            isOpen ? '-2.3rem' : '-1.8rem',
            isOpen ? '-2.3rem' : '-1.7rem',
          ]}
          bgColor="brand.100"
          color="white"
          size="2rem"
          border="4px solid white"
          onClick={() => setIsOpen(!isOpen)}
          cursor="pointer"
        >
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenuFold />}
        </Circle>
        <VStack
          align="flex-start"
          spacing={10}
          mt="3rem"
          h="70vh"
          w="full"
          overflow="hidden"
        >
          <AdminMenu
            text="Create Post"
            url="create-post"
            icon={<AiOutlineEdit />}
            isOpen={isOpen}
          />
          <AdminMenu
            text="View Posts"
            url="dashboard"
            icon={<TbViewfinder />}
            isOpen={isOpen}
          />
          <HStack
            align="center"
            p=".5rem"
            w="full"
            spacing={4}
            color="white"
            cursor="pointer"
          >
            <AiOutlineLogout />
            {isOpen && <Text noOfLines={1}>Logout</Text>}
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
}

export default Sidebar;
