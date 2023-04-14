import * as S from './styles';

export interface TextAreaComponentProps {
  label?: string;
  helpText?: string;
  minRows?: number;
  maxRows?: number;
  placeholder?: string;
  defaultValue?: string;
  width?: string;
}
export function TextArea({
  label,
  helpText,
  minRows,
  maxRows,
  placeholder,
  defaultValue,
  width,
}: TextAreaComponentProps) {
  return (
    <S.Wrapper width={width}>
      <S.LabelSelect>{label}</S.LabelSelect>
      {helpText && <S.LabelHelpText>{helpText}</S.LabelHelpText>}
      <S.TextAreaStyled
        minRows={minRows}
        maxRows={maxRows}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </S.Wrapper>
  );
}
