import * as S from './styles';

type DataProps = {
  id: number;
  title: string;
  subTitle?: string;
  pageStep: number;
};

export interface StepperProps {
  step: number;
  setStep: (value: number) => void;
  data: DataProps[];
}

export function Stepper({ step, setStep, data }: StepperProps) {
  const handleStep = (page: number) => {
    if (step === page) {
      return 'selected';
    }
    if (step < page) {
      return 'next';
    }
    if (step > page) {
      return 'visualized';
    }
    return '';
  };
  return (
    <S.Container>
      {data.map((item, i) => {
        return (
          <S.Step
            key={item.id}
            $state={handleStep(item.pageStep)}
            $index={i}
            $max={data.length}
            onClick={() => setStep(item.pageStep)}
          >
            <S.Title $state={handleStep(item.pageStep)}>{item.title}</S.Title>
            {item.subTitle && (
              <S.SubTitle $state={handleStep(item.pageStep)}>
                {item.subTitle}
              </S.SubTitle>
            )}
          </S.Step>
        );
      })}
    </S.Container>
  );
}
