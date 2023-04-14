import * as Yup from 'yup';

import { FormDataProps, ValidationSchemaProps } from '../types';

export const getValidationSchema = (formData: FormDataProps[]) => {
  const validationSchema = {} as ValidationSchemaProps;

  formData?.forEach((data) =>
    data.fields.forEach((field) => {
      validationSchema[field.id] = Yup.string().test(
        field.id,
        field.errorMessage ? field.errorMessage : '',
        field.validation ? field.validation : () => []
      );
    })
  );

  return Yup.object().shape(validationSchema);
};
