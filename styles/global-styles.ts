import { createGlobalStyle } from 'styled-components';
import { ThemePropInterface } from './theme';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
      Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 16px;
    background: ${(props: { theme: ThemePropInterface }) =>
      props.theme.main.bg};
    color: ${(props: { theme: ThemePropInterface }) => props.theme.main.text};
    transition: all 0.3s linear;
  }
  
  a {
    text-decoration: none;
    color: ${(props: { theme: ThemePropInterface }) =>
      props.theme.main.primaryVarient};
      
    &:hover {
      text-decoration: underline;
      color: ${(props) => props.theme.main.primary};
    }
  }

  button {
    font-size: 1rem;
  }
`;

export default GlobalStyles;
