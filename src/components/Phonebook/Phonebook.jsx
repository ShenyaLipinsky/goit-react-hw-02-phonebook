import propTypes from 'prop-types';
import {
  PhonebookForm,
  PhonebookLabel,
  PhonebookInput,
  PhonebookBtn,
} from './Phonebook.styled';
import { nanoid } from 'nanoid';
import { Component } from 'react';

const INIT_VALUES = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  state = { ...INIT_VALUES };

  static propTypes = {
    onAddContact: propTypes.func.isRequired,
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    const { onAddContact } = this.props;
    e.preventDefault();
    onAddContact({ ...this.state, id: nanoid(10) });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INIT_VALUES });
  };

  render() {
    const { name, number } = this.state;
    return (
      <PhonebookForm autoComplete="off" onSubmit={this.handleSubmit}>
        <PhonebookLabel htmlFor="name">
          Name:
          <PhonebookInput
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </PhonebookLabel>
        <PhonebookLabel htmlFor="number">
          Phone:
          <PhonebookInput
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </PhonebookLabel>
        <PhonebookBtn type="submit">Add Contact</PhonebookBtn>
      </PhonebookForm>
    );
  }
}
