import propTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

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
      <Form autoComplete="off">
        <p>{title}</p>
        <label htmlFor="filter"></label>
        <div>
          <Field
            type="text"
            name="filter"
            value={value}
            onChange={filterText}
          />
          <FormError name="filter"></FormError>
        </div>
      </Form>
    </Formik>
  );
};

Filter.propTypes = {
  title: propTypes.string,
  value: propTypes.string.isRequired,
  filterText: propTypes.func.isRequired,
};
