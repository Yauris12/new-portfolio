import React from 'react'
import { useScroll } from '../../useHook/useScroll'
import { motion } from 'framer-motion'
import { titleSection, cardAnimation } from '../../animation'

import { projects } from '../../data/data'

import './projects.css'
const Projects = () => {
  const [element, controls] = useScroll()

  return (
    <section className='projects-sec margin-top' id='projects' ref={element}>
      <motion.div
        variants={titleSection}
        animate={controls}
        transition={{
          duration: 1,
        }}
      >
        <h1 className='title'>Projects</h1>
        <div className='line'></div>
      </motion.div>
      <div className='grid-projects'>
        {projects.map((project) => {
          return (
            <motion.div
              key={project.id}
              variants={cardAnimation}
              animate={controls}
              transition={{ type: 'tween', duration: 0.5 }}
              className='card-project'
            >
              <div className='face-card front'>
                <img className='img-project' src={project.image} alt='' />
                <h3>{project.name}</h3>
              </div>
              <div className='face-card back'>
                <h3>{project.name}</h3>
                <h4>technologies</h4>
                <ul>
                  {project.tecnologies.map((data) => {
                    return (
                      <p className='list-tecnologies' key={data.id}>
                        {data}
                      </p>
                    )
                  })}
                </ul>

                <h4>{project.description}</h4>

                <ul className='code-links'>
                  {project.links.repository && (
                    <p>
                      <a
                        href={project.links.repository}
                        target='_blank'
                        rel='noopener'
                      >
                        {' '}
                        GITHUB
                      </a>
                    </p>
                  )}

                  {project.links.page && (
                    <p>
                      <a
                        href={project.links.page}
                        target='_blank'
                        rel='noopener'
                      >
                        DEMO
                      </a>
                    </p>
                  )}
                </ul>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
