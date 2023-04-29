import React, { useState, useEffect } from 'react'



const OpenGallery = (props) => {
  const [galleryName, setGalleryName] = useState("");


  

  useEffect(() => {
    setGalleryName(document.location.pathname.replace("/Gallerie/",""))
   
  },[])
  
 

    return (
      <div className='opened__gallerie__container'>
        {galleryName}
        
    </div>
  )
}

export default OpenGallery
