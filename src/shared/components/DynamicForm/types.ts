import { ReactElement } from 'react';
import { AnyObject, StringSchema } from 'yup';
import { OptionProps } from '@shared/components/Select/types';
import { LayoutFormProps } from '../LayoutForm/types';

export interface ValidationSchemaProps {
  [x: string]: StringSchema<string | undefined, AnyObject, undefined, ''>;
}

export interface FormValuesProps {
  [x: string]: string;
}

export interface FieldProps {
  id: string;
  label: string;
  type: string;
  maxLength?: number;
  required?: boolean;
  radios?: OptionProps[];
  options?: OptionProps[];
  errorMessage?: string;
  validation?: (value?: string) => void;
}
export interface FormDataProps {
  groupName: string;
  fields: FieldProps[];
}

export interface GetInitialValuesProps {
  values: FormValuesProps;
  formData?: FormDataProps[];
}

export interface DynamicFormProps {
  formData: FormDataProps[];
  formValues: FormValuesProps;
  topElement?: ReactElement;
  nextRoute?: string;
  calcHeight?: string;
  onSubmitForm: (values: FormValuesProps) => void;
}
