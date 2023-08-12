// Mountain.tsx
import React, { useEffect, useMemo } from 'react';
import { Plane } from '@react-three/drei';
import { PlaneBufferGeometryProps } from '@react-three/fiber';
import * as THREE from 'three';
import SimplexNoise from 'simplex-noise';
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
          (currentData.deaths * 0.01 + currentData.cases * 0.0005) *
          (1 + noise * 0.5);
      }

      heightMap.push(height);
    }
  }

  return heightMap;
};

const generateX = (
  width: number,
  depth: number,
  apiData: { day: number; deaths: number; cases: number }[]
): number[] => {
  const simplex = new SimplexNoise();
  const getX: number[] = [];

  const apiDataMap = new Map<number, { cases: number }>();
  apiData.forEach((data) => {
    apiDataMap.set(data.day, { cases: data.cases });
  });

  for (let z = 0; z < depth; z++) {
    for (let x = 0; x < width; x++) {
      const currentData = apiDataMap.get(Math.round(z));
      const noise = simplex.noise2D(x / 10, z / 10);

      let height = 0;
      if (currentData) {
        height = currentData.cases * 0.0005 * (1 + noise * 0.5);
      }

      getX.push(height);
    }
  }

  return getX;
};

const generateY = (
  width: number,
  depth: number,
  apiData: { day: number; deaths: number; cases: number }[]
): number[] => {
  const simplex = new SimplexNoise();
  const getY: number[] = [];

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
        height = currentData.deaths * 0.05 * (1 + noise * 0.5);
      }

      getY.push(height);
    }
  }

  return getY;
};

const Mountain: React.FC<{
  apiData: { day: number; deaths: number; cases: number }[];
}> = ({ apiData }) => {
  const width = 50;
  const depth = 50;
  const heightMap = useMemo(
    () => generateHeightMap(width, depth, apiData),
    [apiData]
  );
  const getX = useMemo(() => generateX(width, depth, apiData), [apiData]);
  const getY = useMemo(() => generateY(width, depth, apiData), [apiData]);

  const geometry = useMemo(() => {
    const geom = new THREE.PlaneGeometry(width, depth, width - 1, depth - 1);
    geom.rotateX(Math.PI / 2);

    for (let i = 0; i < geom.attributes.position.count; i++) {
      (geom.attributes.position as PlaneBufferGeometryProps).setY(
        i,
        heightMap[i]
      );
      // (geom.attributes.position as PlaneBufferGeometryProps).setX(i, getX[i]);
      // (geom.attributes.position as PlaneBufferGeometryProps).setY(i, getY[i]);
      // (geom.attributes.position as PlaneBufferGeometryProps).setY(i, i);
    }
    geom.computeVertexNormals();

    return geom;
  }, [heightMap]);

  return (
    <Plane
      isMesh
      geometry={geometry}
      material={
        new THREE.MeshStandardMaterial({ color: 'green', wireframe: true })
      }
    />
  );
};

export default Mountain;
