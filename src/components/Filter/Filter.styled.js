import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${p => `${p.theme.space[3]}px`};
`;
export const FilterInput = styled(Field)`
  width: 50%;
  margin-top: ${p => `${p.theme.space[3]}px`};
`;
export const FilterForm = styled(Form)`
  width: 100%;
  /* margin-top: ${p => `${p.theme.space[3]}px`}; */
`;
