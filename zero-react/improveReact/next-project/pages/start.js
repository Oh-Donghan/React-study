import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchUser } from '../src/modules/api';
import BottomButton from '../src/components/BottomButton';

export default function start() {
  const [name, setName] = useState('제로베이스');
  const router = useRouter();

  useEffect(() => {
    async function fetch() {
      const res = await fetchUser();
      setName(res.name);
    }

    fetch();
  }, []);

  return (
    <div className='container'>
      <div className='wrapper'>
        <h3 className='title'>
          {name}님, 입사를 축하드립니다! 원하시는 개발 장비를 선택해주세요.
        </h3>
      </div>
      <BottomButton onClick={() => router.push('/device-choice')}>
        장비 선택 화면으로 넘어가기
      </BottomButton>
    </div>
  );
}
