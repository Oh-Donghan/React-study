import React, { useState } from 'react';
import BoilingVerdict from './BoilingVerdict';

const scaleNames = {
  c: 'Celsius', // 섭씨
  f: 'Fahrenheit', // 화씨
};

export default function TemperatureInput(props) {
  function handleChange(e) {
    props.onTemperatureChange({
      scale: props.scale,
      temperature: e.target.value,
    });
  }

  const scale = scaleNames[props.scale];

  return (
    <fieldset>
      <legend>Enter temperature in {scale}:</legend>
      <input value={props.temperature} onChange={handleChange} />
      <BoilingVerdict
        scale={props.scale}
        temperature={parseFloat(props.temperature)}
      />
    </fieldset>
  );
}
