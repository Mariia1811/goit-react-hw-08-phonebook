import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import FormElem from 'components/FormContacts';
import { MainTitle, Title, Wrapper } from './Contacts.styled';

function Contacts() {
  return (
    <Wrapper>
      <MainTitle>Phonebook</MainTitle>
      <FormElem />
      <Title>Contacts</Title>
      <Filter />
      <ContactsList />
    </Wrapper>
  );
}

export default Contacts;
