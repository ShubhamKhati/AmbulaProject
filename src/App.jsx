import { useState } from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import ContactPhone from './components/ContactPhone';
import AboutSection from './components/AboutSection';
import ProjectFeature from './components/ProjectFeature';
import Todo from './components/Todo';
import Cart from './components/Cart'
import Api from './components/Api'

const App = () => {
  return (
    <Router>
    <div className='app'> 
       <Routes>
       <Route path="/" element={
              <>  
              <Header/>
              <Home/>
              </>
            }/> 
       <Route path="/contact" element={
              <>  
              <Header/>
              <ContactPhone/>
              </>
            }/> 
        <Route path="/about" element={
              <>  
              <Header/>
              <AboutSection/>
              </>
            }/> 
        <Route path="/projects" element={
              <>  
              <Header/>
              <ProjectFeature/>
              </>
            }/> 
        <Route path='/projects/todolist' element={
          <>
             <Header/>
             <Todo/>
          </>
        }/>
        <Route path='/projects/cart' element={
          <>
             <Header/>
             <Cart/>
          </>
        }/>
        <Route path='/projects/api' element={
          <>
             <Header/>
             <Api/>
          </>
        }/>
           
       <Route path="/*" element={<h1>Error 404 Page Note found</h1>} /> 
       </Routes>
    </div>
  </Router>
  );
}

export default App;

