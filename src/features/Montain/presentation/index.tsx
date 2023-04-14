import React, { useMemo } from 'react';
import { PlaneBufferGeometryProps, useThree } from '@react-three/fiber';
import { PlaneGeometry, MeshStandardMaterial, DoubleSide } from 'three';

const Mountain: React.FC<{ apiData: { x: number; y: number; z: number } }> = ({
  apiData,
}) => {
  const { viewport } = useThree();

  const geometry = useMemo(() => {
    const geo = new PlaneGeometry(
      viewport.width,
      viewport.height,
      apiData.x,
      apiData.y
    );
    geo.rotateX(-Math.PI / 2);

    const positions = (geo.attributes.position as PlaneBufferGeometryProps)
      .array as number[];
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const z = positions[i + 2];

      const offset = (apiData.z * z) / viewport.height;
      positions[i + 1] = y + apiData.y * offset;
    }
    return geo;
  }, [apiData, viewport.height, viewport.width]);

  const material = useMemo(() => {
    return new MeshStandardMaterial({
      color: 0x00ff00,
      side: DoubleSide,
    });
  }, []);

  return <mesh geometry={geometry} material={material} position={[0, -1, 0]} />;
};

export default Mountain;
