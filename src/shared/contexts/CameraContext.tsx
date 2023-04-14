import React, { createContext, useContext } from 'react';
import { PerspectiveCamera } from 'three';

interface CameraContextType {
  camera: PerspectiveCamera | null;
  setCamera: (camera: PerspectiveCamera) => void;
}

const CameraContext = createContext<CameraContextType>({
  camera: null,
  setCamera: () => {},
});

export const useCameraContext = () => useContext(CameraContext);

interface CameraProviderProps {
  children: React.ReactNode;
}

export const CameraProvider: React.FC<CameraProviderProps> = ({ children }) => {
  const [camera, setCamera] = React.useState<PerspectiveCamera | null>(null);

  return (
    <CameraContext.Provider value={{ camera, setCamera }}>
      {children}
    </CameraContext.Provider>
  );
};
