import { useState } from 'react';
import { Landing, Resume, Projects, Contact, Navigation } from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
      <BrowserRouter>

        <Navigation />
 
        <Routes>
          <Route exact path="/" element={ <Landing /> } />
          <Route exact path="/Resume" element={ <Resume /> } />
          <Route exact path="/Projects" element={ <Projects />} />
          <Route exact path="/Contact" element={ <Contact /> } />
        </Routes>

      </BrowserRouter>
  )
}

export default App
