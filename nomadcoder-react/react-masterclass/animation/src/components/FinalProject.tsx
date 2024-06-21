import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';

const buttonVariants = {
  clicked: {
    scale: 1.2,
    transition: { type: 'spring', stiffness: 300 },
  },
  initial: {
    scale: 1,
  },
};

export default function FinalProject() {
  const [id, setId] = useState<null | string>(null);
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);

  const getTransformOrigin = (index: number) => {
    if (index === 1) {
      return 'bottom right';
    } else if (index === 4) {
      return 'top left';
    } else return;
  };

  return (
    <Wrapper>
      <Grid>
        {[1, 2, 3, 4].map((n) => (
          <Box
            variants={{
              initial: {
                scale: 1,
                transformOrigin: getTransformOrigin(n)
              },
              hover:
                n === 1 || n === 4
                  ? { scale: 1.3, transformOrigin: getTransformOrigin(n) }
                  : {},
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
            <Box layoutId={id} style={{ width: 400, height: 200 }} />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  height: 200px;
  border-radius: 40px;
  background-color: rgba(255, 255, 255, 1);
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
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #00a5ff;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;


interface IClicked {
  $isClicked: boolean;
}

const SwitchButton = styled(motion.button)<IClicked>`
  margin-top: 50px;
  background-color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  font-weight: bold;
  color: ${props => props.$isClicked ? 'pink' : 'blue'};
`;
