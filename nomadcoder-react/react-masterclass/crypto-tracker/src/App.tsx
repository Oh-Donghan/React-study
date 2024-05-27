import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Router from './Router';
import reset from 'styled-reset';
import { ReactQueryDevtools } from 'react-query/devtools';
import { darkTheme, lightTheme } from './theme';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from './atoms';

const GlobalStyle = createGlobalStyle`
${reset}
* {
  box-sizing: border-box;
}
  body {
    font-family: "Source Sans 3", sans-serif;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor}
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

function App() {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Router />
        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </>
  );
}

export default App;
