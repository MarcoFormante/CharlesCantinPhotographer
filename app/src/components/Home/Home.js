import React, { useState ,useEffect} from 'react'
import Loading from '../loading/Loading';
import '../../sass/index.scss';
import getDataUrl from '../../GetData';

const Home = React.memo(() => {
  const [dataHome, setDataHome] = useState();
 

  useEffect(() => {
    //Home
    getDataUrl('https://trueappwork.000webhostapp.com/ph_get_data.php', "ph_home", setDataHome);
     
    return () => {
    
    }
  },[])

  let isLogged = true;
  if (!dataHome) {
    return <Loading />
   
  } else {
    const imgBackgroundHome = `https://trueappwork.000webhostapp.com/${dataHome[0].split("$$$")[1]}`;
   
    return (
      <div className='homePage' style={{ backgroundImage: `url(${imgBackgroundHome})` }}>
         <h1 className='title'>{dataHome[1].split("$$$")[1]}</h1>
        <TitleList dataHome={dataHome} isLogged={isLogged} />
      </div>
    )
  }  
})


const TitleList = ({ dataHome, isLogged }) => {
  const [hovers, setHover] = useState(false);
  const [isLogt, setIsLogt] = useState(isLogged)
  
  const handleHover = (e) => {
    if (e.type==="mouseenter") {
      setHover(true)
    } else {
      setHover(false)
    }
  
  }

  if (dataHome.length > 1) {
    let titles = [];
    for (let i = 2; i < dataHome.length; i++) {
      titles.push(<p className={`title subtitle${i}`} key={`subtitle${i}`} name={`subtitle${i}`} onMouseEnter={handleHover} onMouseLeave={handleHover} style={(isLogt && hovers) ? {color: "red",cursor:"pointer" } : null}>{dataHome[i].split("$$$")[1]}</p>)
    }
    return (
      titles.map(title => title) 
    
          )
  }
}

export default Home

