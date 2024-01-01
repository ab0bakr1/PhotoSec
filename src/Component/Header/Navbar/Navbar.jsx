import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [NavBtn,setNavBtn] = useState("bar")
  const [NavMenu,setNavMenu] = useState("nav")
  const [Overlay,setOverlay] = useState("Overlay")


  const NavBar =()=>{
    NavBtn === "bar" ? setNavBtn("bar active") : setNavBtn("bar");
    NavMenu === "nav" ? setNavMenu("nav active") : setNavMenu("nav");
    Overlay === "Overlay" ? setOverlay("Overlay active") : setOverlay("Overlay")
  }
  return (
    <div className='navbar'>
        <button onClick={NavBar} className={NavBtn}>
            <span className='bar1'></span>
            <span className='bar2'></span>
            <span className='bar3'></span>
        </button>
        <div onClick={NavBar} className={Overlay}>
          <ul className={NavMenu}>
            <li><Link to="/">home</Link></li>
            <li><a href='#About'>about</a></li>
            <li><a href='#Portfolio'>portfolio</a></li>
            <li><a href='#Team'>team</a></li>
            <li><a href='#Contact'>contact</a></li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar