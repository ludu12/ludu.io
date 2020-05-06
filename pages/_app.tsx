import { AppProps } from 'next/app';
import React from 'react';
import Providers from '../components/providers';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Providers>
      <Component {...pageProps}/>
    </Providers>
  );
};

export default App;
