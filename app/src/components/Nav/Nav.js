import React from 'react'
import './Nav.scss'


const Nav = (props) => {
  return (
    <nav className='header-nav'>
      <ul className={`header-nav__list ${props.toggleMenu}`}>
        <li className='header-nav__list__item'>Acceuil</li>  
        <li className='header-nav__list__item'>Gallerie</li>  
        <li className='header-nav__list__item'>Tarifs et prestations</li>  
        <li className='header-nav__list__item'>Contact</li>  
      </ul>
    </nav>
  )
}

export default Nav
