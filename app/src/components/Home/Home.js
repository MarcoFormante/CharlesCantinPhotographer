import React, { useState ,useEffect} from 'react'
import '../../sass/index.scss'
import BackImg from './BackImg.jpg'
import store from '../store'
import styled from 'styled-components/macro'

const Home = () => {
  const [isLogged,setIsLogged]= useState()
 
  
  useEffect(() => {
    store.subscribe(() => setIsLogged(store.getState()))
    console.log("is logged:" + isLogged);
    
  },[])
 

    return (
      <div className='homePage' style={{ backgroundImage: `url(${BackImg})` }}>
         <h1 className='title'>Charles Cantin</h1>
        <p className={`subtitle`}>Photographer</p>
        {isLogged && <LoginText>WORK-MODE</LoginText>} 
      </div>
    )
  }  





export default Home


const LoginText = styled.p`
color:white;
position: absolute;
bottom:40px;
font-size:30px;
z-index:10;
color:gold;

`