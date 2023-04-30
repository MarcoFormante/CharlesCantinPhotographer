import React, { useState ,useEffect} from 'react'
import '../../sass/index.scss'
import BackImg from './BackImg.jpg'



const Home = () => {
  
    return (
      <div className='homePage' style={{ backgroundImage: `url(${BackImg})` }}>
         <h1 className='title'>Charles Cantin</h1>
        <p className={`subtitle`}>Photographer</p>
      </div>
    )
  }  





export default Home


