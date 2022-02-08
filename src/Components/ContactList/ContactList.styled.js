import React from 'react';
import styled from 'styled-components';
import { ContactItem } from '../ContactItem';
import { useFetchContactsQuery } from '../../redux/contacts/contactsApi';
import { LoaderSimbol } from '../Loader/';

const ContactStyledList = styled.ul`
  width: 450px;
  padding: 15px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  border: 1px solid black;
  border-radius: 5px;
`;

const ContactList = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();

  return (
    <ContactStyledList>
      {isFetching && <LoaderSimbol />}
      {contacts &&
        contacts.map(({ name, id, number }) => (
          <ContactItem key={id} name={name} id={id} number={number} />
        ))}
    </ContactStyledList>
  );
};

export default ContactList;
