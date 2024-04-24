import React from 'react'
import "./navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
      <h4 className='navHeader'>Financier<span className='point'>.</span></h4>
      <ul className='myUl'>
        <li className='navbarHome'>Home</li>
        <li><a href="hfeu">Solutions</a></li>
        <li><a href="eh">Services</a></li>
        <li><a href="kjfh">About</a></li>
        <li><a href="jkef">Contact us</a></li>
      </ul>
      <div className='navContainer'>
      <i  className="fa-solid fa-phone"></i>
      <p>123-489-9381</p>
      </div>
      <i className="fa-solid fa-bars"></i>
    </div>
  )
}

export default Navbar
