import React from 'react'
import './styles.scss'
import Logo from './../../images/green.png'

const Header = (props) => {
  return (
    <header>
      <div className="wrap">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="text">
          Where sustainability meets technology.
        </div>
      </div>
    </header>
  )
}

export default Header
