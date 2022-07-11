import React, { useState, Suspense, useEffect } from 'react'
import { Canvas, useFrame, useThree} from "@react-three/fiber";
import { Html, useProgress, OrbitControls, GizmoHelper, GizmoViewport  } from '@react-three/drei';
import Island from "../../components/Island";
import "./landing.css";


const Landing = () => {

  const [isSceneLoaded, setLoaded]  = useState(false);

  function Loader() {
    const { progress } = useProgress();
    
    if(progress == 100) {
      setLoaded(true);
    }
    return <Html center>{progress} % loaded </Html>
  }

  return (
    
    <div className="App">
      <>
        <div className="text-div">
          <h1 className="landingHeader"> Dawid Markieton </h1>
          <p className="landingParagraph"> web development </p>
          <p className="landingParagraph"> graphic design </p>
        </div>
        <button className="landingCTO"> How can I help? </button>
      </>
      
      <Canvas shadows >
        <Suspense fallback={<Loader />}>
          <color attach="background" args={ ["#A1EAFB"] } />
          
          <ambientLight intensity={ 0.17 } />

          <pointLight
            castShadow 
            shadow-mapSize-height={ 2048 }
            shadow-mapSize-width={ 2048 }
            intensity={0.5}
            args={["#f7d497"]}
            position={ [-25, 35, -12] } 
          />
        
          <Island />
        </Suspense>
      </Canvas>
     
    </div>
  )
}

export default Landing