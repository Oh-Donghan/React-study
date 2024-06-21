import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Box />
      </Wrapper>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    font-weight: 300;
    font-family: 'Source Sans Pro', sans-serif;
    color: black;
    line-height: 1.2;
    background: linear-gradient(135deg, #e09, #d0e);
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
