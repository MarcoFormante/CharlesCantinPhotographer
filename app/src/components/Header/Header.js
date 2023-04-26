import React, {useEffect, useState} from 'react'
import Nav from '../Nav/Nav'
import Menubtn from '../MenuBtn/Menubtn'
import CustomLink from '../Nav/CustomLink'



const Header = ({dataHeader}) => {
  
    const [menuToggle, setMenuToggle] = useState("");
  
   
    const handleMenuToggle = () => {
        setMenuToggle(menuToggle ? "" : "menu-open");
    }

    const handleNavToggle = () => {
        setMenuToggle("")
     
    }
    const logoImg = dataHeader.logo.img;
    const logoDescription = dataHeader.logo.description;
    

   
    return (
        <header className='header' >
            <div className='logo'>
                {dataHeader && <CustomLink to={"/"}>
                    <img src={logoImg} alt={logoDescription } />
                </CustomLink>}
            </div>
            <Nav toggleMenu={menuToggle} handleOnClick={handleNavToggle} headerNav={dataHeader} />
            <Menubtn toggleMenu={menuToggle} onClick={ handleMenuToggle} />
        </header>      
  )
}

export default Header
