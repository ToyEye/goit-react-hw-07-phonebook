import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ContactItem } from '../ContactItem';
// import { useFetchContactsQuery } from '../../redux/contacts/contactsApi';
import { fetchApi } from '../../redux/contacts/contact-operation';
import { LoaderSimbol } from '../Loader/';
import { useSelector, useDispatch } from 'react-redux';
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
  const dispatch = useDispatch();
  const { loading, contacts } = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(fetchApi());
  }, [dispatch]);

  const filtered = [];

  return (
    <ContactStyledList>
      {loading && <LoaderSimbol />}
      {contacts &&
        contacts.map(({ name, id, phone }) => (
          <ContactItem key={id} name={name} id={id} phone={phone} />
        ))}
    </ContactStyledList>
  );
};

export default ContactList;
