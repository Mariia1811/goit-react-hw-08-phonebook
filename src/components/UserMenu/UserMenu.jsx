import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { UserNameText, WrapperUserManu } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  function handleClick() {
    dispatch(logOut());
  }

  return (
    <WrapperUserManu>
      <UserNameText>Welcome, {user.name}</UserNameText>
      <button type="button" onClick={() => handleClick()}>
        Logout
      </button>
    </WrapperUserManu>
  );
};

export default UserMenu;
