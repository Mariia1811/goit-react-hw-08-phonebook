import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import useAuth from '../../hooks/useAuth';
import { Logout, UserNameText, WrapperUserManu } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <WrapperUserManu>
      <UserNameText>Welcome, {user.name}</UserNameText>
      <Logout type="button" onClick={() => handleClick()}>
        Logout
      </Logout>
    </WrapperUserManu>
  );
};

export default UserMenu;
