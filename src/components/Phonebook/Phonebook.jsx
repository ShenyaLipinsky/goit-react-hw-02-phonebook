import propTypes from 'prop-types';
// import { Box } from '../Box';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

const initialValues = {
  name: '',
  number: '',
};
const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('*This area is required'),
  number: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .min(7, 'Too short number')
    .max(13, 'Too long number')
    .required('*This area is required'),
});
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

export const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    // values.name.trim();
    values.id = nanoid(10);
    onAddContact(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label htmlFor="name">Name:</label>
        <div>
          <Field type="text" name="name" />
          <FormError name="name"></FormError>
        </div>
        <label htmlFor="number">Phone:</label>
        <div>
          <Field type="tel" name="number" />
          <FormError name="number"></FormError>
        </div>
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onAddContact: propTypes.func.isRequired,
};
