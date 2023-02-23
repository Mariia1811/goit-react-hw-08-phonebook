import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import { useAuth } from '../../hooks/useAuth';
import { HeaderStyled } from './AppBar.styled';

function AppBar() {
  const { isLoggedIn } = useAuth();

  return (
    <HeaderStyled>
      <h1>phonebook</h1>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderStyled>
  );
}

export default AppBar;
