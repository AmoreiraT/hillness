import { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { useSphere } from '@react-three/cannon';

const ScrollControls: React.FC = () => {
  const [ref, api] = useSphere(() => ({ type: 'Static' }));
  const scrollSpeed = useRef(0);
  const { gl } = useThree();

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      scrollSpeed.current = event.deltaY * -0.01;
      api.velocity.set(0, 0, scrollSpeed.current);
    };

    gl.domElement.addEventListener('wheel', handleScroll);

    return () => {
      gl.domElement.removeEventListener('wheel', handleScroll);
    };
  }, [gl.domElement, api]);

  return null;
};

export default ScrollControls;
