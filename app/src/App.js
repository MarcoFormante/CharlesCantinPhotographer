import React,{useEffect,useState} from 'react';
import Header from './components/Header/Header';
import Home from  './components/Home/Home';
import {Routes, Route} from "react-router-dom"
import './sass/index.scss'
import Gallerie from './components/Gallerie/Gallerie';
import Tarifs from './components/Tarifs/Tarifs';
import Contact from './components/Contact/Contact';
import OpenGallery from './components/Gallerie/OpenGallery';
import './sass/index.scss';
import Loading from './components/loading/Loading';
import getDataUrl from './GetData';





function App() {
  const [dataRoute, setDataRoute] = useState()

  useEffect(() => {
    getDataUrl('https://trueappwork.000webhostapp.com/ph_get_data.php', "ph_nav", setDataRoute);
    return () => {
    }
  }, [])
 
    return (
      <div className='App'>
        
        <Header dataLink={dataRoute && dataRoute} />
        
        <Routes>
        
          {dataRoute && dataRoute.map(function (link, index) {
            let el = [<Home />, <Gallerie />, <Tarifs />, <Contact />]
            return (
              <Route path = { link.split("$$$")[0] } key = { "link:" + link } element = { el[index]}/>
              )
            })}

          <Route path="/Gallerie/Mariage" element={<OpenGallery  />} />
          <Route path="/Gallerie/Grossesse" element={<OpenGallery />} />
          <Route path="/Gallerie/Bébé" element={<OpenGallery />} />
          <Route path="/Gallerie/Famille" element={<OpenGallery />} />
          <Route path="/Gallerie/Baptême" element={<OpenGallery />} />
          <Route path="/Gallerie/Couple" element={<OpenGallery />} />
          </Routes>
      </div>
    );
  }


export default App;
