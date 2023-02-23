import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import FormElem from 'components/FormContacts';
import Container from '@mui/material/Container';
import { MainTitle, Title, Wrapper } from './Contacts.styled';

function Contacts() {
  return (
       <Container maxWidth='xl'>
    <Wrapper>
      <MainTitle>Phonebook</MainTitle>
      <FormElem />
      <Title>Contacts</Title>
      <Filter />
      <ContactsList />
      </Wrapper>
      </Container>
  );
}

export default Contacts;
