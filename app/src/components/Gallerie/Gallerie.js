import React, { useState ,useEffect} from 'react'
import GallerieCard from './GallerieCard'
import data_gallerie from './data-gallerie'


const Gallerie = () => {
  let [loading, setloading] = useState(true)
  
  let indexMap = 0;

  useEffect(() => {

    if (indexMap === document.querySelectorAll("figure").length) {
      setTimeout(() => {
        setloading(false) 
      }, 1000);
    
    }
  }, [])
  

  return (
    <div className='gallerie-container'>
      <div style={loading ? {position:"fixed",zIndex:100,top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"black" , color:"white",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"46px"}:{display:"none"}}>loading</div>
      {
        data_gallerie.map((data) => {
          indexMap++;
          return (
             
              <GallerieCard src={data.src}
                alt={data.alt}
                category={data.caterory}
                to={data.to + data.caterory}
                key={data.id}
                className={
                  data.id === 1 ? "gallerie__card card__center--top" : data.id === 4 ?
                    "gallerie__card card__center--bottom" : "gallerie__card"}
              />
              )

        } 
         )
        
       
      }
      
    
    </div>

    
  )
}


export default Gallerie
