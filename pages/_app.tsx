import { AppProps } from 'next/app';
import React from 'react';
import Providers from '../components/layout/providers';
import { ReactQueryDevtools } from 'react-query-devtools';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Providers>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </Providers>
  );
};

export default App;
