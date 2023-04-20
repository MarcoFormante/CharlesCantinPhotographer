
import Header from './components/Header/Header';
import Home from  './components/Home/Home';
import {Routes, Route} from "react-router-dom"
import './sass/index.scss'
import Gallerie from './components/Gallerie/Gallerie';
import Tarifs from './components/Tarifs/Tarifs';
import Contact from './components/Contact/Contact';
import './sass/index.scss';

function App() {
  return (
    <div className='App'>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Gallerie' element={<Gallerie />} />
          <Route path="/Tarifs-et-prestations" element={<Tarifs/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
    </div>
  );
}

export default App;
