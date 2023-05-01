// useTextureLoader.ts
import * as THREE from 'three';
import { useMemo } from 'react';

const useTextureLoader = (
  diffuseTexture: string,
  normalTexture: string,
  aoTexture: string
) => {
  const textureLoader = useMemo(() => new THREE.TextureLoader(), []);

  const diffuseMap = useMemo(
    () => textureLoader.load(diffuseTexture),
    [textureLoader, diffuseTexture]
  );
  const normalMap = useMemo(
    () => textureLoader.load(normalTexture),
    [textureLoader, normalTexture]
  );
  const aoMap = useMemo(
    () => textureLoader.load(aoTexture),
    [textureLoader, aoTexture]
  );

  return { diffuseMap, normalMap, aoMap };
};

export default useTextureLoader;
