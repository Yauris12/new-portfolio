import React, { useRef, useState } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser'

import { useScroll } from '../../useHook/useScroll'
import { motion } from 'framer-motion'
import { titleSection, leftAnimation, rightAnimation } from '../../animation'

const {
  REACT_APP_SERVICE_ID: SERVICE_ID,
  REACT_APP_TEMPLATE_ID: TEMPLATE_ID,
  REACT_APP_PUBLIC_KEY: PUBLIC_KEY,
} = process.env

const Contact = () => {
  const [element, controls] = useScroll()

  const [succesMessage, setSuccesMessage] = useState(false)
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        setSuccesMessage(true)
        e.target.reset()

        setTimeout(() => {
          setSuccesMessage(false)
        }, 3000)
      },
      (error) => {
        console.log(error.text)
      }
    )
  }

  return (
    <section ref={element} id='contact'>
      <motion.div
        variants={titleSection}
        animate={controls}
        transition={{
          duration: 1,
        }}
      >
        <h1 className='title'>Contact Me</h1>
        <div className='line'></div>
      </motion.div>

      <div className='flex-contact'>
        <motion.div
          className='leftContact'
          variants={leftAnimation}
          animate={controls}
          transition={{ type: 'tween', duration: 0.5 }}
        >
          <h2>Get in touch</h2>

          <p>Email: alexisaube288@gmail.com</p>
          <p>Phone: +51 970 993 166 </p>

          <p>Submit the form below or shoot me an email so we can chat</p>
        </motion.div>
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          variants={rightAnimation}
          animate={controls}
          transition={{ type: 'tween', duration: 0.5 }}
        >
          <div className='input-container'>
            <input
              className='form-control rounded-0'
              name='username'
              placeholder='Name'
              type='text'
              required
            />
            <input
              className='form-control rounded-0'
              name='email'
              placeholder='Email'
              type='email'
              required
            />
          </div>
          <textarea
            className='form-control rounded-0'
            name='message'
            placeholder='Message'
            rows='5'
            required
          />
          {succesMessage && (
            <p style={{ textAlign: 'center', marginTop: '10px' }}>
              The message has been sent successfully. I will be in contact
              shortly
            </p>
          )}
          <div className='container-button'>
            <input
              className='button-form'
              type='submit'
              value='Enviar Formulario'
            />
          </div>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
