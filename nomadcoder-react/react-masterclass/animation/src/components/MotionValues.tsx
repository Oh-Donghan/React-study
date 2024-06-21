import { motion, useMotionValue, useScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';

export default function MotionValues() {
  // MotionValue는 리액트에서 리랜더링을 발생시키지 않는다 (x,y축이 이동할때 엄청나게 많은 값이 바뀌는데
  // 그럴때마다 랜더링이되면 안좋기 때문에 사용함)
  const x = useMotionValue(0);
  // z축 rotate변경 [대상, 범위, 액션(값)] - 대상, 인풋, 아웃풋
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  // 그라디언트 변경 [대상, 범위, 액션(값)]
  const gradient = useTransform(
    x,
    [-800, 800],
    [
      'linear-gradient(135deg, rgb(0, 171, 238), rgb(8, 62, 154))',
      'linear-gradient(135deg, rgb(85, 208, 81), rgb(221, 214, 17))',
    ]
  );

  // 스크롤 액션
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  return (
    <Wrapper style={{ background: gradient }}>
      <Box
        style={{ x, rotateZ, scale }}
        drag='x'
        dragSnapToOrigin
      />
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;



const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 40px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
