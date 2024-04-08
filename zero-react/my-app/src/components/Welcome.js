import React from 'react';
import image from '../images/image.JPG';

export default function Welcome({ withImg, firstName, lastName }) {
  return (
    <>
      {withImg && <img src={image} alt='nightImage' height='200' />}
      <div>Hello!</div>
      <div>
        <span>{firstName}</span>
        {lastName}
      </div>
    </>
  );
}
