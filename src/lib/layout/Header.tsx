import { Box, Flex, HStack, Image, Text, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
// import Link from 'next/link';

// import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const router = useRouter();
  const getNavLinks = (name: string) => {
    if (router.asPath === name) return 'brand.100';
  };

  const AddBgOnScroll = () => {
    const scrollHeight = 100;
    const pos = window.scrollY;

    if (pos >= scrollHeight) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', AddBgOnScroll);
  }, []);
  return (
    <Flex
      bg={navbar ? 'white' : 'transparent'}
      w="full"
      boxShadow={
        navbar
          ? '0 3px 7px 0 rgba(0, 0, 0, 0.18), 0 2px 8px 0 rgba(0, 0, 0, 0.15)'
          : ''
      }
      transition={navbar ? '0.5s ease' : ''}
      pos={router.pathname === '/' ? 'fixed' : 'relative'}
      h="5rem"
      justify="space-between"
      align="center"
      px={16}
      top="0"
      zIndex={5}
    >
      <Box>
        <Image
          src="/harmonic.png"
          alt="Harmonic Technologies"
          h="4rem"
          w="auto"
        />
      </Box>
      <HStack spacing="40px" fontFamily="brSemi" fontSize=".9rem" pr="1rem">
        <Link href="/">
          <Text color={getNavLinks('/')}>Home</Text>
        </Link>
        <Link href="/about">
          <Text color={getNavLinks('/about')}>About us</Text>
        </Link>
        <Link href="/services">
          <Text color={getNavLinks('/services')}>Our works</Text>
        </Link>
        <Link href="/thoughts">
          <Text color={getNavLinks('/thoughts')}>Thoughts</Text>
        </Link>
        <Link href="/contact-us">
          <Text color={getNavLinks('/contact-us')}>Work for us</Text>
        </Link>
      </HStack>
    </Flex>
  );
};

export default Header;
