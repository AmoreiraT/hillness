import { useEffect, useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const movementSpeed = 0.1;

export function handleMouseMove(
  event: MouseEvent,
  camera: THREE.PerspectiveCamera
) {
  const movementX = event.movementX || 0;
  const movementY = event.movementY || 0;

  camera.rotation.y -= movementX * 0.002;
  camera.rotation.x -= movementY * 0.002;

  camera.rotation.x = Math.max(
    -Math.PI / 2,
    Math.min(Math.PI / 2, camera.rotation.x)
  );
}

export function handleMouseWheel(
  event: WheelEvent,
  camera: THREE.PerspectiveCamera
) {
  const delta = -event.deltaY * 0.01;
  const newPosition = camera.position
    .clone()
    .add(camera.getWorldDirection(new THREE.Vector3()).multiplyScalar(delta));

  camera.position.copy(newPosition);
}
const FirstPersonControls: React.FC = () => {
  const { camera } = useThree();
  const prevZRef = useRef(0);

  useFrame((_: any, delta: number) => {
    const frontVector = new THREE.Vector3(0, 0, -1).applyQuaternion(
      camera.quaternion
    );
    const sideVector = new THREE.Vector3(-1, 0, 0).applyQuaternion(
      camera.quaternion
    );
    const speed = 5;

    const direction = new THREE.Vector3();
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
