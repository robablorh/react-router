import React from 'react'
import{ Routes, Route} from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Services from './page/Services';
import Contacts from './page/Contacts';
import Error from './page/Error';

const Router = () => {
  return (
    
       
    <Routes>
       
       
        <Route  path='/'  element={<Home/>} />
        <Route  path='/about'  element={<About/>}  />
        <Route  path='/services'  element={<Services/>}  />
        <Route  path='/contacts'  element={<Contacts/>}  />
        <Route  path='*'    element={<Error/>}      />

       
    </Routes>
  
  )
}

export default Router
