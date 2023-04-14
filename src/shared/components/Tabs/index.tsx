import React, {
  ComponentPropsWithoutRef,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Box, Typography } from '@mui/material';
import * as S from './styles';

export interface TabsComponentProps {
  label?: string[];
  childrens?: JSX.Element[];
  orientation: 'horizontal' | 'vertical' | undefined;
  fullHeight?: boolean;
}

export function CustomTabs({
  label,
  childrens,
  orientation,
  fullHeight,
  ...props
}: TabsComponentProps & ComponentPropsWithoutRef<'div'>) {
  const [tabIndex, setTabIndex] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  const handleTabChange = (event: unknown, newTabIndex: number) => {
    setTabIndex(newTabIndex);
  };

  return (
    <S.WrapperBox $orientation={orientation} ref={elementRef}>
      <S.StyledTabs
        orientation={orientation}
        value={tabIndex}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons={false}
        sx={{ ...props }}
      >
        {label?.map((l, i) =>
          orientation === 'vertical' ? (
            <S.StyledVerticalTab ref={elementRef} key={i} label={l} />
          ) : (
            <S.StyledTab ref={elementRef} key={i} label={l} />
          )
        )}
      </S.StyledTabs>
      {childrens?.map(
        (c, i) =>
          tabIndex === i && (
            <S.Wrapper ref={elementRef} $orientation={orientation} key={i}>
              {c}
            </S.Wrapper>
          )
      )}
    </S.WrapperBox>
  );
}

export interface TabProps {
  label: string;
  disabled: boolean;
}

export function CustomTitleTab({ label, disabled, ...props }: TabProps) {
  return (
    <S.StyledTitleTab label={label} disabled={disabled} sx={{ ...props }} />
  );
}
