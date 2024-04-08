import React, { useEffect, useState } from 'react';

export default function complete() {
  const [choice, setChoice] = useState({ device: '', accessory: '' });

  useEffect(() => {
    const device = localStorage.getItem('selected_device');
    const accessory = localStorage.getItem('selected_accessory');

    setChoice({ device, accessory })
  }, []);
  return (
    <div className='container'>
      <div className='wrapper'>
        <h3 className='title'>
          OOO님이 선택하신 장비는 {choice.device}이고,
          선택하신 악세서리는 {choice.accessory}입니다.
        </h3>
      </div>
    </div>
  )
}
