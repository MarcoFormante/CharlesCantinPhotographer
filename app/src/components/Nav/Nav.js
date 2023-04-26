import React from 'react'
import CustomLink from './CustomLink'
import SocialMedia from '../Header/SocialMedia'


const Nav = (props) => {
  
  const links = [...props.headerNav.links]
  
 
  return (
    <>
      <nav className='header-nav'>

        <SocialMedia />
       
        <ul className={`header-nav__list ${props.toggleMenu}`}>
          {
            links.map((link, index) => <li key={index} className='header-nav__list__item'>
          <CustomLink to={link} className='header-nav__list__item__link' onClick={props.handleOnClick}>{index === 0 ? "Acceuil":  link.slice(1)}</CustomLink>
            </li>)
          }
      </ul>
      </nav>
      </>
  )
}

export default Nav



