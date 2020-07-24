import { useState, useEffect } from 'react';
import { useTheme } from 'styled-components';

export const useMediaQuery = () => {
  const theme = useTheme();
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (width >= theme.screen.xl) {
    return 'xl';
  } else if (width >= theme.screen.lg) {
    return 'lg';
  } else if (width >= theme.screen.md) {
    return 'md';
  } else if (width >= theme.screen.sm) {
    return 'sm';
  }

  return 'xs';
};
