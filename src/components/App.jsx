import { Component } from 'react';
import { Box } from './Box';
import { ContactForm } from './Phonebook/Phonebook';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  filterSubmit = e => {
    e.preventDefault();
  };

  handleChange = evt => {
    this.setState({ filter: evt.target.value });
  };

  filterItems = (arr, query) => {
    let newArray = arr.filter(
      el => el.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
    return newArray;
  };

  addContact = values => {
    this.setState(prevState => {
      if (
        prevState.contacts.find(
          contact => contact.name.toLowerCase() === values.name.toLowerCase()
        )
      ) {
        return alert(`${values.name} is already in contacts.`);
      } else {
        return { contacts: [...prevState.contacts, values] };
      }
    });
  };

  removeContact = id => {
    this.setState(prevState => {
      const newArray = prevState.contacts.filter(el => el.id !== id);
      return { contacts: newArray };
    });
  };

  render() {
    const { filter } = this.state;
    return (
      <Box
        mt={4}
        mx={'auto'}
        px={4}
        py={5}
        display={'flex'}
        flexDirection="column"
        alignItems="center"
        width={3}
        borderRadius={'large'}
        bg={'secondary'}
      >
        <h1>PhoneBook</h1>
        <ContactForm onAddContact={this.addContact}></ContactForm>
        <h2>Contacts</h2>
        <Filter
          title="Find contacts by name"
          value={filter}
          filterText={this.handleChange}
          onFilterSubmit={this.filterSubmit}
        />
        <Contacts
          contacts={this.filterItems(this.state.contacts, filter)}
          onRemoveContact={this.removeContact}
        />
      </Box>
    );
  }
}
