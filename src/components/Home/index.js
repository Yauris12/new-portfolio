import React from 'react'
import './Home.css'

import { motion } from 'framer-motion'

import { headerAnimation, titleSection } from '../../animation'
import { useScroll } from '../../useHook/useScroll'

const Home = () => {
  const [element, controls] = useScroll()
  const text1 = ['Hi', 'my', 'name', 'is']

  const text = ['Alexis', 'Auris']

  const text3 = ["I'm", 'a', 'Full', 'Stack', 'Developer']

  const spanVariants = {
    visible: { y: 0, scaleY: 1 },
    hover: {
      y: [-1, -2, -2.8, 0.9, 0],
      scaleY: [1, 1.3, 0.8, 1, 1.2],
      color: '#e4007c',
    },
  }

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  }

  const item = {
    visible: {
      opacity: 1,
      y: [-1, -1 - 9, -2.7, 1],
      scaleY: [1, 1.3, 0.8, 1],
    },
    hidden: {
      opacity: 0,
    },
  }
  return (
    <section id='home' ref={element}>
      <motion.div
        variants={headerAnimation}
        animate={controls}
        transition={{ delay: 0.2, type: 'tween' }}
      >
        <motion.p
          className='text-present'
          variants={list}
          initial='hidden'
          animate='visible'
        >
          {text1.map((word, id) => (
            <>
              {word.split('').map((letter, id) => (
                <motion.span variants={item} key={id}>
                  <span key={id}>{letter}</span>
                </motion.span>
              ))}
              &nbsp;
            </>
          ))}
        </motion.p>

        <motion.h1
          variants={list}
          initial='hidden'
          animate='visible'
          className='name'
        >
          {text.map((word, id) => (
            <>
              {word.split('').map((letter, id) => (
                <motion.span variants={item} key={id}>
                  <motion.span
                    key={id}
                    variants={spanVariants}
                    initial='visible'
                    whileHover='hover'
                  >
                    {letter}
                  </motion.span>
                </motion.span>
              ))}
              &nbsp;
            </>
          ))}
        </motion.h1>

        <motion.h1
          variants={list}
          initial='hidden'
          animate='visible'
          className='subtitle'
        >
          {text3.map((word, id) => (
            <>
              {word.split('').map((letter, id) => (
                <motion.span variants={item} key={id}>
                  <motion.span
                    key={id}
                    variants={spanVariants}
                    initial='visible'
                    whileHover='hover'
                  >
                    {letter}
                  </motion.span>
                </motion.span>
              ))}
              &nbsp;
            </>
          ))}
        </motion.h1>
        <motion.p
          variants={titleSection}
          initial='hidden'
          animate='show'
          transition={{
            duration: 3,
          }}
          className='description'
        >
          A passionate individual , specializing in building exceptional digital
          experiences and scalable to create impact.
        </motion.p>

        <motion.button
          variants={titleSection}
          initial='hidden'
          animate='show'
          transition={{
            duration: 3,
          }}
          className='cv-download'
          href='https://drive.google.com/file/d/1Gs9FzlFHSN_i4AwB_W79NoulB3kx4p_e/view'
        >
          <a
            className='red-dow'
            href='https://drive.google.com/file/d/1Gs9FzlFHSN_i4AwB_W79NoulB3kx4p_e/view'
            target='_blank'
            rel='noopener'
          >
            Download Cv
          </a>
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Home
