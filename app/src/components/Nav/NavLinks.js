import React from 'react'
import CustomLink from './CustomLink'
import Login from './Login'
const NavLinks = (props) => {
  return (
    <div>
       <ul className={`header-nav__list ${props.toggleMenu}`}>
            <li className='header-nav__list__item'>
                <CustomLink to="/" className='header-nav__list__item__link' onClick={props.handleOnClick}> Acceuil </CustomLink>
            </li>
            <li className='header-nav__list__item'>
                <CustomLink to="/Gallerie" className='header-nav__list__item__link' onClick={props.handleOnClick}> Gallerie </CustomLink>
            </li>
            <li className='header-nav__list__item'>
                <CustomLink to="/Tarifs-et-prestations" className='header-nav__list__item__link' onClick={props.handleOnClick}> Tarifs et prestations  </CustomLink>
            </li>
            <li className='header-nav__list__item'>
                <CustomLink to="/Contact" className='header-nav__list__item__link' onClick={props.handleOnClick}> Contact </CustomLink>
              </li>
              
            <Login onClick={props.handleOnClick}/>
          </ul>
    </div>
  )
}

export default NavLinks
