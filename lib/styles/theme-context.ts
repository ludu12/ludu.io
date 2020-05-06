import React from 'react';

const ThemeContext = React.createContext({
  darkMode: false,
  toggle: () => {},
});

export { ThemeContext };
