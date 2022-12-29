import { Suspense } from 'react'
import { Canvas } from "@react-three/fiber";
import { Html, useProgress } from '@react-three/drei';
// models
import FrontCloud from "./FrontCloud"
import BackCloud from "./BackCloud"
import Island from "./Island";
// navigation
import Navigation from "../Navigation/Navigation.jsx"
// postprocessing
import {
  EffectComposer,
  DepthOfField,
  Bloom
} from "@react-three/postprocessing";
// css

const Landing = () => {
  function Loader() {
    const { progress } = useProgress();
    return <Html center>{progress} % loaded </Html>
  }

  return ( 
    <div className="App">
      <Navigation />
      <Canvas shadows>
        <Suspense fallback={<Loader />}>
          <color attach="background" args={ ["#A1EAFB"] } />
          
          {/* Lights */}
          <ambientLight intensity={ 0.17 } />
          <pointLight
            castShadow 
            color={"#ffd9d6"}
            shadow-mapSize-height={ 1024 }
            shadow-mapSize-width={ 1024 }
            intensity={0.5}       
            position={ [-25, 35, -12] } 
          />

          {/* Models */}
          <BackCloud />
          <FrontCloud />
          <Island />

          {/* Postprocessing */}
          <EffectComposer multisampling={0} disableNormalPass={false}>
            <DepthOfField
              focusDistance={0}
              focalLength={0}
              bokehScale={0.9}
            />
            <Bloom
              luminanceThreshold={0.7}
              luminanceSmoothing={0.2}
              intensity={5}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Landing