import React, { useState ,useEffect} from 'react'
import GallerieCard from './GallerieCard'
import data_gallerie from './data-gallerie'




const Gallerie = ({isLogged}) => {
  
  const [categoryLength, setCategoryLength] = useState(0);
  const [categoryData,setCategoryData] = useState(data_gallerie)

  useEffect(() => {
    if (categoryData.length === data_gallerie.length) {
    return
}
  setCategoryData(data_gallerie)
  setCategoryLength(data_gallerie.length)
  },[])

  return (
    <div className='gallerie-container'>      
      {categoryData.map((data) => {
        
    return(
            <GallerieCard
              isLogged={isLogged}
              src={data.src}
              alt={data.alt}
              category={data.category}
              to={data.to + data.category}
              key={data.id + Math.random()}
              className={
                (data_gallerie.length < 7
                
                ? (data.id === 1 ? "gallerie__card card__center--top" : data.id === 4 ?
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
