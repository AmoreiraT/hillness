import { ReactNode, useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import './styles.css';

type PropsGridLayout = { children: ReactNode };

const ResponsiveGridLayout = WidthProvider(Responsive);

export function GridLayout({ children }: PropsGridLayout) {
  const layoutLg = [
    { i: '0', x: 0, y: 8, w: 3, h: 8 },
    { i: '1', x: 6, y: 0, w: 3, h: 8 },
    { i: '2', x: 3, y: 8, w: 3, h: 8 },
    { i: '3', x: 0, y: 0, w: 3, h: 8 },
    { i: '4', x: 3, y: 0, w: 3, h: 8 },
    { i: '5', x: 6, y: 0, w: 3, h: 8 },
  ];
  const layoutMd = [
    { i: '0', x: 0, y: 0, w: 3, h: 8 },
    { i: '1', x: 3, y: 0, w: 3, h: 8 },
    { i: '2', x: 6, y: 0, w: 3, h: 8 },
    { i: '3', x: 0, y: 0, w: 3, h: 8 },
    { i: '4', x: 3, y: 0, w: 3, h: 8 },
    { i: '5', x: 6, y: 0, w: 3, h: 8 },
  ];
  const layoutSm = [
    { i: '0', x: 0, y: 16, w: 3, h: 8 },
    { i: '1', x: 0, y: 0, w: 3, h: 8 },
    { i: '2', x: 3, y: 8, w: 3, h: 8 },
    { i: '3', x: 0, y: 8, w: 3, h: 8 },
    { i: '4', x: 3, y: 0, w: 3, h: 8 },
    { i: '5', x: 0, y: 0, w: 3, h: 8 },
  ];

  const layoutXs = [
    { i: '0', x: 0, y: 16, w: 2, h: 8 },
    { i: '1', x: 0, y: 0, w: 2, h: 8 },
    { i: '2', x: 2, y: 8, w: 2, h: 8 },
    { i: '3', x: 0, y: 8, w: 2, h: 8 },
    { i: '4', x: 2, y: 0, w: 2, h: 8 },
    { i: '5', x: 0, y: 0, w: 2, h: 8 },
  ];

  const layoutXxs = [
    { i: '0', x: 0, y: 0, w: 2, h: 8 },
    { i: '1', x: 0, y: 0, w: 2, h: 8 },
    { i: '2', x: 0, y: 0, w: 2, h: 8 },
    { i: '3', x: 0, y: 0, w: 2, h: 8 },
    { i: '4', x: 0, y: 0, w: 2, h: 8 },
    { i: '5', x: 0, y: 0, w: 2, h: 8 },
  ];

  const layout = {
    lg: layoutLg,
    md: layoutMd,
    sm: layoutSm,
    xs: layoutXs,
    xxs: layoutXxs,
  };

  const [stackWidth, setStackWidth] = useState(window.innerWidth - 100);

  const handleResize = () => {
    setStackWidth(window.screen.width - 100);
  };
  window.addEventListener('resize', () => {
    handleResize();
  });

  return (
    <ResponsiveGridLayout
      className="layout"
      rowHeight={30}
      width={stackWidth}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      layouts={layout}
      isBounded
    >
      {children}
    </ResponsiveGridLayout>
  );
}
