import { useEffect, useState } from 'react';
import { useThree, useFrame } from '@react-three/fiber';

const FirstPersonControls = () => {
  const { camera } = useThree();
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [mouseMovement, setMouseMovement] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseDown = () => {
      setIsMouseDown(true);
    };

    const handleMouseUp = () => {
      setIsMouseDown(false);
    };

    const handleMouseMove = (e: { movementX: number; movementY: number }) => {
      if (isMouseDown) {
        setMouseMovement({
          x: e.movementX / 100,
          y: -e.movementY / 100,
        });
      }
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMouseDown]);

  useFrame(() => {
    if (isMouseDown) {
      camera.rotation.x += mouseMovement.y;
      camera.rotation.y += mouseMovement.x;
    }
  });

  return null;
};

export default FirstPersonControls;
