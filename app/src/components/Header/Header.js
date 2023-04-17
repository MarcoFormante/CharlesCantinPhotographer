import React, {useState} from 'react'
import './Header.scss'
import Nav from '../Nav/Nav'
import Menubtn from '../MenuBtn/Menubtn'

const Header = () => {

    const [menuToggle, setMenuToggle] = useState("");
    

    const handleMenuToggle = () => {
            setMenuToggle(menuToggle ? "" : "menu-open");
    }
  
   
    
    return (
        <header className='header' >
            <div className='logo'>Logo</div>
            <Nav toggleMenu={menuToggle} />
            <Menubtn toggleMenu={menuToggle} onClick={handleMenuToggle} />
          
        </header>
           
  )
}

export default Header
