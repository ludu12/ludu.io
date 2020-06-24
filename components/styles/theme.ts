// Theme.ts
export interface ThemeInterface {
  primary: string;
  primaryVarient: string;
  secondary: string;
  secondaryVarient: string;
  bg: string;
  bg2: string;
  bg3: string;
  bgInverse: string;
  text: string;
  textInverse: string;
  shadow: string;
  shadowVarient: string;
}

export interface NeutralsInterface {
  white: string;
  lightGray1: string;
  lightGray2: string;
  lightGray3: string;
  gray: string;
  darkGray3: string;
  darkGray2: string;
  darkGray1: string;
  black: string;
}

export interface ThemePropInterface {
  neturals: NeutralsInterface;
  main: ThemeInterface;
}

const primary = {
  lightPrimary1: 'rgba(218, 242, 244,1)',
  lightPrimary2: 'rgba(168, 217, 221,1)',
  primary: 'rgba(117,185,190,1)',
  darkPrimary2: 'rgba(73, 146, 153,1)',
  darkPrimary1: 'rgba(45, 123, 130, 1)',
};

const secondary = {
  lightSecondary1: 'rgba(255, 240, 227, 1)',
  lightSecondary2: 'rgb(255, 222, 192, 1)',
  secondary: 'rgba(255, 203, 156, 1)',
  darkSecondary2: 'rgb(252, 181, 119, 1)',
  darkSecondary1: 'rgba(214, 139, 73, 1)',
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
  primary: primary.primary,
  primaryVarient: primary.darkPrimary2,
  secondary: secondary.secondary,
  secondaryVarient: secondary.darkSecondary2,
  bg: neturals.lightGray1,
  bg2: neturals.lightGray2,
  bg3: neturals.lightGray3,
  bgInverse: neturals.darkGray1,
  text: neturals.darkGray1,
  textInverse: neturals.lightGray1,
  shadow: shadow.lightShadow1,
  shadowVarient: shadow.lightShadow2,
};

export const darkTheme = {
  primary: primary.primary,
  primaryVarient: primary.darkPrimary2,
  secondary: secondary.secondary,
  secondaryVarient: secondary.lightSecondary2,
  bg: neturals.darkGray1,
  bg2: neturals.darkGray2,
  bg3: neturals.darkGray3,
  bgInverse: neturals.lightGray1,
  text: neturals.lightGray1,
  textInverse: neturals.darkGray1,
  shadow: shadow.darkShawdow1,
  shadowVarient: shadow.darkShawdow2,
};

export const theme = (t: ThemeInterface) => ({
  neturals,
  main: t,
});
