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
    router.pathname.startsWith('/blogs/sign-up') ||
    router.pathname.startsWith('/blogs/reset-password');
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {blog ? (
        <Box margin="0 auto" transition="0.5s ease-out">
          {!login && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />}
          <Box
            as="main"
            w={isOpen ? '85%' : login ? 'full' : '95%'}
            ml="auto"
            transition="all .3s ease-out"
          >
            {children}
          </Box>
        </Box>
      ) : (
        <Box margin="0 auto" transition="0.5s ease-out">
          <Header />
          <Box as="main" mt={blog ? '0' : ['5rem', 'unset']}>
            {children}
          </Box>
          <Footer />
        </Box>
      )}
    </>
  );
};

export default Layout;
