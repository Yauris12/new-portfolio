import React from 'react'
import './Sidebar.css'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'

const Sidebar = ({ closeSidebar, isSidebarOpen }) => {
  return (
    <div>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className='closeSidebar'>
          <AiOutlineClose onClick={closeSidebar} />
        </div>

        <ul className='nav-sidebar'>
          <li>
            <Link
              to='home'
              activeClass='active'
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={closeSidebar}
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
              onClick={closeSidebar}
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
              onClick={closeSidebar}
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
              onClick={closeSidebar}
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
              onClick={closeSidebar}
            >
              Contact
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  )
}

export default Sidebar
