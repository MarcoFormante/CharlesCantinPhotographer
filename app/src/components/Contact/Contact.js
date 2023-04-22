import React from 'react'

const Contact = () => {
  return (
    <div className='contact__container'>
      <div className='contact__left-container'>
        <p>Envie d'un Shooting?</p>
        <p>Contactez-moi!</p>
      
      </div>
      <div className='contact__right-container'>
        <form>
          <label htmlFor="name">Name</label>
          <input type='text' id='name' name='name' required />
          <label htmlFor="email">Email</label>
          <input type='email' id='email' name='email'  required/>
          <label htmlFor="prestation">Prestation</label> 
          <select name='prestation' id='prestation'>
              <option value=""></option>
              <option value="Mariage">Mariage</option>
              <option value="Grossesse">Grossesse</option>
              <option value="Bébé">Bébé</option>
              <option value="Bapteme">Bapteme</option>
              <option value="Evenement">Evenement</option>
              <option value="Juste moi">Juste moi</option>
              <option value="Couple">Couple</option>
              <option value="Autre">Autre</option>
          </select>
          <label htmlFor="message">Message</label> 
          <textarea name='message' id='message' required/>
          <input type='submit' name='submit' id='submit' value="Envois"/>
        </form>
      </div>
    </div>
  )
}

export default Contact
