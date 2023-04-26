import React from 'react'
import Loading from '../loading/Loading';
import '../../sass/index.scss';

const Home = ({ dataHome }) => {

 if (!dataHome) {
  return <Loading />
 } else {
  const imgBackgroundHome = `https://trueappwork.000webhostapp.com/${dataHome.backimg}`;
  return (
    <div className='homePage' style={{backgroundImage:`url(${imgBackgroundHome})`}}>
      <h1 className='title'>{dataHome.title} <span className='ph'>{dataHome.title2}</span></h1>"
    </div>
  )
 }

  
  
}

export default Home
