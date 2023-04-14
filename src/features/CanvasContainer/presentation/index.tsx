import React, { useContext, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Sky, PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import Player, { ScrollContainer } from '../../Player';
import { Vector3 } from 'three';
import Mountain from '../../Montain/presentation';
const CanvasContainer: React.FC = () => {
  const { scrollSpeed } = useContext(ScrollContainer);
  const [apiData, setApiData] = useState<Array<[number, number, number]>>([]);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      const mockData: [number, number, number][] = Array.from(
        { length: 50 },
        () => [
          Math.random() * 100 - 50,
          Math.random() * 100 - 50,
          Math.random() * 10,
        ]
      );
      setApiData(mockData);
    }, 1000);
  }, []);

  const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    scrollSpeed.current = -event.deltaY * 0.001;
  };

  return (
    <Canvas
      onCreated={({ gl }) => {
        gl.setClearColor('white');
      }}
      camera={{ position: [0, 5, 10], near: 0.1, far: 1000 }}
      onWheel={handleScroll}
    >
      <PerspectiveCamera makeDefault position={[0, 5, 20]} />
      <Sky sunPosition={new Vector3(0, 1, 0)} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Physics>
        <Player />
        {apiData.length > 0 && (
          <Mountain apiData={apiData} position={[0, 0, 0]} />
        )}
      </Physics>
      <OrbitControls />
    </Canvas>
  );
};

export default CanvasContainer;
