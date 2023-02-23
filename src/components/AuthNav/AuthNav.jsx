import {
  AuthNavContainer,
  AuthNavList,
  AuthNavLinkStyled,
} from './AuthNav.styled';

const AuthNav = () => {
  return (
    <AuthNavContainer>
      <AuthNavList>
        <li>
          <AuthNavLinkStyled to="/login">Log In</AuthNavLinkStyled>
        </li>
        <li>
          <AuthNavLinkStyled to="/register">Register</AuthNavLinkStyled>
        </li>
      </AuthNavList>
    </AuthNavContainer>
  );
};
export default AuthNav;
