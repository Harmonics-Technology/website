import { Box, Flex, Stack, Image, Text, Link } from '@chakra-ui/react';
import { UserContext } from 'lib/components/Utils/MainContext';
import { useRouter } from 'next/router';
import { useContext, useEffect, useRef, useState } from 'react';
import { BsBorderWidth } from 'react-icons/bs';
import listenForOutsideClick from './listenForOutsideClick';
// import Link from 'next/link';

// import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const openMobileMenu = () => {
    setIsOpened(!isOpened);
  };

  const router = useRouter();
  const getNavLinks = (name: string) => {
    if (router.asPath === name) return 'brand.100';
  };

  const { user, setUser } = useContext(UserContext);

  const AddBgOnScroll = () => {
    const scrollHeight = 80;
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

  const dropDown = useRef(null);
  const [listening, setListening] = useState(false);

  useEffect(
    listenForOutsideClick(listening, setListening, dropDown, setIsOpened)
  );
  return (
    <Flex
      bg={navbar ? 'white' : 'white'}
      w="full"
      ref={dropDown}
      boxShadow={
        navbar
          ? '0 3px 7px 0 rgba(0, 0, 0, 0.18), 0 2px 8px 0 rgba(0, 0, 0, 0.15)'
          : ''
      }
      transition={navbar ? '0.5s ease' : ''}
      pos="sticky"
      h="5rem"
      justify="space-between"
      align="center"
      px={['1rem', 16]}
      top="0"
      zIndex={5}
    >
      <Box zIndex="4" onClick={() => router.push('/')} cursor="pointer">
        <Image
          src="/harmonic.png"
          alt="Harmonic Technologies"
          h={['3rem', '4rem']}
          w="auto"
        />
      </Box>
      <Stack
        spacing={['30px', '40px']}
        fontFamily="brSemi"
        fontSize=".9rem"
        pr="1rem"
        pos={['fixed', 'unset']}
        bgColor={['white', 'unset']}
        width={['80%', 'auto']}
        left={isOpened ? '0' : '-100%'}
        top="0"
        height={['100vh', 'auto']}
        alignItems={['flex-start', 'center']}
        pt={['7rem', '0']}
        direction={['column', 'row']}
        pl={['2rem', 0]}
        zIndex="3"
        transition={['all .5s ease', 'unset']}
      >
        <Link href="/">
          <Text color={getNavLinks('/')}>Home</Text>
        </Link>
        <Link href="/about">
          <Text color={getNavLinks('/about')}>About us</Text>
        </Link>
        <Link href="/our-work">
          <Text color={getNavLinks('/our-work')}>Our works</Text>
        </Link>
        <Link href="/blog">
          <Text color={getNavLinks('/blog')}>Blog</Text>
        </Link>
        <Link href="/contact-us">
          <Text color={getNavLinks('/contact-us')}>Work with us</Text>
        </Link>
        {user ? (
          <Link href="/blogs/dashboard">
            <Text color={getNavLinks('/blogs/dashboard')}>Dashboard</Text>
          </Link>
        ) : (
          <Link href="/blogs/sign-up">
            <Text color={getNavLinks('/blogs/sign-up')}>Sign up</Text>
          </Link>
        )}
      </Stack>
      <Box
        ml="2rem"
        display={['block', 'none']}
        onClick={() => openMobileMenu()}
      >
        <BsBorderWidth fontSize="1.5rem" />
      </Box>
    </Flex>
  );
};

export default Header;
