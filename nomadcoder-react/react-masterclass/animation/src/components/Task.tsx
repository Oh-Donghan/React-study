import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const buttonVariants = {
  clicked: {
    scale: 1.2,
    transition: { type: 'spring', stiffness: 300 },
  },
  initial: {
    scale: 1,
  },
};

interface IClicked {
  $isClicked: boolean;
}

export default function App() {
  const [id, setId] = useState(null);
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);

  const getTransformOrigin = (index: number) => {
    if (index === 1) {
      return 'bottom right'
    } else if (index === 4) {
      return 'top left'
    } else return
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
      <Grid>
        {[1, 2, 3, 4].map((n) => (
          <Box
            variants={{
              initial: {
                scale: 1,
                transformOrigin: getTransformOrigin(n)
              },
              hover: (n === 1 || n === 4) ? { scale: 1.1, transformOrigin: getTransformOrigin(n) } : {},
            }}
            initial='initial'
            whileHover='hover'
            onClick={() => setId(n + '')}
            key={n}
            layoutId={n + ''}
          >
            {!clicked && n === 2 ? <Circle layoutId='circle' /> : null}
            {clicked && n === 3 ? <Circle layoutId='circle' /> : null}
          </Box>
        ))}
      </Grid>
      <SwitchButton
        onClick={toggleClicked}
        variants={buttonVariants}
        animate={clicked ? 'clicked' : 'initial'}
        $isClicked={clicked}
      >
        Switch
      </SwitchButton>
      <AnimatePresence>
        {id === '1' || id === '4' ? (
          <Overlay
            onClick={() => setId(null)}
            initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
            animate={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            exit={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
          >
            <Box layoutId={id} style={{ width: 400, height: 200, backgroundColor: 'white' }} />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 50vw;
  gap: 10px;
`;

const Box = styled(motion.div)`
  height: 200px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const SwitchButton = styled(motion.button)<IClicked>`
  margin-top: 50px;
  background-color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  font-weight: bold;
  color: ${props => props.$isClicked ? 'orange' : 'blue'};
`;