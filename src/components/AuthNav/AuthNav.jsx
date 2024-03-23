import { StyledLink, Wrapper } from './styled';

export const AuthNav = () => {
  return (
    <Wrapper>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </Wrapper>
  );
};
