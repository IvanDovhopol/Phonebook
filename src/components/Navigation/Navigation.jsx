import { useAuth } from 'hooks';
import { AiFillHome } from 'react-icons/ai';
import { StyledLink, Nav } from './styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <StyledLink to="/">
        <AiFillHome /> Home
      </StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </Nav>
  );
};
