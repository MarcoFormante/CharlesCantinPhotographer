import React, {useEffect, useState} from 'react'
import Nav from '../Nav/Nav'
import Menubtn from '../MenuBtn/Menubtn'
import CustomLink from '../Nav/CustomLink'
import Loading from '../loading/Loading'
import getDataUrl from '../../GetData'


const Header = ({dataLink}) => {
    const [menuToggle, setMenuToggle] = useState("");
    const [dataHeader, setDataHeader] = useState();

    useEffect(() => {
        getDataUrl('https://trueappwork.000webhostapp.com/ph_get_data.php', "ph_header", setDataHeader);
        return () => {
        }
    },[])
  
  
    const handleMenuToggle = () => {
        setMenuToggle(menuToggle ? "" : "menu-open");
    }

    const handleNavToggle = () => {
        setMenuToggle("")
     
    }
   
    
    if (!dataHeader) {
        return <Loading />
    } else {
        
        const logoImg = "https://trueappwork.000webhostapp.com/" + dataHeader[0].split("$$$")[1];
        const logoDescription = dataHeader[1].split("$$$")[1];
        
        return (
       
            <header className='header'>
                <div className='logo'>
                    {dataHeader && <CustomLink to={"/"}>
                        <img src={dataHeader && logoImg} alt={logoDescription } />
                    </CustomLink>}
                </div>
                <Nav toggleMenu={menuToggle} handleOnClick={handleNavToggle} dataLink={dataLink} />
                <Menubtn toggleMenu={menuToggle} onClick={ handleMenuToggle} />
            </header>      
      )
    }
   
   
}

export default Header
