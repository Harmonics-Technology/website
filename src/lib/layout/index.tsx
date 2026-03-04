import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ReactNode, useState } from 'react';

import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const blog = router.pathname.startsWith('/blogs');
  const login =
    router.pathname.startsWith('/blogs/login') ||
    router.pathname.startsWith('/blogs/register') ||
    router.pathname.startsWith('/blogs/forgot-password');
  // || router.pathname.startsWith('/blogs/reset-password');
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {blog ? (
        <Box margin="0 auto" transition="0.5s ease-out">
          {!login && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />}
          <Box
            as="main"
            w={['full', isOpen ? '85%' : login ? 'full' : '95%']}
            ml="auto"
            transition="all .3s ease-out"
          >
            {children}
          </Box>
        </Box>
      ) : (
        <Box margin="0 auto" transition="0.5s ease-out">
          <Header />
          <Box as="main">{children}</Box>
          <Footer />
        </Box>
      )}
    </>
  );
};

export default Layout;
