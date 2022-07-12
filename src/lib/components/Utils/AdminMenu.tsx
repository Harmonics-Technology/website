import { Box, color, Flex, HStack, Icon, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type CardsType = {
  text: string;
  url: string;
  icon: string | any;
  isOpen: boolean;
};
function AdminMenu({ text, url, icon, isOpen }: CardsType) {
  const router = useRouter();
  const getNavLinks = (style: string) => {
    if (router.asPath.startsWith(`/blogs/${url}`)) return style;
  };

  return (
    <NextLink href={`/blogs/${url}`} passHref>
      <HStack
        align="center"
        p=".5rem"
        backgroundColor={getNavLinks('white')}
        color={getNavLinks('brand.100') ? 'brand.100' : 'white'}
        borderRadius={isOpen ? '30px' : '50%'}
        w={isOpen ? 'full' : '2rem'}
        h={isOpen ? 'unset' : '2rem'}
        cursor="pointer"
        spacing={4}
        justifyContent={isOpen ? 'flex-start' : 'center'}
      >
        {icon}
        {isOpen && <Text noOfLines={1}>{text}</Text>}
      </HStack>
    </NextLink>
  );
}

export default AdminMenu;
