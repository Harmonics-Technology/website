import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const blog = router.pathname.startsWith('/blog');
  return (
    <Box margin="0 auto" transition="0.5s ease-out">
      {blog ? null : <Header />}
      <Box as="main" mt={blog ? '0' : ['5rem', 'unset']}>
        {children}
      </Box>
      {blog ? null : <Footer />}
    </Box>
  );
};

export default Layout;
