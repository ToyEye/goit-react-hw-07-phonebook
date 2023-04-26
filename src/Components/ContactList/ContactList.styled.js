import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ContactItem } from '../ContactItem';
import filterSelector from '../../redux/contacts/contact-selector';

import { useSelector } from 'react-redux';

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
  const [filteredContacts, setFilteredContacts] = useState();
  const filtered = useSelector(filterSelector);

  useEffect(() => {
    setFilteredContacts(filtered);
  }, [filtered]);

  return (
    <ContactStyledList>
      {filteredContacts &&
        filteredContacts.map(({ name, id, phone }) => (
          <ContactItem key={id} name={name} id={id} phone={phone} />
        ))}
    </ContactStyledList>
  );
};

export default ContactList;
