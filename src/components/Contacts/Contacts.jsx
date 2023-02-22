import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';
import { selectFilteredContacts} from 'redux/selectContacts';
import { BtnDellete, ContactList, ItemEl, NumberEl } from './Contacts.styled';

function Contacts() {
  const dispatch = useDispatch();
  const contactsList = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // if (!contactsList || !contactsList.length) {
  //   return;
  // }

  function handleClick(id) {
    dispatch(deleteContact(id));
  }
  return (
    <ContactList>
      {contactsList?.map(({ id, name, number }) => (
        <ItemEl key={id}>
          <span>{name}: </span>
          <NumberEl>{number}</NumberEl>
          <BtnDellete onClick={() => handleClick(id)}>Delete</BtnDellete>
        </ItemEl>
      ))}
    </ContactList>
  );
}

export default Contacts;
