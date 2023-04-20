import React from 'react'

const GallerieCard = (props) => {
  return (
    <figure className={props.className} >
          <img src={props.src} alt={props.alt}/>
          <figcaption>{props.category}</figcaption>
    </figure>
  )
}

export default GallerieCard
