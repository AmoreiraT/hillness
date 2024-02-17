// Mountain.tsx
import React, { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';

import SimplexNoise from 'simplex-noise';
import useTextureLoader from './hooks/useTextureLoader';
import { PlaneBufferGeometryProps } from '@react-three/fiber';
import { useFetchCovidDataRepository } from '../../CanvasContainer/repository';
import { useCovidDataStore } from '../../CanvasContainer/presentation/state/useCovid';
import { useFetchCovidDataHook } from '../../CanvasContainer/commands/covid-command';

function generateGeometry(
  apiData: { date: number; deaths: number; cases: number }[]
): THREE.BufferGeometry {
  const geometry = new THREE.BufferGeometry();

  const vertices: number[] = [];

  apiData.forEach((data) => {
    vertices.push(data.deaths, data.cases, data.date);
  });

  geometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(vertices, 3)
  );

  return geometry;
}

const PointCloud: React.FC = () => {
  const CovidDataRepository = useFetchCovidDataRepository();
  const CovidDataState = useCovidDataStore();
  const { fetch, isLoading } = useFetchCovidDataHook(
    CovidDataRepository,
    CovidDataState
  );

  useEffect(() => {
    fetch();
  }, [fetch]);

  const geometry = useMemo(() => {
    if (isLoading || CovidDataState.covidData.length === 0) {
      return generateGeometry(CovidDataState.covidData);
    }
    return generateGeometry(CovidDataState.covidData);
  }, [CovidDataState.covidData, isLoading]);

  return (
    <points>
      <bufferGeometry attach="geometry" {...geometry} />
      <pointsMaterial attach="material" size={5} color={'red'} />
    </points>
  );
};

export default PointCloud;
