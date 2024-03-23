import styled from 'styled-components';

export const Table = styled.table`
  font-family: ${p => p.theme.fonts.regular};
  font-size: ${p => p.theme.fontSizes.m};
  text-align: center;
  margin: ${p => p.theme.space[0]}px auto;
`;

export const Heading = styled.th`
  font-weight: ${p => p.theme.fontWeights.bold};
  background-color: ${p => p.theme.colors.tableAccent};
  padding: ${p => p.theme.space[5]}px ${p => p.theme.space[7]}px;
  border-radius: ${p => p.theme.radii.medium};
`;

export const Notification = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  text-align: center;
  color: red;
`;
