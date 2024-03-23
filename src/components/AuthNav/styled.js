import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  gap: ${p => p.theme.space[2]}px;
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.medium};
  background-color: ${p => p.theme.colors.nav};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  color: ${p => p.theme.colors.white};
  text-decoration: none;
  margin: ${p => p.theme.space[0]}px auto;
  cursor: pointer;
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  min-width: 100px;
  box-shadow: ${p => p.theme.shadows.regular};

  &:hover {
    background-color: ${p => p.theme.colors.navAccent};
  }

  &.active {
    background-color: ${p => p.theme.colors.black};
  }
`;
