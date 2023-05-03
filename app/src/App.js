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
import store from './components/store';
import { LoginText } from './components/styled/LoginText';
import { getFirestore, collection, addDoc, getDoc, getDocs } from 'firebase/firestore'
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './firebaseConfig';
import { getStorage } from "firebase/storage";





function App() {
  const [login, setLogin] = useState(false);

const app = initializeApp(firebaseConfig);

 const db = getFirestore(app)
 const storage = getStorage(app);
  // const querySnapshot = async () => {
  //   const a = collection(db, "mariage");
    
  //   const get = await getDocs(a);
  //   get.forEach(g => console.log(g.data()))
  // }
  
  // querySnapshot()
  
    
 
  useEffect(() => {
    setLogin(store.getState());

    return store.subscribe(() => {
      setLogin(store.getState())
    })
  }, [])
  

    return (
      <div className='App'>
        
        <Header />
          <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Gallerie' element={<Gallerie isLogged={login} />}/>
          <Route path='/Tarifs-et-prestations' element={<Tarifs />}/>
          <Route path='/Contact' element ={<Contact />}/>
          <Route path="/Gallerie/Mariage" element={<OpenGallery  />} />
          <Route path="/Gallerie/Grossesse" element={<OpenGallery />} />
          <Route path="/Gallerie/Bébé" element={<OpenGallery />} />
          <Route path="/Gallerie/Famille" element={<OpenGallery />} />
          <Route path="/Gallerie/Baptême" element={<OpenGallery />} />
          <Route path="/Gallerie/Couple" element={<OpenGallery />} />
        </Routes>
        
        
        {login && <LoginText>WORK-MODE</LoginText>} 

      </div>
    );
  }


export default App;
