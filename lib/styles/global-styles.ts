import { createGlobalStyle } from 'styled-components';
import { ThemePropInterface } from './theme';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
      Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    line-height: 1.6;
    background: ${(props: { theme: ThemePropInterface}) => props.theme.main.bg};
    color: ${(props: { theme: ThemePropInterface}) => props.theme.main.text};
    transition: all 0.3s linear;
  }

  button {
    font-size: 1em;
  }

  a {
    color: ${(props: { theme: ThemePropInterface}) => props.theme.main.text};
    text-decoration: none;
    font-size: 1.5em;
  }

`;

export default GlobalStyles;
