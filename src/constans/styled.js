import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid ${p => p.theme.colors.nav};
  border-radius: ${p => p.theme.radii.medium};
  background-color: #f0f0f0;
`;

export const Button = styled.button`
  display: block;
  color: ${p => p.theme.colors.nav};
  text-transform: none;
  padding: ${p => p.theme.space[5]}px ${p => p.theme.space[3]}px;
  letter-spacing: 1px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-left: 1px solid ${p => p.theme.colors.nav};
  border-width: 5px;
  border-radius: ${p => p.theme.radii.medium};

  &:hover {
    color: ${p => p.theme.colors.accent};
  }
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;
`;
