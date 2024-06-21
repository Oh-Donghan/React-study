import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Animatepresence from "./components/Animatepresence";

// import GestureAndDrag from "./components/GestureAndDrag";
// import MotionValues from "./components/MotionValues";
// import SvgAnimation from "./components/SvgAnimation";

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Animatepresence />
        {/* <GestureAndDrag /> */}
        {/* <MotionValues /> */}
        {/* <SvgAnimation /> */}
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
    background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
    overflow-x: hidden;
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

// const Box = styled(motion.div)`
//   width: 200px;
//   height: 200px;
//   border-radius: 40px;
//   background-color: rgba(255, 255, 255, 1);
//   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
// `;
