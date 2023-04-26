import React, { useState, useEffect, Component } from 'react'



const OpenGallery = (props) => {
const [dataImg,setData] = useState()
  useEffect(() => {
    
    fetch("https://trueappwork.000webhostapp.com/phDataGallerie.php", {
      mode: "no-cors"
    }
    
    ).then(data => data.json()).then(datas => 
   console.log(datas))
  }, [])
  
 
  
    return (
      <div className='opened__gallerie__container'>
        {dataImg} 
        
    </div>
  )
}

export default OpenGallery
