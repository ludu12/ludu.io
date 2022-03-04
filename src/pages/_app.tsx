import { AppProps } from 'next/app';
import React from 'react';
import theme from '../theme';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config.js';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '../hooks/use-theme';

import 'tailwindcss/tailwind.css';
import '../styles/global.css';
import '../styles/hamburger.css';

const queryClient = new QueryClient();

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider value={theme}>
      <QueryClientProvider client={queryClient}>
        <Head>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
