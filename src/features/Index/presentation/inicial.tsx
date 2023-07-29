import { useEffect } from 'react';
import CanvasContainer from '../../CanvasContainer/presentation';
import { usePageTitle } from '../../../shared/components/PageTitle/state';
import React from 'react';

export function InitialPage() {
  const { setPageTitleElement } = usePageTitle();

  useEffect(() => {
    setPageTitleElement('H ILL NESS');
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <CanvasContainer />
    </div>
  );
}
