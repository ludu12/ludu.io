import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import GlobalStyles from '../styles/global-styles';
import React from 'react';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles/>
        <Component {...pageProps} />
      </>
    </ThemeProvider>
  );
};

export default App;
