// Theme.ts
export interface ThemeInterface {
  primary: string,
  secondary: string,
  accent: string,
  bg: string,
  text: string,
  textInverse: string,
}

export interface ThemePropInterface {
  white: string,
  gray1: string,
  gray2: string,
  gray3: string,
  gray4: string,
  gray5: string,
  gray6: string,
  black: string,
  main: ThemeInterface,
  nav: {
    bg: string,
    text: string,
  }
}

const defaults = {
  white: 'rgba(255,255,255,1)',
  gray1: 'rgba(255,255,255,0.75)',
  gray2: 'rgba(255,255,255,0.5)',
  gray3: 'rgba(255,255,255,0.25)',
  gray4: 'rgba(0,0,0,0.25)',
  gray5: 'rgba(0,0,0,0.5)',
  gray6: 'rgba(0,0,0,0.75)',
  black: 'rgba(0,0,0,1)',
};

export const lightTheme = {
  primary: 'rgba(42,51,64,1)',
  secondary: 'rgba(85,128,255,1)',
  accent: 'rgba(42,128,64,1)',
  bg: defaults.white,
  text: defaults.black,
  textInverse: defaults.white,
};

export const darkTheme = {
  primary: defaults.gray1,
  secondary: 'rgba(85,128,255,1)',
  accent: 'rgba(42,128,64,1)',
  bg: 'rgba(42,51,64,1)',
  text: defaults.white,
  textInverse: defaults.black,
};

export const theme = (t: ThemeInterface) => ({
  ...defaults,
  main: t,
  nav: {
    bg: t.primary,
    text: t.textInverse,
  },
});
