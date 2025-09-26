import React, { useState } from 'react';
import './Navbar.css';
import naza_logo1 from '../../Assets/naza_logo1.png';
import { Link } from 'react-scroll';
import menu from '../../Assets/menu.png';


const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <Link activeclass='active' to='intro' smooth={true} offset={-100} duration={500}><img src={naza_logo1} alt="logo" className='logo' title='Naza Logo' /></Link>
      <div className="desktopMenu">
        <Link activeclass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeclass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeclass='active' to='myApps' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">My Projects</Link>
        <Link activeclass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Portfolio</Link>
        <Link activeclass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Clients</Link>
      </div>
      <button activeClass='active' className="desktopMenuBtn" onClick={()=>{
        document.getElementById('footer').scrollIntoView({behavior: 'smooth'});
      }}>Contact US</button>

      <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
      <div className="navMenu" style={{display: showMenu? 'flex': 'none'}}>
        <Link activeclass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeclass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>My Skills</Link>
        <Link activeclass='active' to='myApps' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>My Projects</Link>
        <Link activeclass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
        <Link activeclass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Clients</Link>
      </div>
    </nav>

  )
}

export default Navbar
