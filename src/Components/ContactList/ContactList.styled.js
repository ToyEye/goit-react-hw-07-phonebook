import React from 'react';
import styled from 'styled-components';
import { ContactItem } from '../ContactItem';
import { useFilterContactQuery } from '../../redux/contacts/contactsApi';
import { LoaderSimbol } from '../Loader/';
import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/contacts/contact-selector';

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
  const filter = useSelector(getFilter);

  const { data: contacts, isFetching } = useFilterContactQuery(filter);

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
