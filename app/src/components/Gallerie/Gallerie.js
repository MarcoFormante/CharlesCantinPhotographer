import React, { useState ,useEffect} from 'react'
import GallerieCard from './GallerieCard'
import data_gallerie from './data-gallerie'
import T from './testi'



const Gallerie = () => {
  const [loading, setLoading] = useState(true);
  let indexMap = 0;

  useEffect(() => {
    if (data_gallerie.length === indexMap) {
     setTimeout(() => {
       setLoading(false)
     }, 1000);
    } 

    return () => {
      fetch("http://localhost:3000/layout/header.json")
      .then(data => data.json()).then(json => console.log(json));
    }
},[])

  
  return (
    <div className='gallerie-container'>
      {loading ? <div style={{ position: "fixed", zIndex: 100, top: 0, left: 0, width: "100vw", height: "100vh", backgroundColor: "black", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "46px" }}>loading</div> : null}
      
      {
        data_gallerie.map((data) => {
          indexMap++;

    return(
            <GallerieCard src={data.src}
              alt={data.alt}
              category={data.category}
              to={data.to + data.category}
              key={data.id + Math.random()}
              className={
                (data_gallerie.length < 7 ?
                  (
                    data.id === 1 ? "gallerie__card card__center--top" : data.id === 4 ?
                    "gallerie__card card__center--bottom" : "gallerie__card")
                  : "gallerie__card"
                )}  
            />
    )
        
        }) 
      
      }

    </div>

    
  )
}


export default Gallerie
