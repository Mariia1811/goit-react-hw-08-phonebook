import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import { useAuth } from '../../hooks/useAuth';
import Container from '@mui/material/Container';
import { HeaderStyled } from './AppBar.styled';

function AppBar() {
  const { isLoggedIn } = useAuth();

  return (
     <Container maxWidth='xl'>
    <HeaderStyled>
      <h1>phonebook</h1>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </HeaderStyled>
      </Container>
  );
}

export default AppBar;
