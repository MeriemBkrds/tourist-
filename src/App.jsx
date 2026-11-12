import { useState } from 'react'
import Firsthead from './utils/firsthead/firsthead'
import Home from './composant/homepage/homepage'
import {Routes, Route} from "react-router-dom";
import About from './composant/aboutus/aboutus';
import TourPackages from './composant/tourpackage/packages';
import Contact from './composant/contact/contact';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <Routes>
      <Route path='/' element={ <Home/>} />
      <Route path='/About' element ={ <About/>} />
       <Route path="/packages" element={<TourPackages />} />
       <Route path='/contact' element ={<Contact/>} />
     </Routes>
     
    </>
  )
}

export default App
