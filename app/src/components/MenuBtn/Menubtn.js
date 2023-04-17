import React from 'react'
import './Menubtn.scss'


const Menubtn = (props) => {
  
  return (
    <div className='menu-btn' onClick={props.onClick}>
      <span className={`menu-btn__line ${props.toggleMenu}`}></span>
      <span className={`menu-btn__line ${props.toggleMenu}`}></span>
      <span className={`menu-btn__line ${props.toggleMenu}`}></span>
    </div>
  )
}

export default Menubtn
