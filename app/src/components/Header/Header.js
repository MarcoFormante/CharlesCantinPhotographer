import React from 'react'
import './Header.scss'
import Nav from '../Nav/Nav'
import Menubtn from '../MenuBtn/Menubtn'

const Header = () => {
    return (
        <header className='header'>
            <div className='logo'>Logo</div>
            <Nav />
            <Menubtn />
        </header>
           
  )
}

export default Header
