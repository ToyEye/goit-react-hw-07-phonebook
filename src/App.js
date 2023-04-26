import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

import { Container } from './Components/Container';
import { Section, Title } from './Components/Section';
import Form from './Components/Form';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';
import { Footer } from './Components/Footer';
import { LoaderSimbol } from './Components/Loader';
import { fetchApi } from './redux/contacts/contact-operation';
import './App.css';

export default function App() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(fetchApi());
  }, [dispatch]);

  return (
    <Container>
      <Toaster
        toastOptions={{
          error: {
            duration: 2000,
          },
        }}
      />
      <Section>
        <Title>Phonebook</Title>
        <Form />
      </Section>
      <Section>
        <Title>Contacts</Title>
        <Filter />
        {loading && !error && <LoaderSimbol />}
        <ContactList />
      </Section>

      <Footer />
    </Container>
  );
}
