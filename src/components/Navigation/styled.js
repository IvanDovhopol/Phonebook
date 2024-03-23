import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.medium};
  background-color: ${p => p.theme.colors.nav};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: ${p => p.theme.colors.white};
  text-decoration: none;
  margin: ${p => p.theme.space[2]}px auto;
  cursor: pointer;
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  min-width: 100px;
  font-style: normal;
  box-shadow: ${p => p.theme.shadows.regular};

  &:hover {
    background-color: ${p => p.theme.colors.navAccent};
  }

  &.active {
    background-color: ${p => p.theme.colors.black};
  }
`;
