import React from 'react'
import "./css/header.css"
import logo from "./resumeLogo.png"

const Header = () => {
  return (
    <div className='Head'>
        <h1>Buid Your <span>Resume!</span> For <span>Free</span></h1>
        <img src={logo} alt="" width="30%"/>
    </div>
  )
}

export default Header