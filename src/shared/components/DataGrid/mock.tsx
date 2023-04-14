import { GridRowParams } from '@mui/x-data-grid';
import { Button } from '@shared/components/Button';

type ButtonsProps = {
  params?: GridRowParams;
  onButtonClick?: (id: string, params: GridRowParams) => void;
};

export function ButtonsMock({ params, onButtonClick }: ButtonsProps) {
  return (
    <div
      style={{
        display: 'flex',
        gap: 8,
      }}
    >
      <Button
        type="button"
        variant="tertiary"
        onClick={() => params && onButtonClick && onButtonClick('deny', params)}
      >
        Deny
      </Button>

      {params?.row.col5 === 'Blocked' ? (
        <Button
          type="button"
          variant="secondary"
          onClick={() =>
            params && onButtonClick && onButtonClick('approve', params)
          }
        >
          Aprove
        </Button>
      ) : (
        <Button
          type="button"
          variant="secondary"
          onClick={() =>
            params && onButtonClick && onButtonClick('block', params)
          }
        >
          Block
        </Button>
      )}
    </div>
  );
}
