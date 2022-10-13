import React from 'react'
import { useScroll } from '../../useHook/useScroll'
import './About.css'
import { motion } from 'framer-motion'
import { titleSection, leftAnimation, rightAnimation } from '../../animation'

const About = () => {
  const [element, controls] = useScroll()

  return (
    <section id='about' ref={element}>
      <motion.div
        variants={titleSection}
        animate={controls}
        transition={{
          duration: 1,
        }}
      >
        <h1 className='title'>About</h1>
        <div className='line'></div>
      </motion.div>

      <div className='wrapper-content'>
        <motion.h2
          className='about__subti'
          variants={leftAnimation}
          animate={controls}
          transition={{ type: 'tween', duration: 0.5 }}
        >
          Hi Everyone, I am Alexis Auris Bellido, nice to meet you. from Lima,
          Peru.
        </motion.h2>
        <motion.div
          variants={rightAnimation}
          animate={controls}
          transition={{ type: 'tween', duration: 0.5 }}
          className='about__description'
        >
          I am passionate about building excellent software that improves the
          lives of those around me. I specialize in creating software for
          clients ranging from individuals and large enterprise corporations.
        </motion.div>
      </div>

      <motion.h2
        variants={rightAnimation}
        animate={controls}
        transition={{ type: 'tween', duration: 0.5 }}
        className='softskill'
      >
        I am a creative person, agile, adaptable to changes, proactive
      </motion.h2>
    </section>
  )
}

export default About
