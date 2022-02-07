import React, { useState } from 'react';
import styled from 'styled-components';
import toast from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/contacts/contact-action';
import { getContact } from '../../redux/contacts/contact-selector';
import Button from '../Button';
import { ImputEnter, InputType, InputText } from '../FormComponents';

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 450px;
  padding: 10px 15px;
  border: 1px solid black;
  border-radius: 5px;
`;

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContact);
  const dispatch = useDispatch();

  const addContact = ({ name, number }) => {
    if (contacts.find(contact => contact.name === name)) {
      toast.error('Контакт существует!');
      return;
    } else {
      toast.success('Контакт добавлен');
      dispatch(actions.addContact(name, number));
    }
  };

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    addContact({ name, number });

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <InputType>
        {' '}
        <InputText>Name</InputText>
        <ImputEnter
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Enter your name"
          required
          value={name}
          onChange={handleChange}
        />
      </InputType>
      <InputType>
        {' '}
        <InputText>Name</InputText>
        <ImputEnter
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter your number"
          value={number}
          onChange={handleChange}
        />
      </InputType>
      <Button type="submit">Add contact</Button>
    </FormStyled>
  );
}
