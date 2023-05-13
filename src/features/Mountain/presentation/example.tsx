import React, { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFetchCovidDataHook } from '../../CanvasContainer/commands/covid-command';
import { useCovidDataStore } from '../../CanvasContainer/presentation/state/useCovid';
import { useFetchCovidDataRepository } from '../../CanvasContainer/repository';
import useTextureLoader from './hooks/useTextureLoader';
import rockDiffuseTexture from '@assets/textures/rock_diffuse.jpg';
import rockNormalTexture from '@assets/textures/rock_normal.jpg';
import rockAOTexture from '@assets/textures/rock_ao.jpg';
function generateGeometry(
  apiData: { date: number; deaths: number; cases: number }[]
): THREE.BufferGeometry {
  const geometry = new THREE.BufferGeometry();

  const vertices: number[] = [];
  const faces: number[] = [];

  apiData.forEach((data, index) => {
    vertices.push(data.deaths, data.cases, data.date);

    if (index > 0) {
      // Cria faces triangulares conectando os pontos
      faces.push(index - 1, index);
    }
  });

  geometry.setIndex(faces);
  geometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(vertices, 3)
  );

  geometry.computeVertexNormals();

  return geometry;
}

const MountainExample: React.FC = () => {
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
      return new THREE.BufferGeometry();
    }
    return generateGeometry(CovidDataState.covidData);
  }, [CovidDataState.covidData, isLoading]);

  const { diffuseMap, normalMap, aoMap } = useTextureLoader(
    rockDiffuseTexture,
    rockNormalTexture,
    rockAOTexture
  );

  diffuseMap.wrapS = diffuseMap.wrapT = THREE.RepeatWrapping;
  diffuseMap.repeat.set(10, 10);

  return (
    <mesh geometry={geometry} name="mountainExample">
      <meshStandardMaterial
        map={diffuseMap}
        normalMap={normalMap}
        aoMap={aoMap}
      />
    </mesh>
  );
};

export default MountainExample;
