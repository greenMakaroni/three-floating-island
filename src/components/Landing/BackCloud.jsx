/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import backCloudUrl from "./back_cloud.glb"

export default function BackCloud({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF(backCloudUrl)

  useFrame((state, delta) => {
    if(group.current.position.x < -150) {
      group.current.position.x = 135
    } else {
      group.current.position.x -= 0.03
    }
  })

  return (
    <group ref={group} {...props} dispose={null} position={[70, -18, -40]} rotation={[0, -1.7, 0]} scale={8}>
      <mesh geometry={nodes.cloud.geometry} material={materials.Material} position={[-0.17, 0.63, 2.84]} scale={1.34} />
    </group>
  )
}

useGLTF.preload('./src/assets/back_cloud.glb')
