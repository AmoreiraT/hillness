export interface DataProps {
  id: number | string;
  name: string;
}

export interface ValuesProps {
  id: string;
  value: string;
  index?: number;
}

export interface FiltersDataProps {
  label: string;
  selectData: DataProps[];
  required?: boolean;
}

export interface FilterGridProps {
  filtersData: FiltersDataProps[];
  onChange: (values: ValuesProps[]) => void;
}
