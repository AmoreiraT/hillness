import * as S from './styles';
import { ChevronDown } from '../../../assets/svg/hsbc_icons/chevronDown';

export interface AccordionProps {
  title: string;
  children: JSX.Element;
}

export function Accordion({ title, children }: AccordionProps) {
  return (
    <div>
      <S.AccordionStyled>
        <S.AccordionSummaryStyled
          expandIcon={<ChevronDown direction="down" />}
          aria-controls={`accordion-title-${title}`}
          id={`accordion-title-${title}`}
          className="MuiAccordionSummary-content"
        >
          <S.TypographyStyled>{title}</S.TypographyStyled>
        </S.AccordionSummaryStyled>
        <S.AccordionDetailsStyled>{children}</S.AccordionDetailsStyled>
      </S.AccordionStyled>
    </div>
  );
}
