
import React, {useEffect, useState} from 'react'
import { useForm, ValidationError } from '@formspree/react';


const Form = () => {
    
    const [name, setName] = useState("");
    const [warning, setWarning] = useState(false);
   
  
    useEffect(() => {
     let nameWarning = name.match(/[123456987]/);
         handleWarning(nameWarning)

        return () => {
            
        }

    },[name])

  
    const handleWarning = (nameValue) => {
         if (nameValue) {
             setWarning(nameValue)
           
            
         } else {
             setWarning(false)
         }
      
       
    }
   
    
    const [state, handleSubmit] = useForm("mwkjpbdv");
    if (state.succeeded) {
        return <p>Votre message a ètè envoyé</p>;
    }

    
  return (
    <>
      <form onSubmit={!warning && name.length > 2 ? handleSubmit : handleWarning}>
              <label htmlFor="name" style={warning ? {color:"red"} : {color:"white"}}>{warning ? "QUE LES CHARACTER SONT ACCEPTE": "Name"}</label>
              <input type='text' id='name' name='name' maxLength="30" onChange={(e)=> setName(e.target.value)} required />
          <label htmlFor="email">Email</label>
        <input type='email' id='email' name='email'  maxLength="50" required />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
              <label htmlFor="prestation">Prestation</label> 
             
          <select name='prestation' id='prestation' required>
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
              <textarea name='message' id='message' required />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
                />
          <input type='submit' name='submit' id='submit' disabled={state.submitting} value="Envois"/>
          </form>
      </>
      
      
    )
    
    
}

export default Form
