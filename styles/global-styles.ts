import { createGlobalStyle } from 'styled-components';
import { ThemePropInterface } from './theme';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
      Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    line-height: 1.6;
    font-size: 18px;
    background: ${(props: { theme: ThemePropInterface}) => props.theme.main.bg};
  }

  a {
    color: ${(props: { theme: ThemePropInterface}) => props.theme.main.text};
    text-decoration: none;
    font-size: 24px;
  }
  
  a:hover {
    text-decoration: underline;
  }
`;

export default GlobalStyles;
