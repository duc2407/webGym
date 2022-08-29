import React from 'react'
import './Footer.css'
import ig from '../../assets/instagram.png'
import github from '../../assets/github.png'
import linke from '../../assets/linkedin.png'
import logo from '../../assets/logo.png'
function Footer() {
  return (
    <div className="Footer-container">
      <hr/>
      <div className="footer">
      <div className="blur footer-blur"></div>
        <div className="social-links">
          <a href="https://github.com/duc2407/"><img src={github} alt="" /></a>
          <a href="https://www.instagram.com/n.mihduc__/"><img src={ig} alt="" /></a>
          <a href="https://www.instagram.com/n.mihduc__/"><img src={linke} alt="" /></a>
        </div>
        <div className="logo-f">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer