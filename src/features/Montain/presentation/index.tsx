// Mountain.tsx
import React, { useEffect, useMemo } from 'react';
import { Plane } from '@react-three/drei';
import { PlaneBufferGeometryProps } from '@react-three/fiber';
import * as THREE from 'three';
import { useFetchCovidDataRepository } from '../../CanvasContainer/repository';
import { useCovidDataStore } from '../../CanvasContainer/presentation/state/useCovid';
import { useFetchCovidDataHook } from '../../CanvasContainer/commands/covid-command';
import { CovidDataEntity } from '../../CanvasContainer/entities/entity';

const Mountain: React.FC<{
  apiData: { x: number; y: number; z: number };
  CovidDataState: CovidDataEntity[];
}> = ({ apiData, CovidDataState }) => {
  const geometry = useMemo(() => {
    const geom = new THREE.PlaneGeometry(50, 50, 50, 50);
    geom.rotateX(-Math.PI / 2);

    // Atualiza a geometria do plano com base nos dados da API
    for (
      let i = 0;
      i < (geom.attributes.position as PlaneBufferGeometryProps).array.length;
      i += 3
    ) {
      const x = (geom.attributes.position as PlaneBufferGeometryProps).array[i];
      const z = (geom.attributes.position as PlaneBufferGeometryProps).array[
        i + 2
      ];

      // Altera a coordenada Y (altura) com base nos valores de x, y e z
      (geom.attributes.position as PlaneBufferGeometryProps).array[i + 1] =
        apiData.x * Math.sin(x) +
        apiData.y * Math.sin(z) +
        apiData.z * Math.random();
    }

    geom.computeVertexNormals();

    return geom;
  }, [apiData]);

  return (
    <Plane
      geometry={geometry}
      material={
        new THREE.MeshStandardMaterial({ color: 'green', wireframe: true })
      }
    />
  );
};

export default Mountain;
