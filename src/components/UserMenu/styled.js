import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;
`;

export const UserName = styled.p`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;
  font-weight: 700;
  margin: ${p => p.theme.space[0]}px;
`;

export const LogoutBtn = styled.button`
  display: inline-block;
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.medium};
  border: ${p => p.theme.borders.none};
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

export const Avatar = styled.img`
  border-radius: ${p => p.theme.radii.round};
  width: 27px;
`;
