import { AppProps } from 'next/app';
import React from 'react';
import Providers from '../components/layout/providers';
import { ReactQueryDevtools } from 'react-query/devtools';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config.js';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Providers>
      <Head>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </Providers>
  );
};

export default App;
