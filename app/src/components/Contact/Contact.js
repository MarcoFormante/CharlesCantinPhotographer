import React from 'react'
import Form from './Form'


const Contact = () => {
  return (
    <div className='contact__container'>
      <div className='contact__left-container'>
        <p>Envie d'un Shooting?</p>
        <p>Contactez-moi!</p>
        
      </div>
      <div className='contact__right-container'>
      <Form/>
      </div>
    </div>
  )
}

export default Contact
