import PropTypes from 'prop-types';
import { Contact, Button } from './ContactListItem.styled';

const ContactListItem = ({ name, phone, onDeleteContact, id }) => {
  return (
    <Contact>
      <div>
        <span>{name}</span>: <span>{phone}</span>
      </div>
      <Button
        type="button"
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        delete
      </Button>
    </Contact>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactListItem;
