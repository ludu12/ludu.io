import React from 'react';
import { FiSun } from 'react-icons/fi';
import { FiMoon } from 'react-icons/fi';
import { Button } from '../shared-styled';
import { ThemeContext } from '../../styles/theme-context';

const DarkModeButton: React.FC = () => {
  const themeContext = React.useContext(ThemeContext);

  return (
    <Button onClick={themeContext.toggle}>
      {themeContext.darkMode ? <FiMoon /> : <FiSun />}
    </Button>
  );
};

export default DarkModeButton;
