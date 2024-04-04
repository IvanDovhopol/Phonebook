import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { useAuth } from 'hooks';
// import { FaUserCircle } from 'react-icons/fa';
import { Wrapper, UserName, LogoutBtn, Avatar } from './styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useAuth();

  return (
    <Wrapper>
      <UserName>
        {/* {user.user?.data ? (
          <Avatar
            src={user.user.avatarURL || user.user.data.user.avatarURL}
            alt="avatar"
          />
        ) : (
          <FaUserCircle size="25" />
        )} */}

        <Avatar
          src={user.user.avatarURL || user.user.data.user.avatarURL}
          alt="avatar"
        />

        {user.user.email || user.user.data.user.email}
      </UserName>
      <LogoutBtn type="button" onClick={() => dispatch(logout())}>
        Logout
      </LogoutBtn>
    </Wrapper>
  );
};
