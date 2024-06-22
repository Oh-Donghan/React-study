/* eslint-disable react-refresh/only-export-components */
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { RecoilRoot } from 'recoil';
import { theme } from './theme.ts';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    font-weight: 300;
    font-family: "Source Sans 3", sans-serif;
    color: black;
    line-height: 1.2;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </RecoilRoot>
);
