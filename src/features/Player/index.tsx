import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useSphere } from '@react-three/cannon';
import FirstPersonControls from '../../shared/utils/FirstPersonControls';

const Player: React.FC = () => {
  const { camera } = useThree();
  const [ref, api] = useSphere(() => ({
    mass: 1,
    position: [0, 5, 0],
    args: [1],
    fixedRotation: true,
  }));

  const velocity = useRef([0, 0, 0]);
  const scrollSpeed = useRef(0);
  const mountainSize = 50; // Define the mountain size

  useEffect(() => {
    const unsubscribe = api.velocity.subscribe((newVelocity) => {
      velocity.current = newVelocity;
    });
    return () => {
      unsubscribe();
    };
  }, [api.velocity]);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      scrollSpeed.current = event.deltaY * -0.01;
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  useFrame(() => {
    const newPosition = ref.current!.position.clone();
    newPosition.z += scrollSpeed.current;

    // Check if the new position is within the mountain boundaries
    if (
      newPosition.x >= -mountainSize / 2 &&
      newPosition.x <= mountainSize / 2 &&
      newPosition.z >= -mountainSize / 2 &&
      newPosition.z <= mountainSize / 2
    ) {
      ref.current!.position.copy(newPosition);
    }

    camera.position.copy(ref.current!.position);
    camera.position.y += -2;
    scrollSpeed.current *= 0.9; // Slow down the scroll speed gradually
  });

  return (
    <>
      <FirstPersonControls />
      <mesh ref={() => ref} />
    </>
  );
};

export default Player;
