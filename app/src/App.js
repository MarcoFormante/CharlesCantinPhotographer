import React,{Component, useEffect,useState} from 'react';
import Header from './components/Header/Header';
import Home from  './components/Home/Home';
import {Routes, Route} from "react-router-dom"
import './sass/index.scss'
import Gallerie from './components/Gallerie/Gallerie';
import Tarifs from './components/Tarifs/Tarifs';
import Contact from './components/Contact/Contact';
import OpenGallery from './components/Gallerie/OpenGallery';
import './sass/index.scss';





function App() {

    return (
      <div className='App'>
        
        <Header />
          <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Gallerie' element={<Gallerie />}/>
          <Route path='/Tarifs-et-prestations' element={<Tarifs />}/>
          <Route path='/Contact' element ={<Contact />}/>
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
