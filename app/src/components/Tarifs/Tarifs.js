import React from 'react'
import { data_tarifs, data_tarifs__right__description } from './data_Tarifs'
import TarifCard   from './TarifCard'
import { Link } from 'react-router-dom'

const Tarifs = () => {
  return (
    <div className='tarifs__container'>
      <div className='tarifs__left__container'>

        {data_tarifs.map(data => {
          return (
            <TarifCard title={data.title}
              description={data.description}
              price={data.price}
              key={data.title + data.id}
              id={data.id}
            />
          )
        })}
      </div>

      <div className='tarifs__right__container'>
        {data_tarifs__right__description.map(data => {
          return (
            <div className="tarif__right__wrapper" key={Math.random()*Math.random()*15}>
              <p className='tarifs__right__title1'>{data.description1}</p>
              <p className='tarifs__right__title2'>{data.description2}</p>
                <Link to={data.to} className='linkBtn'>
                  <button className='btn__contact'>
                  {data.btnText}
                </button>
                </Link> 
                </div>
            
          )
        })}
        

      </div>


      
    </div>
  )
}

export default Tarifs
