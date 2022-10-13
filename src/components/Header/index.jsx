import React from 'react'
import './header.css'
import { motion } from 'framer-motion'
import { navbarAnimation } from '../../animation'
import { Link } from 'react-scroll'
import { BiMenu } from 'react-icons/bi'
const Header = ({ openSidebar }) => {
  return (
    <motion.nav
      className='nav'
      variants={navbarAnimation}
      initial='hide'
      animate='show'
      transition={{
        duration: 1,
        type: 'spring',
        ease: 'easeInOut',
        delay: 0.5,
      }}
    >
      <div className='nav_wrapper'>
        <div>
          <h4 className='logo-por'>
            <Link to='home' spy={true} smooth={true} offset={50} duration={500}>
              Yaube
            </Link>
          </h4>
        </div>
        <ul className='nav-link'>
          <li>
            <Link
              to='home'
              activeClass='active'
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='about'
              activeClass='active'
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to='skills'
              activeClass='active'
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to='projects'
              activeClass='active'
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to='contact'
              activeClass='active'
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
        <button type='button' onClick={openSidebar} className='nav-toggle'>
          <BiMenu />
        </button>
      </div>
    </motion.nav>
  )
}

export default Header
