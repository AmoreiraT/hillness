import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Sky, PerspectiveCamera } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import Player from '../../Player';
import Mountain from '../../Mountain/presentation';

const CanvasContainer: React.FC = () => {
  const [apiData, setApiData] = React.useState<
    { day: number; deaths: number; cases: number }[]
  >([]);

  const fetchApiData = () => {
    const startDate = new Date('2020-02-26'); // Início da COVID-19 no Brasil
    const endDate = new Date('2022-12-31');
    const oneDay = 24 * 60 * 60 * 1000;
    const daysBetween = Math.round(
      Math.abs((startDate.getTime() - endDate.getTime()) / oneDay)
    );
    const data = [];

    for (let i = 0; i <= daysBetween; i++) {
      const currentDate = new Date(startDate.getTime() + i * oneDay);
      const cases = Math.round(Math.pow(1.2, i));
      const deaths = Math.round(cases / 2);
      data.push({
        day: i,
        deaths,
        cases,
      });
    }

    setApiData(data);
  };

  React.useEffect(() => {
    fetchApiData();
  }, []);

  return (
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
  );
};

export default CanvasContainer;
