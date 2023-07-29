import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Sky, PerspectiveCamera } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import Player from '../../Player';
import Mountain from '../../Mountain/presentation';
import axios from 'axios';
import { useFetchCovidDataRepository } from '../repository';
import { useCovidDataStore } from './state/useCovid';
import { useFetchCovidDataHook } from '../commands/covid-command';
import MountainExample from '../../Mountain/presentation/example';
import PointCloud from '../../Mountain/presentation';

const CanvasContainer: React.FC = () => {
  // const [covidData, setCovidData] = React.useState<
  //   {
  //     date: number;
  //     cases: number;
  //     deaths: number;
  //   }[]
  // >([]);

  // const CovidDataRepository = useFetchCovidDataRepository();
  // const CovidDataState = useCovidDataStore();
  // const { fetch, isLoading } = useFetchCovidDataHook(
  //   CovidDataRepository,
  //   CovidDataState
  // );

  // const [isLoading, setIsLoading] = React.useState(true);

  // function sumCasesAndDeaths(data: any[]) {
  //   return data.reduce(
  //     (accumulator, currentState) => {
  //       accumulator.cases += currentState.cases;
  //       accumulator.deaths += currentState.deaths;
  //       return accumulator;
  //     },
  //     { cases: 0, deaths: 0 }
  //   );
  // }

  // async function fetchCovidData() {
  //   const startDate = new Date('2020-02-25'); // Primeiro caso de COVID-19 no Brasil
  //   const endDate = new Date(); // Data de hoje
  //   const oneDay = 24 * 60 * 60 * 1000; // Milissegundos em um dia
  //   const covidDArray = [];

  //   for (
  //     let currentDate = startDate;
  //     currentDate <= endDate;
  //     currentDate = new Date(currentDate.getTime() + oneDay)
  //   ) {
  //     const formattedDate = currentDate
  //       .toISOString()
  //       .split('T')[0]
  //       .replace(/-/g, '');
  //     const response = await axios.get(
  //       `https://covid19-brazil-api.now.sh/api/report/v1/brazil/${formattedDate}`
  //     );

  //     if (response.data && response.data.data) {
  //       const { cases, deaths } = sumCasesAndDeaths(response.data.data);
  //       covidDArray.push({ date: formattedDate, cases, deaths });
  //     }
  //     // console.log(covidDArray);
  //   }

  //   setCovidData(
  //     covidDArray.map((item, index) => ({
  //       date: parseInt(item.date, 10),
  //       cases: parseInt(item.deaths, 10),
  //       deaths: parseInt(item.cases, 10),
  //     }))
  //   );
  //   console.log(covidDArray);

  //   return covidDArray;
  // }

  // React.useEffect(() => {
  //   fetchCovidData();
  //   // .then((data) => {
  //   //   console.log(data);
  //   //   setCovidData(
  //   //     data.map((item, index) => ({
  //   //       date: parseInt(item.date, 10),
  //   //       cases: parseInt(item.deaths, 10),
  //   //       deaths: parseInt(item.cases, 10),
  //   //     }))
  //   //   );
  //   //   setIsLoading(false);
  //   // })
  //   // .catch((error) => {
  //   //   console.error('Error fetching COVID-19 data:', error);
  //   // });
  //   console.log(covidData);
  // }, [covidData]);

  // useEffect(() => {
  //   fetch();
  //   console.log(CovidDataState.covidData);
  // }, [fetch]);
  return (
    <Canvas>
      <PerspectiveCamera position={[0, 10, 10]} makeDefault />
      <Sky sunPosition={[0, 1, 0]} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Physics gravity={[0, -9.81, 0]}>
        <Player />
        <Mountain />
      </Physics>
    </Canvas>
  );
};

export default CanvasContainer;
