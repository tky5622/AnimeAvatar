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

const MODEL_URL = 'https://pixiv.github.io/three-vrm/packages/three-vrm/examples/models/VRM1_Constraint_Twist_Sample.vrm'


const Model: FC<ModelProps> = ({ progress, modelUrl, loader }) => {
  console.log(loader, 'log of loader')
  console.log(GLTFLoader, 'log of GLTF Loader')

  // @ts-ignore
  const gltf = useLoader(GLTFLoader, MODEL_URL)
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
      camera={{ fov: 20, near: 0.1, far: 300, position: [0, 1, -10] }}
      flat
    >
      <directionalLight position={[1, 1, -1]} color={'0xFFFFFF'} />
      <Suspense fallback={<Html center>{progress} % loaded</Html>}>
        <Model progress={progress} modelUrl={modelUrl} loader={loader}/>
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
