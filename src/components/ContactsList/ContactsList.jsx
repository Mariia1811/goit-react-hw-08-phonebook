import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import { selectFilteredContacts } from 'redux/contacts/selectContacts';
import {
  BtnDellete,
  ContactList,
  ItemEl,
  NumberEl,
  TitleList,
} from './ContactsList.styled';

const ContactsList = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleClick = id => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      <TitleList>Contacts</TitleList>
      <ContactList>
        {contactsList?.map(({ id, name, number }) => (
          <ItemEl key={id}>
            <span>{name}: </span>
            <NumberEl>{number}</NumberEl>
            <BtnDellete onClick={() => handleClick(id)}>Delete</BtnDellete>
          </ItemEl>
        ))}
      </ContactList>
    </>
  );
};

export default ContactsList;
