import {
  useRef,
  useEffect,
  useState,
  createContext,
  MutableRefObject,
  useContext,
} from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useSphere } from '@react-three/cannon';
import FirstPersonControls from '../../shared/utils/FirstPersonControls';
import * as THREE from 'three';

export const ScrollContainer = createContext<{
  scrollSpeed: MutableRefObject<number>;
}>({ scrollSpeed: { current: 0 } });

const Player: React.FC = () => {
  const { camera, scene } = useThree();
  const playerRef = useRef<THREE.Mesh>(null);
  const { scrollSpeed } = useContext(ScrollContainer);

  const getMountainHeightAt = (x: number, z: number): number => {
    const mountain = scene.getObjectByName('Mountain');
    if (!mountain) return 0;

    const mountainGeometry = (mountain as THREE.Mesh).geometry;
    const positionAttribute = mountainGeometry.getAttribute(
      'position'
    ) as THREE.BufferAttribute;

    let closestVertexIndex = Math.floor(positionAttribute.count / 2) * 3;
    let closestDistance = Infinity;

    for (let i = 0; i < positionAttribute.count; i += 3) {
      const vx = positionAttribute.getX(i);
      const vz = positionAttribute.getZ(i);
      const distance = Math.hypot(x - vx, z - vz);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestVertexIndex = i;
      }
    }

    return positionAttribute.getY(closestVertexIndex);
  };

  useFrame(({ clock }) => {
    if (!playerRef.current) return;

    const speed = 0.1;
    const delta = clock.getDelta();

    const direction = new THREE.Vector3(0, 0, -1)
      .applyQuaternion(camera.quaternion)
      .multiplyScalar(delta * speed * scrollSpeed.current);
    const newPosition = playerRef.current.position.clone().add(direction);
    newPosition.y = getMountainHeightAt(newPosition.x, newPosition.z) + 0.5;

    playerRef.current.position.copy(newPosition);
    camera.position.copy(newPosition.clone().add(new THREE.Vector3(0, 1.8, 0)));

    scrollSpeed.current *= 0.9;
  });

  return (
    <mesh ref={playerRef} position={[0, 0, 0]}>
      <FirstPersonControls isEnabled={false} />
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color=" 0xffffff" />
    </mesh>
  );
};

export default Player;
