import { createGlobalStyle } from 'styled-components';

export const AppGlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  }

  body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
`;
