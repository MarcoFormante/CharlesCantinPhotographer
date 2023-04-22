import React, { useState ,useEffect,useCallback, Component} from 'react'
import GallerieCard from './GallerieCard'
import data_gallerie from './data-gallerie'


const Gallerie = () => {
  let [lo,setlo] =useState(true)
 
  useEffect(() => {
    if (document.querySelectorAll("figure").length > 35) {
      setTimeout(() => {
        setlo(false) 
        console.log(lo);
      }, 1000);
    
    }


  },[])

  return (
    <div className='gallerie-container'>
      <div style={lo ? {position:"fixed",zIndex:100,top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"black" , color:"white",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"46px"}:{display:"none"}}>loading</div>
      {
        data_gallerie.map((data) => {
         
          return (
             
              <GallerieCard src={data.src}
                alt={data.alt}
                category={data.caterory}
                to={data.to + data.caterory}
                key={data.id}
                className={
                  data.id === 1 ? "card__center--top" : data.id === 4 ?
                    "card__center--bottom" : "gallerie__card"}
              />
              )

        } 
         )
        
       
      }
      
    
    </div>

    
  )
}


export default Gallerie
