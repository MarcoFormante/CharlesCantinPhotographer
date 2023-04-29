import React, {useEffect, useState} from 'react'
import Nav from '../Nav/Nav'
import Menubtn from '../MenuBtn/Menubtn'
import CustomLink from '../Nav/CustomLink'
import Logo from './LogoCharlescantin.png'



const Header = () => {
    const [menuToggle, setMenuToggle] = useState("");
    
  
    const handleMenuToggle = () => {
        setMenuToggle(menuToggle ? "" : "menu-open");
    }

    const handleNavToggle = () => {
        setMenuToggle("")
    }

        return (
            <header className='header'>
                <div className='logo'>
                    <CustomLink to={"/"}>
                        <img src={Logo} alt="Charles Cantin Photographer"/>
                    </CustomLink>
                </div>
                <Nav toggleMenu={menuToggle} handleOnClick={handleNavToggle}/>
                <Menubtn toggleMenu={menuToggle} onClick={ handleMenuToggle} />
            </header>      
      )
    
}

export default Header
