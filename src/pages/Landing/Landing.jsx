import { useState, Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
import { Canvas } from "@react-three/fiber";
import { Html, useProgress } from '@react-three/drei';
import FrontCloud from "../../components/FrontCloud"
import BackCloud from "../../components/BackCloud"
import Island from "../../components/Island";
import "./landing.css";


const Landing = () => {
  const navigate = useNavigate();
  const [isSceneLoaded, setLoaded] = useState(false);

  function Loader() {
    const { progress } = useProgress();
  
    return <Html center>{progress} % loaded </Html>
  }

  return (
    
    <div className="App">   

      { isSceneLoaded && 
      <>
        <div className="text-div">
          <h1 className="landingHeader" onClick={() => navigate('/about')}> Dawid Markieton </h1>
          <p className="landingParagraph"> Software Engineer </p>
        </div>
        <div className="CTOdiv">
          <button className="landingCTO"> How can I help? </button>
        </div>
      </>
      }
      
      <Canvas shadows >
        <Suspense fallback={<Loader />}>
          <color attach="background" args={ ["#A1EAFB"] } />
          
          <ambientLight intensity={ 0.17 } />

          <pointLight
            castShadow 
            shadow-mapSize-height={ 2048 }
            shadow-mapSize-width={ 2048 }
            intensity={0.5}       
            position={ [-25, 35, -12] } 
          />

          <BackCloud />
          <FrontCloud />
          <Island setLoaded={setLoaded}/>
         
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Landing