import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';

const box = {
  entry: (back: boolean) => {
    return {
      x: back ? -500 : 500,
      opacity: 0,
      scale: 0,
    };
  },
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: (back: boolean) => {
    return {
      x: back ? 500 : -500,
      opacity: 0,
      scale: 0,
      transition: {
        duration: 0.3,
      },
    };
  },
};

// Slider 기능
export default function AnimatePTwo() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);

  const nextPlease = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };
  const prevPlease = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };

  return (
    <Wrapper>
      <AnimatePresence custom={back}>
        <Box
          variants={box}
          custom={back}
          initial='entry'
          animate='center'
          exit='exit'
          key={visible}
        >
          {visible}
        </Box>
      </AnimatePresence>
      <BtnBox>
        <Button onClick={prevPlease} $highlight={visible === 1}>
          prev
        </Button>
        <Button onClick={nextPlease} $highlight={visible === 10}>
          next
        </Button>
      </BtnBox>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  top: 130px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const BtnBox = styled.div`
  display: flex;
  gap: 10px;
`;

interface IProps {
  $highlight: boolean;
}

const Button = styled.button<IProps>`
  padding: 2px 8px;
  background-color: ${(props) => (props.$highlight ? '#a8a8a8' : '#fff')};
  border: 1px solid #000;
  font-size: 18px;
`;
