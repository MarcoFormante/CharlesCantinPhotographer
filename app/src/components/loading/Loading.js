import React from 'react'

const Loading = ({children}) => {
  return (
    <div className='loading' style={{backgroundColor:"black",color:"white",display:"flex",justifyContent:"center",alignItems:"center",height:"calc(100vh - 60px)"}}>
       {children}
    </div>
  )
}

export default Loading
