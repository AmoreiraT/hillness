import React, { useRef, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { FirstPersonControls } from 'three-stdlib';

const PlayerControls: React.FC = () => {
  const { camera, gl } = useThree();
  const controls = useRef<FirstPersonControls>();

  useFrame((state, delta) => {
    controls.current!.update(delta);
  });

  useEffect(() => {
    controls.current = new FirstPersonControls(camera, gl.domElement);
    controls.current.movementSpeed = 10;
    controls.current.lookSpeed = 0.1;
    return () => {
      controls.current!.dispose();
    };
  }, [camera, gl.domElement]);

  return null;
};

export default PlayerControls;
