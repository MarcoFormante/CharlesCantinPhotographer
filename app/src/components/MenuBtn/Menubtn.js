import React from 'react'

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
