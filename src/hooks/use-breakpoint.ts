import theme, { ThemeType } from '../theme';
import { useEffect, useState } from 'react';

type BreakpointType = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const getBreakpointValue = (theme: ThemeType, value: BreakpointType): number =>
  +theme.screens[value].slice(
    0,
    theme.screens[value].indexOf('px'),
  );

const getBreakpoint = () => {
  let biggestBreakpointValue = 0;
  let breakpointToSet: BreakpointType | '' = '';
  for (const breakpoint of Object.keys(theme.screens)) {
    const breakpointValue = getBreakpointValue(theme, breakpoint as BreakpointType);
    if (breakpointValue > biggestBreakpointValue && window.innerWidth >= breakpointValue) {
      biggestBreakpointValue = breakpointValue;
      breakpointToSet = breakpoint as BreakpointType;
    }
  }
  return breakpointToSet;
};

const listener = (setter: (x: BreakpointType | '') => void) => () => setter(getBreakpoint());
export const BreakpointMap: Record<BreakpointType | '', number> = {
  '': 0,
  'sm': 1,
  'md': 2,
  'lg': 3,
  'xl': 4,
  '2xl': 5,
};

export const useBreakpoint = (): BreakpointType | '' => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<BreakpointType | ''>(() => {
    if (typeof window !== 'undefined') {
      return getBreakpoint();
    }
    return ''
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const fn = listener(setCurrentBreakpoint);
      window.addEventListener('resize', fn, true);
      return () => window.removeEventListener('resize', fn, true);
    }
  }, []);

  return currentBreakpoint;
};
