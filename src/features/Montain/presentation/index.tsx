// Mountain.tsx

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Mesh, BufferGeometry } from 'three';
import { Vector3 } from 'three';

interface MountainProps {
  apiData: Array<[number, number, number]>;
  position: [number, number, number];
}

const Mountain: React.FC<MountainProps> = ({ apiData, position }) => {
  const meshRef = useRef<Mesh>(null);
  const geometryRef = useRef<BufferGeometry>(null);

  useEffect(() => {
    if (meshRef.current && geometryRef.current) {
      const geometry = meshRef.current.geometry;
      const positionsAttribute = geometry.getAttribute('position');

      if (positionsAttribute instanceof THREE.BufferAttribute) {
        const positions = positionsAttribute;
        const count = positions.count;

        for (let i = 0; i < count; i++) {
          const vertex = new Vector3(
            positions.getX(i),
            positions.getY(i),
            positions.getZ(i)
          );

          apiData.forEach(([x, y, z]) => {
            const distance = vertex.distanceTo(new Vector3(x, y, z));

            if (distance < 10) {
              vertex.z += 10 - distance;
            }
          });

          positions.setXYZ(i, vertex.x, vertex.y, vertex.z);
        }

        positions.needsUpdate = true;
        geometry.computeVertexNormals();
      }
    }
  }, [apiData]);

  return (
    <mesh ref={meshRef} position={position}>
      <planeBufferGeometry ref={geometryRef} args={[100, 100, 50, 50]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
};

export default Mountain;
