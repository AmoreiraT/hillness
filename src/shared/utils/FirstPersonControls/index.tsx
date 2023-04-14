import { useEffect, useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';
interface FirstPersonControlsProps {
  isEnabled: boolean;
}
const FirstPersonControls: React.FC<FirstPersonControlsProps> = ({
  isEnabled,
}) => {
  const { camera } = useThree();
  const previousMouseEvent = useRef<MouseEvent>();

  const maxPitch = Math.PI / 3; // Limit the pitch to 60 degrees
  const mouseSensitivity = 0.001; // Adjust the mouse sensitivity

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      previousMouseEvent.current = event;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useFrame(() => {
    if (!isEnabled || !previousMouseEvent.current) {
      return;
    }

    const dx = previousMouseEvent.current.movementX * mouseSensitivity;
    const dy = previousMouseEvent.current.movementY * mouseSensitivity;

    camera.rotation.y -= dx;
    camera.rotation.x -= dy;

    // Clamp the rotation.x to the range [-maxPitch, maxPitch]
    camera.rotation.x = Math.max(
      Math.min(camera.rotation.x, maxPitch),
      -maxPitch
    );
  });

  return null;
};

export default FirstPersonControls;
