import React from 'react'
import './Skill.css'

import { tecnologies } from '../../data/data'
import { useScroll } from '../../useHook/useScroll'
import { motion } from 'framer-motion'

import { titleSection, cardAnimation, cardHover } from '../../animation'

const Skills = () => {
  const [element, controls] = useScroll()

  return (
    <section className='margin-top' id='skills' ref={element}>
      <div>
        <motion.div
          variants={titleSection}
          animate={controls}
          transition={{ delay: 0.2, type: 'tween' }}
        >
          <h1 className='title'>Skills</h1>
          <div className='line'></div>
        </motion.div>

        <div className='grid-card'>
          {tecnologies.map(({ image, name, id }) => (
            <div key={id}>
              <motion.div
                className='card'
                variants={cardAnimation}
                animate={controls}
                transition={{ type: 'tween', duration: 0.5 }}
              >
                {name == 'hibernate' ? (
                  <img
                    src={image}
                    alt={name}
                    style={{ objectFit: 'contain' }}
                  />
                ) : (
                  <img src={image} alt={name} />
                )}
                <h3>{name}</h3>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
