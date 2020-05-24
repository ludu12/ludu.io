import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, theme } from '../lib/styles/theme';
import { ThemeContext } from '../lib/styles/theme-context';
import useDarkMode from 'use-dark-mode';
import React from 'react';
import GlobalStyles from '../lib/styles/global-styles';

const dark = theme(darkTheme);
const light = theme(lightTheme);

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = (props) => {
  const darkMode = useDarkMode(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const body = (
    <ThemeProvider theme={darkMode.value ? dark : light}>
      <ThemeContext.Provider
        value={{ darkMode: darkMode.value, toggle: darkMode.toggle }}
      >
        <GlobalStyles />
        {props.children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );

  // prevents ssr flash for mismatched dark mode
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{body}</div>;
  }

  return body;
};

export default Providers;
