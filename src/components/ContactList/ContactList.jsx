import ContactListItem from '../ContactListItem';
import { ContactListElement } from './ContactList.styled';
import { selectVisibleContacts } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = idForDelete => {
    dispatch(deleteContact(idForDelete));
  };

  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  return (
    <ContactListElement>
      {contacts.map(({ id, name, phone }) => {
        return (
          <ContactListItem
            key={id}
            name={name}
            phone={phone}
            onDeleteContact={() => {
              handleDeleteContact(id);
            }}
            id={id}
          />
        );
      })}
    </ContactListElement>
  );
};

export default ContactList;
