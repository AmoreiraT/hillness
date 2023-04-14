import React from 'react';
import { Canvas } from '@react-three/fiber';
import Mountain from '../../Montain/presentation';
import PlayerControls from '../../../shared/utils/PlayerControls';

const apiData = {
  x: 100,
  y: 50,
  z: 100,
};

const CanvasContainer: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Mountain apiData={apiData} />
      <PlayerControls />
    </Canvas>
  );
};

export default CanvasContainer;
