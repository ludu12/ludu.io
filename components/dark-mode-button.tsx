import React from 'react';
import { ThemeContext } from '../lib/styles/theme-context';
import { FiSun } from 'react-icons/fi';
import { FiMoon } from 'react-icons/fi';
import { Button } from './shared/shared-styled';

interface DarkModeProps {
}

const DarkModeButton: React.FC<DarkModeProps> = () => {
  const themeContext = React.useContext(ThemeContext);

  return(
    <Button onClick={themeContext.toggle}>
      {themeContext.darkMode ? <FiMoon /> : <FiSun/>}
    </Button>
  )
};

export default DarkModeButton;
