import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import { Box } from '@mui/material';
import { Select } from '../Select';
import { CustomTitleTab } from '../Tabs';
import { OptionProps } from '../Select/types';
import { InputText } from '../InputText';
import { RadioButtonsGroup } from '../RadioButtonsGroup';
import { LayoutForm } from '../LayoutForm';
import { DynamicFormProps, FormDataProps } from './types';
import { getInitialValues } from './initialValues';
import { getValidationSchema } from './validadations';

import * as S from './styles';

export function DynamicForm({
  formData,
  formValues,
  topElement,
  nextRoute,
  calcHeight,
  onSubmitForm,
}: DynamicFormProps) {
  const navigate = useNavigate();

  const { values, errors, touched, handleChange, submitForm } = useFormik({
    initialValues: getInitialValues({
      values: formValues,
      formData: formData as unknown as FormDataProps[],
    }),
    validationSchema: getValidationSchema(
      formData as unknown as FormDataProps[]
    ),
    onSubmit: (submitValues) => {
      onSubmitForm(submitValues);
      if (nextRoute) navigate(nextRoute);
    },
  });

  return (
    <LayoutForm
      nextText="Submit"
      nextButtonType="submit"
      previusText="Back"
      onNextClick={submitForm}
      calcHeight={calcHeight}
      onPreviusClick={() => navigate(-1)}
    >
      {topElement && topElement}

      {formData.map((data, index) => (
        <Box key={data.groupName}>
          <S.LabelBox>
            <CustomTitleTab label={data.groupName} disabled />
          </S.LabelBox>

          <S.FieldsBox>
            {data.fields.map((field) => {
              if (field.type === 'select') {
                return (
                  <Select
                    key={field.id}
                    inline
                    width="36rem"
                    widthBox="53rem"
                    name={field.id}
                    label={field.label}
                    required={field.required}
                    options={field.options as unknown as OptionProps[]}
                    value={field.id ? values[field.id] : ''}
                    onChange={handleChange}
                    error={
                      errors[field.id] && touched[field.id] && errors[field.id]
                    }
                  />
                );
              }

              if (field.type === 'radio') {
                return (
                  <RadioButtonsGroup
                    key={field.id}
                    inline
                    required
                    width="36rem"
                    name={field.id}
                    label={field.label}
                    options={field.radios as unknown as OptionProps[]}
                    value={field.id ? values[field.id] : ''}
                    onChange={handleChange}
                    error={
                      errors[field.id] && touched[field.id] && errors[field.id]
                    }
                  />
                );
              }

              return (
                <InputText
                  key={field.id}
                  inline
                  width="36rem"
                  name={field.id}
                  label={field.label}
                  value={values[field.id]}
                  maxLength={field.maxLength}
                  required={field.required}
                  onChange={handleChange}
                  error={
                    errors[field.id] && touched[field.id] && errors[field.id]
                  }
                />
              );
            })}
          </S.FieldsBox>

          {index + 1 < formData.length && <S.Separator />}
        </Box>
      ))}
    </LayoutForm>
  );
}
