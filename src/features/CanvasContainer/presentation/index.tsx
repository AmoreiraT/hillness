import React, { useEffect, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Sky, PerspectiveCamera } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import Player from '../../Player';
import Mountain from '../../Montain/presentation';
import { useFetchCovidDataRepository } from '../repository';
import { useCovidDataStore } from './state/useCovid';
import { useFetchCovidDataHook } from '../commands/covid-command';

const CanvasContainer: React.FC = () => {
  const CovidDataRepository = useFetchCovidDataRepository();
  const CovidDataState = useCovidDataStore();
  const { fetch, isLoading } = useFetchCovidDataHook(
    CovidDataRepository,
    CovidDataState
  );

  useEffect(() => {
    fetch();
  }, [fetch]);

  const [apiData, setApiData] = React.useState<
    { day: number; deaths: number; cases: number }[]
  >([]);

  useMemo(() => {
    let dataT: { day: number; deaths: number; cases: number }[] = [];
    if (isLoading || CovidDataState.covidData.length < 2) {
      return dataT;
    }
    CovidDataState.covidData.forEach((c, i) => {
      dataT.push({
        day: i,
        deaths: c.deaths,
        cases: c.cases,
      });
    });
    setApiData(dataT);
    return dataT;
  }, [CovidDataState.covidData, isLoading]);

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
