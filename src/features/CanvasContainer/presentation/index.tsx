import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Sky, PerspectiveCamera } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import Player from '../../Player';
import Mountain from '../../Montain/presentation';
import { useFetchCovidDataRepository } from '../repository';
import { useCovidDataStore } from './state/useCovid';
import { useFetchCovidDataHook } from '../commands/covid-command';

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

  const CovidDataRepository = useFetchCovidDataRepository();
  const CovidDataState = useCovidDataStore();
  const { fetch, isLoading } = useFetchCovidDataHook(
    CovidDataRepository,
    CovidDataState
  );

  useEffect(() => {
    fetch();
  }, [fetch]);

  const fetchApiData = () => {
    setTimeout(() => {
      CovidDataState.covidData.forEach((data, i) => {
        setApiData({
          x: data.cases,
          y: data.deaths,
          z: i,
        });
      });
    }, 1000);
  };

  useEffect(() => {
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
        <Mountain apiData={apiData} CovidDataState={CovidDataState.covidData} />
      </Physics>
    </Canvas>
  );
};

export default CanvasContainer;
