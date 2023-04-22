import React from 'react'
import { Link } from 'react-router-dom'


const GallerieCard = (props) => {

 
  return (
      
      <Link to={props.to} style={{textDecoration:"none"}}>
        <figure className={props.className} >
            <img src={props.src} alt={props.alt}/>
            <figcaption>{props.category}</figcaption>
        </figure>
    </Link>
  )
}

export default GallerieCard
