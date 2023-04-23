import React from 'react'
import { Link } from 'react-router-dom'


const GallerieCard = (props) => {
  return (
      
      <Link to={props.to} style={{textDecoration:"none"}}>
        <figure className={props.className} >
            <img src={props.src} alt={props.alt} width="408" height={262}/>
            <figcaption>{props.category}</figcaption>
        </figure>
    </Link>
  )
}

export default GallerieCard
