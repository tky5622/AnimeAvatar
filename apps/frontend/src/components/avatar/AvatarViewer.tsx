/* eslint-disable react/no-unknown-property */
'use client'
import { Html, OrbitControls, useGLTF, useProgress } from '@react-three/drei'
// @ts-ignore
import { Canvas } from '@react-three/fiber'
import { FC, Suspense } from 'react'
import { GLTF as StdlibGLTF } from 'three-stdlib'
//@ts-ignore
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { VRMLoaderPlugin } from '@pixiv/three-vrm';
import { useLoader } from '@react-three/fiber'

interface ModelProps {
  progress: number
  modelUrl: any
  loader: any
}

// const loader = new GLTFLoader();

// // Install GLTFLoader plugin
// loader.register((parser: any) => {
//   return new VRMLoaderPlugin(parser);
// });

const MODEL_URL = 'https://wuyspkxtjxjlklqkchxr.supabase.co/storage/v1/object/sign/avatars/7fe65695-a8e0-4b29-8ba8-9256d64904d3/00ad60b1-ce1e-4d80-a405-d07141fca895.glb?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzLzdmZTY1Njk1LWE4ZTAtNGIyOS04YmE4LTkyNTZkNjQ5MDRkMy8wMGFkNjBiMS1jZTFlLTRkODAtYTQwNS1kMDcxNDFmY2E4OTUuZ2xiIiwiaWF0IjoxNjgzNzYxNTg5LCJleHAiOjE3MTUyOTc1ODl9.EthFsyk8_W38YT2_eSrnLNVgiP52Uhc0xU3Rzr0vm-k&t=2023-05-10T23%3A33%3A09.350Z'
// const MODEL_URL = 'https://pixiv.github.io/three-vrm/packages/three-vrm/examples/models/VRM1_Constraint_Twist_Sample.vrm'


const Model: FC<ModelProps> = ({ progress, modelUrl, loader }) => {
  console.log(loader, 'log of loader')
  console.log(GLTFLoader, 'log of GLTF Loader')
  console.log(modelUrl)

  // @ts-ignore
  const gltf = useLoader(GLTFLoader, modelUrl)
  return <primitive object={gltf?.scene} />
}

type AvatarViewerProps = {
  modelUrl: string
}

export const AvatarViewer: FC<AvatarViewerProps> = ({ modelUrl }) => {
  const { progress } = useProgress()  
  const loader = new GLTFLoader();
  // Install GLTFLoader plugin
    loader.register((parser: any) => {
    return new VRMLoaderPlugin(parser);
    });
  

  return (
    <Canvas
      frameloop="demand"
      style={{height: 1000}}
      camera={{ fov: 20, near: 0.1, far: 300, position: [0, 1, -10] }}
      flat
    >
      <directionalLight position={[1, 1, -1]} color={'0xFFFFFF'} />
      <Suspense fallback={<Html center>{progress} % loaded</Html>}>
        <Model progress={progress} modelUrl={MODEL_URL} loader={loader}/>
      </Suspense>
      <color attach="background" args={['#f7f7f7']} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping={false}
      />
      <gridHelper />
    </Canvas>
  )
}
