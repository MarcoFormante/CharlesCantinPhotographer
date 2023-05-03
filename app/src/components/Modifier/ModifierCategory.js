import React,{ useState} from 'react'

const ModifierCategory = ({...props}) => {
    const [imgGallery, setImgGallery] = useState()
    const [category, setCategory] = useState(false)
    const [categoryName,setCategoryName]=useState(props.category)

   
    return (
    <div className='Modifier-container'>
      <div className='modifier-category'>
          {category ? <input type='text' name="category-name" maxLength={40} className='modifier-category-title' value={props.c
          } /> : <p style={{ color: "white" }} onClick={e => setCategory(!category)}>{props.category}</p>}
         
          <img src={imgGallery ? URL.createObjectURL(imgGallery) : props.src} alt="" width={200} />
          <label htmlFor="categoryFile">Change file</label>
          <input type="file" name="categoryFile" id="categoryFile" onChange={(e)=> setImgGallery(e.target.files[0])}/>
            </div>
    </div>
  )
}

export default ModifierCategory
