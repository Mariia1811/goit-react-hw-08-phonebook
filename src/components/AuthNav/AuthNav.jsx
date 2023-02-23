import { AuthNavLinkStyled } from "./AuthNav.styled";

 const AuthNav = () => {
  return (
    <div>
      <AuthNavLinkStyled  to="/register">
        Register
      </AuthNavLinkStyled>
      <AuthNavLinkStyled  to="/login">
        Log In
      </AuthNavLinkStyled>
    </div>
  );
};
export default AuthNav;