// Theme.ts
const light = {
  bg: {
    primary: '#eff0f5',
    secondary: '#ffffff',
    inset: '#e2e4e8',
    input: 'rgba(65,67,78,0.12)',
  },
  text: {
    primary: '#050505',
    secondary: '#2f3037',
    tertiary: '#525560',
    quarternary: '#9194a1',
    placeholder: 'rgba(82,85,96,0.5)',
    onPrimary: '#ffffff',
  },
  // ...
}

const dark = {
  bg: {
    primary: '#050505',
    secondary: '#111111',
    inset: '#111111',
    input: 'rgba(191,193,201,0.12)',
  },
  text: {
    primary: '#fbfbfc',
    secondary: '#e3e4e8',
    tertiary: '#a9abb6',
    quarternary: '#6c6f7e',
    placeholder: 'rgba(145,148,161,0.5)',
    onPrimary: '#050505',
  },
  // ...
}

const defaultTheme = {
  fontSizes: [
    '14px', // 0
    '16px', // 1
    '18px', // 2
    '22px', // 3
    '26px', // 4
    '32px', // 5
    '40px', // 6
  ],
  fontWeights: {
    body: 400,
    subheading: 500,
    link: 600,
    bold: 700,
    heading: 800,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.3,
    code: 1.6,
  },
  // ...
}

export const lightTheme = { ...defaultTheme, ...light }
export const darkTheme = { ...defaultTheme, ...dark }

export const theme = {
  font: {
    primary: `'Baloo', sans-serif`,
    secondary: `'Poppins', sans-serif`,
  },
  font_size: {
    small: 'font-size: 20px; line-height: 30px',
    regular: 'font-size: 24px; line-height: 32px',
    large: 'font-size: 36px; line-height: 48px',
    larger: 'font-size: 36px; line-height: 48px',
    xlarge: 'font-size: 48px; line-height: 56px',
  },
  colors: {
    white: {
      regular: '#FFFFFF',
      dark: '#F6F6F6',
    },
    black: {
      lighter: '#ABA8AF',
      light: '#564F62',
      regular: '#211E26',
    },
    primary: '#211E26',
    secondary: '#253ab5',
    accent: '#30b5a5',
  },
  screen: {
    xs: '575px',
    sm: '767px',
    md: '991px',
    lg: '1199px',
  },
}
