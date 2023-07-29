// Mountain.tsx
import React, { useEffect, useMemo } from 'react';
import * as THREE from 'three';
import rockDiffuseTexture from '@assets/textures/rock_diffuse.jpg';
import rockNormalTexture from '@assets/textures/rock_normal.jpg';
import rockAOTexture from '@assets/textures/rock_ao.jpg';
import SimplexNoise from 'simplex-noise';
import useTextureLoader from './hooks/useTextureLoader';
import { PlaneBufferGeometryProps } from '@react-three/fiber';
import { useFetchCovidDataRepository } from '../../CanvasContainer/repository';
import { useCovidDataStore } from '../../CanvasContainer/presentation/state/useCovid';
import { useFetchCovidDataHook } from '../../CanvasContainer/commands/covid-command';

const generateHeightMap = (
  width: number,
  depth: number,
  apiData: { day: number; deaths: number; cases: number }[]
): number[] => {
  const simplex = new SimplexNoise();
  const heightMap: number[] = [];

  const apiDataMap = new Map<number, { deaths: number; cases: number }>();
  apiData.forEach((data) => {
    apiDataMap.set(data.day, { deaths: data.deaths, cases: data.cases });
  });

  for (let z = 0; z < depth; z++) {
    for (let x = 0; x < width; x++) {
      const currentData = apiDataMap.get(Math.round(z));
      const noise = simplex.noise2D(x / 10, z / 10);

      let height = 0;
      if (currentData) {
        height =
          (currentData.deaths * 0.01 + currentData.cases * 0.005) *
          (1 + noise * 0.5);
      }

      heightMap.push(height);
    }
  }

  return heightMap;
};

const Mountain: React.FC<{
  //   apiData: { day: number; deaths: number; cases: number }[];
}> = (
  {
    //  apiData
  }
) => {
  const width = 50;
  const depth = 50;
  let apidata: { day: number; deaths: number; cases: number }[];
  const CovidDataRepository = useFetchCovidDataRepository();
  const CovidDataState = useCovidDataStore();
  const { fetch, isLoading } = useFetchCovidDataHook(
    CovidDataRepository,
    CovidDataState
  );

  useEffect(() => {
    fetch();
  }, [fetch]);

  const heightMap: number[] = useMemo(() => {
    if (isLoading || CovidDataState.covidData.length === 0) {
      return [];
    }
    CovidDataState.covidData.forEach((data, i) => {
      apidata.fill({
        day: data.date,
        deaths: data.deaths,
        cases: data.cases,
      });
    });
    return generateHeightMap(width, depth, apidata);
  }, [CovidDataState.covidData, isLoading]);

  //   const heightMap = useMemo(
  //     () => generateHeightMap(width, depth, CovidDataState.covidData),
  //     [CovidDataState.covidData]
  //   );

  const geometry = useMemo(() => {
    const geom = new THREE.PlaneGeometry(width, depth, width - 1, depth - 1);
    geom.rotateX(-Math.PI / 2);

    for (let i: number = 0; i < geom.attributes.position.count; i++) {
      (geom.attributes.position as PlaneBufferGeometryProps).setY(
        i,
        heightMap[i]
      );
    }
    geom.computeVertexNormals();

    return geom;
  }, [heightMap]);

  const { diffuseMap, normalMap, aoMap } = useTextureLoader(
    rockDiffuseTexture,
    rockNormalTexture,
    rockAOTexture
  );

  diffuseMap.wrapS = diffuseMap.wrapT = THREE.RepeatWrapping;
  diffuseMap.repeat.set(10, 10);

  return (
    <mesh geometry={geometry} name="mountain">
      <meshStandardMaterial
        map={diffuseMap}
        normalMap={normalMap}
        aoMap={aoMap}
      />
    </mesh>
  );
};

export default Mountain;
