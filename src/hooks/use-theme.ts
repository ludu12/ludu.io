import theme from '../theme';
import { createContext, useContext } from 'react';

const ThemeContext = createContext(theme);

export const useTheme = () => {
  return useContext(ThemeContext);
}

export const ThemeProvider = ThemeContext.Provider;
