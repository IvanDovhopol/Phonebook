import { useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/contacts/selectors';
import { Contact } from 'components/Contact';

import PropTypes from 'prop-types';
import { Table, Heading, Notification } from './styled';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div>
      {contacts?.length > 0 && !error && (
        <Table>
          <thead>
            <tr>
              <Heading>Name</Heading>
              <Heading>Email</Heading>
              <Heading>Phone</Heading>
            </tr>
          </thead>

          <tbody>
            {contacts.map(({ _id, name, phone, email }) => (
              <Contact
                key={_id}
                id={_id}
                name={name}
                number={phone}
                email={email}
              />
            ))}
          </tbody>
        </Table>
      )}
      {!isLoading && contacts?.length === 0 && (
        <Notification>Contact not found 🤔</Notification>
      )}
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};
