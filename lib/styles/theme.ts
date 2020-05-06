// Theme.ts
export interface ThemeInterface {
  primary: string,
  primaryVarient: string,
  secondary: string,
  secondaryVarient: string,
  bg: string,
  bgInverse: string,
  text: string,
  textInverse: string,
  shadow: string,
  shadowVarient: string
}

export interface NeutralsInterface {
  white: string,
  lightGray1: string,
  lightGray2: string,
  lightGray3: string,
  gray: string,
  darkGray3: string,
  darkGray2: string,
  darkGray1: string,
  black: string,
}

export interface ThemePropInterface {
  neturals: NeutralsInterface,
  main: ThemeInterface,
}


const primary = {
  lightPrimary1: 'rgba(117,185,190,0.7)',
  lightPrimary2: 'rgba(117,185,190,0.8)',
  darkPrimary2: 'rgba(117,185,190,0.9)',
  darkPrimary1: 'rgba(117,185,190,1)',
};

const secondary = {
  lightSecondary1: 'rgba(247,146,86,0.7)',
  lightSecondary2: 'rgba(247,146,86,0.8)',
  darkSecondary2: 'rgba(247,146,86,0.9)',
  darkSecondary1: 'rgba(247,146,86,1)',
};

const shadow = {
  lightShadow1: 'rgba(0, 0, 0, 0.05)',
  lightShadow2: 'rgba(0, 0, 0, 0.08)',
  darkShawdow1: 'rgba(128, 128, 128, 0.05)',
  darkShawdow2: 'rgba(128, 128, 128, 0.08)',
};

const neturals = {
  white: 'rgba(255,255,255,1)',
  lightGray1: 'rgba(244,244,244,1)',
  lightGray2: 'rgba(192,192,192,1)',
  lightGray3: 'rgba(160,160,160,1)',
  gray: 'rgba(128,128,128,1)',
  darkGray3: 'rgba(96,96,96,1)',
  darkGray2: 'rgba(64,64,64,1)',
  darkGray1: 'rgba(32,32,32,1)',
  black: 'rgba(0,0,0,1)',
};

export const lightTheme = {
  primary: primary.lightPrimary1,
  primaryVarient: primary.lightPrimary2,
  secondary: secondary.lightSecondary1,
  secondaryVarient: secondary.lightSecondary2,
  bg: neturals.lightGray1,
  bg2: neturals.white,
  bgInverse: neturals.darkGray1,
  text: neturals.darkGray1,
  textInverse: neturals.lightGray1,
  shadow: shadow.lightShadow1,
  shadowVarient: shadow.lightShadow2
};

export const darkTheme = {
  primary: primary.darkPrimary1,
  primaryVarient: primary.darkPrimary2,
  secondary: secondary.darkSecondary1,
  secondaryVarient: secondary.darkSecondary2,
  bg: neturals.darkGray1,
  bg2: neturals.darkGray2,
  bgInverse: neturals.lightGray1,
  text: neturals.lightGray1,
  textInverse: neturals.darkGray1,
  shadow: shadow.darkShawdow1,
  shadowVarient: shadow.darkShawdow2
};

export const theme = (t: ThemeInterface) => ({
  neturals,
  main: t,
});
