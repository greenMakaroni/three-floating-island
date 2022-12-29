import { useState, Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
import { Canvas } from "@react-three/fiber";
import { Html, useProgress } from '@react-three/drei';
// models
import FrontCloud from "./FrontCloud"
import BackCloud from "./BackCloud"
import Island from "./Island";
// navigation
import Navigation from "../../components/Navigation/Navigation.jsx"
// postprocessing
import {
  EffectComposer,
  DepthOfField,
  Bloom
} from "@react-three/postprocessing";
// css
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
          <Navigation />
          <div className="text-div">
            <h1 className="landingHeader" onClick={() => navigate('/resume')}> Dawid Markieton </h1>
            <p className="landingParagraph"> Software Warrior </p>
          </div>
          <div className="CTOdiv">
            <button className="landingCTO" onClick={() => navigate('./resume')}> ABOUT ME </button>
          </div>
        </>
        }
      
      <Canvas shadows>
        <Suspense fallback={<Loader />}>
          <color attach="background" args={ ["#A1EAFB"] } />
          
          {/* Lights */}
          <ambientLight intensity={ 0.17 } />
          <pointLight
            castShadow 
            color={"#ffd9d6"}
            shadow-mapSize-height={ 512 }
            shadow-mapSize-width={ 512 }
            intensity={0.5}       
            position={ [-25, 35, -12] } 
          />

          {/* Models */}
          <BackCloud />
          <FrontCloud />
          <Island setLoaded={setLoaded}/>

          {/* Postprocessing */}
          <EffectComposer multisampling={0} disableNormalPass={false}>
            <DepthOfField
              focusDistance={0}
              focalLength={0}
              bokehScale={0.9}
            />
            <Bloom
              luminanceThreshold={0.6}
              luminanceSmoothing={0.9}
              intensity={5}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Landing