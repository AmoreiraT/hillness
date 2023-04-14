import React from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Sky, PerspectiveCamera } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import Player from '../../Player';
import Mountain from '../../Montain/presentation';
import * as THREE from 'three';
import {
  CameraProvider,
  useCameraContext,
} from '../../../shared/contexts/CameraContext';
import { PerspectiveCamera as ThreePerspectiveCamera } from 'three';

const CanvasContainer: React.FC = () => {
  const [apiData, setApiData] = React.useState<{
    x: number;
    y: number;
    z: number;
  }>({
    x: 1,
    y: 1,
    z: 1,
  });

  const fetchApiData = () => {
    setTimeout(() => {
      setApiData((prevData) => ({
        x: prevData.x + Math.random() * 0.5,
        y: prevData.y + Math.random() * 0.2,
        z: prevData.z + 1,
      }));
    }, 1000);
  };

  React.useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <CameraProvider>
      <Canvas>
        <PerspectiveCamera position={[0, 10, 10]} makeDefault />
        <Sky sunPosition={[0, 1, 0]} />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Physics gravity={[0, -9.81, 0]}>
          <Player />
          <Mountain apiData={apiData} />
        </Physics>
      </Canvas>
    </CameraProvider>
  );
};

export default CanvasContainer;
