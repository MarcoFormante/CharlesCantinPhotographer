import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ModifierCategory from './ModifierCategory';

const Modifier = ({...props}) => {
  const [modale,setModale]=useState()
 
  return (
    <>
    <div className='modifier'>
        <div className='modifier__container'> 
         
        <span className='modifier__item modifier__item--modify' onClick={()=> setModale(<ModifierCategory {...props} />)}> Modify</span>
        <span className='modifier__item modifier__item--view'><Link to={props.to}>View</Link></span>
        <span className='modifier__item modifier__item--delete'>Delete</span>
      </div>
    </div>
     {modale} 
      </>
  )
}

export default Modifier
