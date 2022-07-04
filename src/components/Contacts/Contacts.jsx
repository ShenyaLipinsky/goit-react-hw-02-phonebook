import propTypes from 'prop-types';
import { Box } from '../Box';
import { ContactItem, ContactBtn } from '../Contacts/Contacts.styled';

export const Contacts = ({ contacts, onRemoveContact }) => {
  return (
    <Box as="ul" mt={4} width="100%">
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem key={id}>
            <p>{name}:</p>
            <p>{number}</p>
            <ContactBtn id={id} onClick={() => onRemoveContact(id)}>
              Delete
            </ContactBtn>
          </ContactItem>
        );
      })}
    </Box>
  );
};
Contacts.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onRemoveContact: propTypes.func.isRequired,
};
