import React from 'react';
import './styles.scss';
import * as Logo from 'images/green.png';

const Header = (props) => {
  return (
    <header data-test="headerComponent">
      <div className="wrap">
        <div className="logo">
          <img data-test="logoIMG" src={Logo} alt="Logo" />
        </div>
        <div className="text">
          Where sustainability meets technology.
        </div>
      </div>
    </header>
  )
}

export default Header
