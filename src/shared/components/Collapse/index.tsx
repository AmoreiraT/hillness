import {
  ComponentPropsWithoutRef,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import { isMobile } from 'react-device-detect';
import * as S from './styles';

interface BaseProps {
  readonly children?: ReactNode;
  readonly className?: string;
  open: boolean;
}

type DimensionType<T extends string> = T extends 'both'
  ? { width: number; height: number }
  : number;

type ConditionalProps =
  | {
      orientation: 'vertical' | 'horizontal';
      max?: number;
      min?: number;
      mobileMin?: number;
      mobileMax?: number;
    }
  | {
      orientation: 'both';
      max?: { height: number; width: number };
      min?: { height: number; width: number };
      mobileMin?: { height: number; width: number };
      mobileMax?: { height: number; width: number };
    };

export type CollapseProps = BaseProps & ConditionalProps;
export function Collapse({
  ...props
}: CollapseProps & ComponentPropsWithoutRef<'div'>) {
  const { open, max, min, orientation, children, ...rest } = props;

  const elementRef = useRef<HTMLDivElement>(null);
  const [localOpen, setLocalOpen] = useState(open);
  const [transitioning, setTransitioning] = useState(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );

  const dimensionRef = useRef<DimensionType<typeof orientation>>();

  useEffect(() => {
    if (orientation === 'both') {
      dimensionRef.current = {
        width: elementRef.current ? elementRef.current.scrollWidth / 10 : 0,
        height: elementRef.current ? elementRef.current.scrollHeight / 10 : 0,
      };
    } else if (orientation === 'vertical') {
      dimensionRef.current = elementRef.current
        ? elementRef.current.scrollHeight / 10
        : 0;
    } else {
      dimensionRef.current = elementRef.current
        ? elementRef.current.scrollWidth / 10
        : 0;
    }
  }, []);

  useEffect(() => {
    if (open !== localOpen) {
      elementRef.current?.removeAttribute('style');

      setTransitioning(true);
      setLocalOpen(open);
      setTransitioning(false);
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [open]);

  useEffect(() => {
    if (localOpen === open && !transitioning) {
      if (!min || (isMobile && props.mobileMin === 0)) {
        if (localOpen) {
          timeoutRef.current = setTimeout(() => {
            switch (orientation) {
              case 'both': {
                if (dimensionRef.current) {
                  if (!(typeof dimensionRef.current === 'number')) {
                    elementRef.current?.setAttribute(
                      'style',
                      `height:${dimensionRef.current?.height}rem; width:${dimensionRef.current?.width}rem;`
                    );
                  }
                }
                break;
              }
              case 'vertical': {
                elementRef.current?.setAttribute('style', `height:auto;`);
                break;
              }
              case 'horizontal': {
                elementRef.current?.setAttribute('style', `width:auto;`);
                break;
              }
              default: {
                elementRef.current?.setAttribute('style', ``);
                break;
              }
            }
          }, 300);
        } else {
          timeoutRef.current = setTimeout(() => {
            elementRef.current?.setAttribute('style', 'display:none;');
          }, 300);
        }
      }
    }
  }, [localOpen]);

  return (
    <S.Collapse
      $open={localOpen}
      $transitioning={transitioning}
      $orientation={orientation}
      $min={min}
      $max={max ?? dimensionRef.current ?? 0}
      $mobileMin={props.mobileMin}
      $mobileMax={props.mobileMax}
      className={props.className}
      {...rest}
      ref={elementRef}
    >
      {children}
    </S.Collapse>
  );
}
