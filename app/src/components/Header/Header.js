import React, {useState} from 'react'
import Nav from '../Nav/Nav'
import Menubtn from '../MenuBtn/Menubtn'
import Logo from './Logo Charles cantin.png' 
import CustomLink from '../Nav/CustomLink'


const Header = () => {

    const [menuToggle, setMenuToggle] = useState("");

   

    const handleMenuToggle = () => {
            setMenuToggle(menuToggle ? "" : "menu-open");
    }

    const handleNavToggle = () => {
        setMenuToggle("")
        console.log(menuToggle,"hjhg");
    }
    

    return (
        <header className='header' >
            <div className='logo'>
                <CustomLink to="/"><img src={Logo} alt="Charles Cantin Photographer" /></CustomLink>   
            </div>
            
            <Nav toggleMenu={menuToggle} handleOnClick={handleNavToggle} />
            <Menubtn toggleMenu={menuToggle} onClick={handleMenuToggle} />
        </header>      
  )
}

export default Header
