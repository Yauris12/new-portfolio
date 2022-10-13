import React, { useState } from 'react'
import './ScroolTop.css'
import { BiUpArrow } from 'react-icons/bi'

const ScroolTop = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop

    if (scrolled > 500) {
      setVisible(true)
    } else if (scrolled <= 500) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0 })
  }

  window.addEventListener('scroll', toggleVisible)

  return (
    <>
      {visible && (
        <div className='scrollToTop' onClick={scrollToTop}>
          <BiUpArrow />
        </div>
      )}
    </>
  )
}

export default ScroolTop
