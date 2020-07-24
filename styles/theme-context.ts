import React from 'react';

const ThemeContext = React.createContext({
  darkMode: false,
  toggle: () => {}, // eslint-disable-line
});

export { ThemeContext };
