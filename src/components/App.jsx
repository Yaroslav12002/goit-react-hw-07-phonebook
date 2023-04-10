import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';

import ContactForm from './ContactForm/Contactform';
import ContactList from './ContactList';
import Filter from './Filter';
import { Section } from './App.styled';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />

      <ContactList />
      {isLoading && !error && (
        <p>
          <b>Request in progress...</b>
        </p>
      )}
    </Section>
  );
}
