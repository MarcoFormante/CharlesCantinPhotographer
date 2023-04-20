import React from 'react'

const TarifCard = (props) => {
  return (
      <div className='tarif__card'>
          <h3 className='tarifs__title'>{props.title}</h3>
          <div className={`description ${"description" + props.id}`}>
              <p className='tarif__description'>{props.description}</p>
              <p className='tarif__price'>{props.price}</p>
          </div>
    </div>
  )
}

export default TarifCard
