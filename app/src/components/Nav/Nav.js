import React from 'react'
import CustomLink from './CustomLink'
import SocialMedia from '../Header/SocialMedia'
const Nav = (props) => {

  return (
    <>
    
      <nav className='header-nav'>
      <SocialMedia/>
      <ul className={`header-nav__list ${props.toggleMenu}`}>
        <li className='header-nav__list__item'>
            <CustomLink to="/" onClick={props.handleOnClick}>Acceuil</CustomLink>
        </li>
        <li className='header-nav__list__item'>
            <CustomLink to="/Gallerie" onClick={props.handleOnClick}>Gallerie</CustomLink>
        </li>
        <li className='header-nav__list__item'>
            <CustomLink to="/Tarifs-et-prestations" onClick={props.handleOnClick}>Tarifs et prestations</CustomLink>
        </li>
        <li className='header-nav__list__item'>
            <CustomLink to="/Contact" onClick={props.handleOnClick}>Contact</CustomLink>
        </li>
      </ul>
      </nav>
      </>
  )
}

export default Nav



