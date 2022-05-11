import { Box, Flex, Stack, Image, Text, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { CgMenuRight } from 'react-icons/cg';
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
      pos={['fixed', router.pathname === '/' ? 'fixed' : 'relative']}
      h="5rem"
      justify="space-between"
      align="center"
      px={['1rem', 16]}
      top="0"
      zIndex={5}
    >
      <Box zIndex="4">
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
        <Link href="/services">
          <Text color={getNavLinks('/services')}>Our works</Text>
        </Link>
        <Link href="/thoughts">
          <Text color={getNavLinks('/thoughts')}>Thoughts</Text>
        </Link>
        <Link href="/contact-us">
          <Text color={getNavLinks('/contact-us')}>Work for us</Text>
        </Link>
      </Stack>
      <Box
        ml="2rem"
        display={['block', 'none']}
        onClick={() => openMobileMenu()}
      >
        <CgMenuRight fontSize="2rem" />
      </Box>
    </Flex>
  );
};

export default Header;
