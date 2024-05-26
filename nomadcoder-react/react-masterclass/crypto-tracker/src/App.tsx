import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Router from './Router';
import reset from 'styled-reset';
import { ReactQueryDevtools } from 'react-query/devtools';
import { darkTheme, lightTheme } from './theme';
import { useState } from 'react';

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
  const [isDark, setIsDark] = useState(false);
  const toggleDark = () => setIsDark((current) => !current);

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Router isDark={isDark} toggleDark={toggleDark} />
        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </>
  );
}

export default App;
