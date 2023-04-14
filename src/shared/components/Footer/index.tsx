import { Button } from '../Button';
import * as S from './styles';

export interface FooterProps {
  onNextClick?: () => void;
  onPreviusClick?: () => void;
  nextText?: string;
  previusText?: string;
  nextButtonType?: 'button' | 'submit' | 'reset';
}

export function Footer({
  nextText,
  previusText,
  nextButtonType,
  onNextClick,
  onPreviusClick,
}: FooterProps) {
  return (
    <S.Container>
      {!!previusText && (
        <Button
          type="button"
          variant="tertiary"
          minWidth="10rem"
          onClick={onPreviusClick}
        >
          {previusText}
        </Button>
      )}

      {!!nextText && (
        <S.NextButtonBox id="vsdcs">
          <Button
            type={nextButtonType || 'button'}
            minWidth="22rem"
            onClick={onNextClick}
          >
            {nextText}
          </Button>
        </S.NextButtonBox>
      )}
    </S.Container>
  );
}
