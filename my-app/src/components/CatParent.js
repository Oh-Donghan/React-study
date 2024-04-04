import React, { useRef, useState } from 'react';
import Cat from './Cat';

// Cat안에 있는 image 사이즈를 알고 싶다! - ref
export default function CatParent() {
  const [height, setHeigtht] = useState(0);
  // const catRef = useRef();

  const catCallbackRef = (node) => {
    if (node !== null) {
      setHeigtht(node.getBoundingClientRect().height)
    }

  }

  console.log('부모 컴포넌트 CatParent');
  // console.log(catRef);

  const ageRef = useRef(1);
  // console.log(ageRef.current);

  return (
    <div>
      <h4> 고양이가 세상을 구한다 ️</h4>
      <div>
        <Cat a={"a"} ref={catCallbackRef} />
        <h3>나이: {ageRef.current}살</h3>
        <h4>키: {height}</h4>
        {/* <button onClick={() => alert(catRef.current.height)}>고양이의 크기를 알고싶어</button> */}
        <button onClick={() => ageRef.current = ageRef.current + 1}>새해</button>
        {/* <button onClick={() => setState(state + 1)}>테스트</button> */}
      </div>
    </div>
  );
}
