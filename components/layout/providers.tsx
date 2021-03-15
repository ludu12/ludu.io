import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, theme } from '../../styles/theme';
import { ThemeContext } from '../../styles/theme-context';
import useDarkMode from 'use-dark-mode';
import React from 'react';
import GlobalStyles from '../../styles/global-styles';
import { QueryClient, QueryClientProvider } from 'react-query';

const dark = theme(darkTheme);
const light = theme(lightTheme);

interface ProvidersProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

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
        <QueryClientProvider client={queryClient}>
          <GlobalStyles />
          {props.children}
        </QueryClientProvider>
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
