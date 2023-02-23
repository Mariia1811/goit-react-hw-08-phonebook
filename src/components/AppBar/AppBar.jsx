import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import useAuth from '../../hooks/useAuth';
import { HeaderStyled, Logo } from './AppBar.styled';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HeaderStyled>
      <Logo>phonebook</Logo>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderStyled>
  );
};

export default AppBar;
