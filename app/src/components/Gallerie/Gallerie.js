import React from 'react'
import GallerieCard from './GallerieCard'
import data_gallerie from './data-gallerie'


const Gallerie = () => {
  

  return (
    <div className='gallerie-container'>
      {
        data_gallerie.map((data) => {
       
        return (
          <GallerieCard src={data.src} alt={data.alt} category={data.caterory} key={data.id} className={data.id === 1 ? "card__center--top" : data.id === 4 ?  "card__center--bottom" : "gallerie__card" } />
        )
       
      })}
    </div>
  )
}

export default Gallerie
