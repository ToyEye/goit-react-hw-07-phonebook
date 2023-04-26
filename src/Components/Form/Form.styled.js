import React, { useState } from 'react';
import styled from 'styled-components';
import toast from 'react-hot-toast';
import Button from '../Button';
import { ImputEnter, InputType, InputText } from '../FormComponents';

import { addContactThunk } from '../../redux/contacts/contact-operation';

import { useDispatch, useSelector } from 'react-redux';

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
  const [phone, setNumber] = useState('');

  const { contacts } = useSelector(state => state.contacts);

  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = async evt => {
    evt.preventDefault();

    if (contacts.item.find(contact => contact.name === name)) {
      toast.error('Контакт существует!');
      return;
    } else {
      toast.success('Контакт добавлен');
      await dispatch(addContactThunk({ name, phone }));
    }

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
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter your number"
          value={phone}
          onChange={handleChange}
        />
      </InputType>
      <Button type="submit">Add contact</Button>
    </FormStyled>
  );
}
