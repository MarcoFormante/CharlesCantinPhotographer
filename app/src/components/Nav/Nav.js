import React,{useEffect, useState} from 'react'
import CustomLink from './CustomLink'
import SocialMedia from '../Header/SocialMedia'


const Nav = (props) => {

  if (props.dataLink) {
    console.log(props.dataLink);
    return (
      <>
        <nav className='header-nav'>

          <SocialMedia />
       
          <ul className={`header-nav__list ${props.toggleMenu}`}>
            {
              props.dataLink.map((link, index) => <li key={index} className='header-nav__list__item'>
              
                <CustomLink to={link.split("$$$")[0]} className='header-nav__list__item__link' onClick={props.handleOnClick}>{link.split("$$$")[1]}</CustomLink>
              </li>
              )
            }
          </ul>
        </nav>
      </>
    )
  }
}

export default Nav



