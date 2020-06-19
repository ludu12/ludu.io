import { createGlobalStyle } from 'styled-components';
import { ThemePropInterface } from './theme';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
      Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    line-height: 1.25;
    background: ${(props: { theme: ThemePropInterface }) =>
      props.theme.main.bg};
    color: ${(props: { theme: ThemePropInterface }) => props.theme.main.text};
    transition: all 0.3s linear;
    margin-block-start: 0.5rem;
    margin-block-end: 0.5rem;
  }
  
  h1 {
    font-size: 2.5rem;
  }
  
  h2 {
    font-size: 2rem;
  }
  
  a {
    color: ${(props: { theme: ThemePropInterface }) =>
      props.theme.main.primary};
  }

  button {
    font-size: 1rem;
  }
`;

export default GlobalStyles;
