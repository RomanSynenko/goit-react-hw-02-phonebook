import React, { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";

import s from './ContainerStyle.module.scss';
import ContactList from "./ContatctList/ContatctList";

class App extends Component {
  state = {
    contacts: []
  }
  onAddContact = (newContact) => this.setState(
    ({ contacts }) => ({ contacts: [...contacts, newContact] })
  )
  handelCheskUniqueContact = (name) => {
    const { contacts } = this.state;
    const isExistContact = !!contacts.find((contact) => contact.name === name);
    isExistContact && alert('This contact is already exist');
    return !isExistContact
  }
  handleRemoveContact = (id) => {
    this.setState(({ contacts }) => ({ contacts: contacts.filter((contact) => contact.id !== id) }))
  }
  render() {
    const { contacts } = this.state;
    return (
      <div className={s.container}>
        <ContactForm onAdd={this.onAddContact} onCheckUnique={this.handelCheskUniqueContact} />
        <ContactList contacts={contacts} onRemove={this.handleRemoveContact} />
      </div>
    )
  };
}
export default App;
