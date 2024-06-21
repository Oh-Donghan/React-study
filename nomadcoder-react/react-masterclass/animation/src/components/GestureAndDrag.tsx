import { motion } from 'framer-motion';
import { useRef } from 'react';
import styled from 'styled-components';

const boxVariants = {
  hover: { rotateZ: 90 },
  click: { borderRadius: '100px' },
};

function GestureAndDrag() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <BiggerBox ref={biggerBoxRef}>
        <Box
          variants={boxVariants}
          drag
          dragSnapToOrigin
          dragElastic={0.5}
          dragConstraints={biggerBoxRef}
          whileHover='hover'
          whileTap='click'
        />
      </BiggerBox>
    </>
  );
}

export default GestureAndDrag;

const BiggerBox = styled.div`
  width: 450px;
  height: 450px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* overflow: hidden; */
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 40px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
