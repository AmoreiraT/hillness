import { FormValuesProps, GetInitialValuesProps } from '../types';

export const getInitialValues = ({
  values,
  formData,
}: GetInitialValuesProps) => {
  const initialValues = {} as FormValuesProps;

  formData?.forEach((data) =>
    data.fields.forEach((field) => {
      if (Object.keys(values).length) {
        initialValues[field.id] = values[field.id];
      } else {
        initialValues[field.id] = '';
      }
    })
  );

  return initialValues;
};
