import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import FormElem from 'components/FormContacts';
import Container from '@mui/material/Container';
import { Wrapper } from './Contacts.styled';

const Contacts = () => {
  return (
    <Container maxWidth="xl">
      <Wrapper>
        <FormElem />
        <div>
          <Filter />
          <ContactsList />
        </div>
      </Wrapper>
    </Container>
  );
};

export default Contacts;
