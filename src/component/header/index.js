// import React, { useState, setState } from 'react'
import React from 'react'
import './styles.scss'
import * as Logo from 'images/green.png'
import { Link } from 'react-router-dom'

const Header = () => {
  // const [isOpen, setIsOpen] = useState(false)
  // const toggle = () => setIsOpen(!isOpen)
  // const [isOpen, setIsOpen] = useState(false)
  //
  // function toggle() {
  //   state ? setState(false) : setState(true);
  // }
  return (
    // <nav data-test="headerComponent">
    //   <div className="wrap">
    //     <div className="logo">
    //       <img data-test="logoIMG" src={Logo} alt="Logo" />
    //     </div>
    //     <div className="text">Where sustainability meets technology.</div>
    //
    // </div>
    // <ul>
    //   <li><Link to="/">Home</Link></li>
    //   <li><Link to="/hello">Hello</Link></li>
    // </ul>
    // </nav>
    <nav className="navbar">
    <img className="logo" data-test="logoIMG" src={Logo} alt="Logo" />
    <div className="text">Where sustainability meets technology.</div>

    <nav className="navbar navbar-expand-lg navbar-dark navbar-inverse" data-test="headerComponent">

          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to='/' className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/hello' className="nav-link">Hello</Link>
            </li>
            <li className="nav-item">
              <Link to='/headline' className="nav-link">Headline</Link>
            </li>
          </ul>
      </nav>
      </nav>

  )
}
// <nav className="navbar">
// <img className="logo" data-test="logoIMG" src={Logo} alt="Logo" />
// <div className="text">Where sustainability meets technology.</div>
//
// <NavLink className="navbar navbar-expand-lg navbar-dark navbar-inverse" data-test="headerComponent">
//
//     <button className={isOpen ? 'm-menu -active' : 'm-menu '} onClick={toggle} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav m-menu__list">
//         <li className="nav-item active m-menu__listitem">
//           <Link to='/' className="nav-link m-menu__link">Home <span className="sr-only">(current)</span></Link>
//         </li>
//         <li className="nav-item m-menu-item">
//           <Link to='/hello' className="nav-link m-menu__link">Hello</Link>
//         </li>
//       </ul>
//     </div>
//   </NavLink>
//   </nav>
// <nav className="navbar">
// <img className="logo" data-test="logoIMG" src={Logo} alt="Logo" />
// <div className="text">Where sustainability meets technology.</div>
//
// <nav className="navbar navbar-expand-lg navbar-dark navbar-inverse" data-test="headerComponent">
//
//     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav">
//         <li className="nav-item active">
//           <Link to='/' className="nav-link">Home <span className="sr-only">(current)</span></Link>
//         </li>
//         <li className="nav-item">
//           <Link to='/hello' className="nav-link">Hello</Link>
//         </li>
//       </ul>
//     </div>
//   </nav>
//   </nav>

export default Header
