import { createGlobalStyle } from 'styled-components';

// color: ${({ theme: { colors } }: { theme: { colors: { primary: string } } }) => colors.primary};


const GlobalStyles = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
      Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    line-height: 1.6;
    font-size: 18px;
  }

  a {
    color: ${({ theme: { colors } }: { theme: { colors: { primary: string } } }) => colors.primary};
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
`;

export default GlobalStyles;
