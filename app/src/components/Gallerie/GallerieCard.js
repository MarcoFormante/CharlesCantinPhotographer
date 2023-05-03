import React from 'react'
import { Link } from 'react-router-dom'
import Modifier from '../Modifier/Modifier'


const GallerieCard = (props) => {

 
  return (
      <div className='gallerie-card__container'>
      <Link to={props.to} style={{textDecoration:"none"}}>
        <figure className={props.className} >
            <img src={props.src} alt={props.alt} width="408" height={262}/>
        <figcaption>{props.category}</figcaption>
      </figure>
      </Link>
      {props.isLogged && <Modifier {...props} />}
      </div>
  )
}

export default GallerieCard
