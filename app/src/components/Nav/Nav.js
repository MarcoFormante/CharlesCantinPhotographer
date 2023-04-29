import React,{useEffect, useState} from 'react'
import SocialMedia from '../Header/SocialMedia'
import NavLinks from './NavLinks'


const Nav = (props) => {

    return (
      <>
        <nav className='header-nav'>
          <SocialMedia />
          <NavLinks {...props} />
        </nav>
        
      </>
    )
  }


export default Nav



