import React from 'react'
import SideMenu from './SideMenu';
import { useEffect, useState } from "react";
import { Links, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Sticky, StickyContainer } from 'react-sticky'
import { motion, AnimatePresence } from 'framer-motion'





const Sidebar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSideMenu, setShowSideMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const variants = {
    hidden: { opacity: 0, x: 500 },
    visible: { opacity: 1, x: 0 },
  };
  
  const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "portfolio",
      title: "Portfolio",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  return (
    <div className='nav-bar'>
      <nav className='logo'>
        <NavLink to="/"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <h1 exact='true' className='logo' id="logo" activeclassname="active" to="/">JH</h1>
        </NavLink>
        <NavLink exact="true" className="non-active" to='https://github.com/OoA61'>
          <FontAwesomeIcon icon={faGithub}/>
        </NavLink>
        <NavLink exact="true"  className="linked-icon non-active">
          <FontAwesomeIcon icon={faLinkedin}/>
        </NavLink>
      </nav>
      <ul className="right-header">
        {navLinks.map((nav) => (
          
          <li
          key={nav.id}
          >
          <a href={`#${nav.id}`} 
          className={`${
            active === nav.title ? "active" : "non-active"
          }`}
          onClick={() => setActive(nav.title)}>{nav.title}</a>
          {active === nav.title ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
        </li>
        ))}
      </ul>
      <div className='mobile-header'>
        <NavLink to="/"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <h1 exact='true' id="logo" className='mobile-logo' activeclassname="active" to="/">JH</h1>
        </NavLink>
        <FontAwesomeIcon icon={faBars} size="2xl" className='burger-bar' onClick={()=>setShowSideMenu(!showSideMenu)}/>
      </div>
        <AnimatePresence>
        {showSideMenu ?
          <motion.div 
            className='side-menu'
            initial='hidden'
            animate='visible'
            exit='hidden'
            variants={variants}
            transition={{ type: 'spring', stiffness: 300, damping: 30}}
          >
            <ul>
              {navLinks.map((nav) => (
                <li
                key={nav.id}
                >
                <a href={`#${nav.id}`} 
                className={`${
                  active === nav.title ? "active" : "non-active"
                }`}
                onClick={() => setActive(nav.title)}>{nav.title}</a>
              </li>
              ))}
              <li>
                <div className='menu-icon'>
                  <NavLink exact="true" className="non-active" to='https://github.com/OoA61'>
                    <FontAwesomeIcon icon={faGithub}/>
                  </NavLink>
                  <NavLink exact="true"  className="non-active" to='https://linkedin.com'>
                    <FontAwesomeIcon icon={faLinkedin}/>
                  </NavLink>
                </div>
              </li>
            </ul>
          </motion.div>
      : null}
      </AnimatePresence>
    </div>
    
  )
}

export default Sidebar
