/* eslint-disable react/jsx-props-no-spreading */
import { ChakraProvider } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import Layout from '../lib/layout';
import customTheme from '../lib/styles/customTheme';
import defaultSEOConfig from '../../next-seo.config';
import '../lib/styles/globals.css';
import { OpenAPI } from '../../client';
import { UserProvider } from 'lib/components/Utils/MainContext';
import Cookies from 'js-cookie';

const MyApp = ({ Component, pageProps }: AppProps) => {
  OpenAPI.BASE = process.env.NEXT_PUBLIC_API_BASEURL as string;
  OpenAPI.TOKEN = Cookies.get('token');
  return (
    <ChakraProvider theme={customTheme}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
        <link rel="icon" href="/harmonicfav.png" type="image/x-icon" />
      </Head>
      <DefaultSeo {...defaultSEOConfig} />
      <UserProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </ChakraProvider>
  );
};

export default MyApp;
