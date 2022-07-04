import propTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import styled from 'styled-components';
import { FilterLabel, FilterInput, FilterForm } from './Filter.styled';

const ErrorText = styled.p`
  color: #6b1414;
`;

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};
export const Filter = ({ title, value, filterText }) => {
  return (
    <Formik>
      <FilterForm autoComplete="off">
        <FilterLabel htmlFor="filter">
          {title}
          <FilterInput
            type="text"
            name="filter"
            value={value}
            onChange={filterText}
          />
        </FilterLabel>
        <FormError name="filter"></FormError>
      </FilterForm>
    </Formik>
  );
};

Filter.propTypes = {
  title: propTypes.string,
  value: propTypes.string.isRequired,
  filterText: propTypes.func.isRequired,
};
