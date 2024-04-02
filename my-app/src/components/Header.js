import React from 'react';
import logo from '../logo.svg';

const Header = (props) => {
  return (
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <p className='aaa' />
      <a
        className='App-link'
        href='https://reactjs.org'
        target='_blank'
        rel='noopener noreferrer'
      >
        {props.title}
      </a>
    </header>
  );
};

export default Header;
