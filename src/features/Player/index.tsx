import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { useSphere } from '@react-three/cannon';
import FirstPersonControls, {
  handleMouseWheel,
} from '../../shared/utils/FirstPersonControls';
import { handleMouseMove } from './../../shared/utils/FirstPersonControls';
import { isWithinBounds } from './../../shared/utils/isWithinBounds';

interface Props {
  camera: THREE.PerspectiveCamera;
}

const Player: React.FC = () => {
  const { scene } = useThree();
  const [ref] = useSphere(() => ({
    mass: 1,
    position: [0, 1, 0],
    type: 'Dynamic',
  }));
  const camera = useThree((state) => state.camera as THREE.PerspectiveCamera);

  React.useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      handleMouseMove(event, camera);
    };

    const onMouseWheel = (event: WheelEvent) => {
      handleMouseWheel(event, camera);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('wheel', onMouseWheel);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('wheel', onMouseWheel);
    };
  }, [camera]);

  React.useEffect(() => {
    if (ref.current && camera) {
      camera.position.set(
        ref.current.position.x,
        ref.current.position.y + 1.5,
        ref.current.position.z
      );
      ref.current.add(camera);
      scene.add(ref.current);
    }
  }, [ref, camera, scene]);

  return (
    <mesh ref={() => ref} receiveShadow castShadow>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="lightblue" />
    </mesh>
  );
};

export default Player;
