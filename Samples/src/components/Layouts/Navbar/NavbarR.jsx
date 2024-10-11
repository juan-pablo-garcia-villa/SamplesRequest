import React from 'react'
import logo from '../../../assets/logo.png'
import './Navbar.css'
import menu from '../../../assets/lmenu.png'
export const NavbarR = () => {
  return (
    <div className='NavbarR'>
        <div className='LogoRContainer'>
        <img  className='LogoR' src={logo} alt="" />
        </div>
        <div className='MenuContainer'>

        <img className='Menu' src={menu} alt="" />
        </div>
    </div>
  )
}
