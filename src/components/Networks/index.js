import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

import './Networks.css'
const Networks = () => {
  return (
    <div className='networks'>
      <ul>
        <li>
          <a
            href='https://www.linkedin.com/in/alexisaurisbellido/'
            target='_blank'
            rel='noopener'
          >
            <BsLinkedin />
          </a>
        </li>
        <li>
          <a href='https://github.com/Yauris12' target='_blank' rel='noopener'>
            <BsGithub />
          </a>
        </li>
      </ul>
      <div className='n-line'></div>
    </div>
  )
}

export default Networks
