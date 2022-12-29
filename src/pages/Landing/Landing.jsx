import { useState, useEffect, Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
import { Canvas } from "@react-three/fiber";
import { Html, useProgress } from '@react-three/drei';
import FrontCloud from "../../components/FrontCloud"
import BackCloud from "../../components/BackCloud"
import Island from "../../components/Island";
import "./landing.css";
import {
  EffectComposer,
  DepthOfField,
  Bloom
} from "@react-three/postprocessing";


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
            <h1 className="landingHeader" onClick={() => navigate('/resume')}> Dawid Markieton </h1>
            <p className="landingParagraph"> Software Warrior </p>
          </div>
          <div className="CTOdiv">
            <button className="landingCTO"> ABOUT ME </button>
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
            color={"#ffd152"}
            shadow-mapSize-height={ 1024 }
            shadow-mapSize-width={ 1024 }
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