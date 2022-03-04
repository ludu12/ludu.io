import React from 'react';
import { FiSun } from 'react-icons/fi';
import { FiMoon } from 'react-icons/fi';
import { Button } from '../shared-styled';

const DarkModeButton: React.FC = () => {
  return (
    <Button onClick={() => console.log('')}>
      {true ? <FiMoon /> : <FiSun />}
    </Button>
  );
};

export default DarkModeButton;
