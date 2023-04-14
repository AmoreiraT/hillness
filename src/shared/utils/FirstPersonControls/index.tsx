import { useEffect, useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';

const FirstPersonControls: React.FC = () => {
  const { camera } = useThree();
  const prevZRef = useRef(0);

  useFrame((_: any, delta: number) => {
    const frontVector = new Vector3(0, 0, -1).applyQuaternion(
      camera.quaternion
    );
    const sideVector = new Vector3(-1, 0, 0).applyQuaternion(camera.quaternion);
    const speed = 5;

    const direction = new Vector3();
    direction.subVectors(frontVector, sideVector);

    const zMovement = direction.z * speed * delta;
    camera.position.z += zMovement;

    const scrollDelta = camera.position.z - prevZRef.current;
    camera.position.y += scrollDelta * 0.5;
    prevZRef.current = camera.position.z;
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const movementX = event.movementX || 0;
      const movementY = event.movementY || 0;
      const sensitivity = 0.002;

      camera.rotation.y -= movementX * sensitivity;
      camera.rotation.x -= movementY * sensitivity;
      camera.rotation.x = Math.max(
        -Math.PI / 2,
        Math.min(Math.PI / 2, camera.rotation.x)
      );
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [camera]);

  return null;
};

export default FirstPersonControls;
