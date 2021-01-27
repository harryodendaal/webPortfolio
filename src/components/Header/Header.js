import React, { useState } from 'react'
const Header = () => {

  const [extraClass, setExtraClass] = useState('')
  const [trans, setTrans] = useState('transparent')

  const handleClick = () => {
    if (extraClass === '') {
      setExtraClass('active')
    } else {
      setExtraClass('')
    }
  }

  document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
      setTrans("#29323c")
    } else {
      setTrans('transparent')
    }
  })

  return (
    <section id="header">
      <div className="header container" style={{ backgroundColor: trans }}>
        <div className="nav-bar">
          <div className="brand">
            <a href="#hero">
              <h1><span>H</span>arry <span>O</span>dendaal</h1>
            </a>
          </div>
          <div className="nav-list">
            <div onClick={handleClick} className={'hamburger ' + extraClass}><div className="bar"></div></div>
            <ul className={extraClass}>
              <li onClick={handleClick} ><a href="#hero" data-after="Home">Home</a></li>
              <li onClick={handleClick}><a href="#services" data-after="Service">Services</a></li>
              <li onClick={handleClick}><a href="#projects" data-after="Projects">Projects</a></li>
              <li onClick={handleClick}><a href="#about" data-after="About">About</a></li>
              <li onClick={handleClick}><a href="#contact" data-after="Contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
