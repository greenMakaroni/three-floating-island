import { useState } from 'react';
import { Landing, Resume, Projects, Contact, Navigation } from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER,
  appId: import.meta.env.VITE_APP_APP_ID,
  measurementId: import.meta.env.VITE_APP_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {

  return (
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" element={ <Landing /> } />
          <Route exact path="/resume" element={ <Resume /> } />
          <Route exact path="/projects" element={ <Projects />} />
          <Route exact path="/contact" element={ <Contact /> } />
        </Routes>

      </BrowserRouter>
  )
}

export default App
