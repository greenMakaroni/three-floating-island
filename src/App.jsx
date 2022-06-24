import { useState } from 'react';
import { Landing, About, Contact, Projects, Navigation } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
      <BrowserRouter>

        <Navigation />
 
        <Routes>
          <Route exact path="/" element={ <Landing /> } />
          <Route exact path="/About" element={ <About /> } />
          <Route exact path="/Contact" element={ <Contact /> } />
          <Route exact path="/Projects" element={ <Projects /> } />
        </Routes>

      </BrowserRouter>
  )
}

export default App
