import styled from 'styled-components';

export const Body = styled.td`
  position: relative;
  border-radius: ${p => p.theme.radii.medium};
  text-align: center;
  &:first-child {
    padding: ${p => p.theme.space[3]}px ${p => p.theme.space[7]}px;
    /* text-align: left; */
  }
`;

export const A = styled.span`
  position: absolute;
  top: 30%;
  right: 1%;
  text-align: right;
`;

export const B = styled.span`
  position: absolute;
  top: 30%;
  right: 12%;
  text-align: right;
`;

export const Row = styled.tr`
  background-color: ${p => p.theme.colors.table};
  &:nth-child(even) {
    background-color: ${p => p.theme.colors.tableAccent};
  }
`;

export const Button = styled.button`
  background: ${p => p.theme.colors.text};
  color: ${p => p.theme.colors.white};
  text-transform: none;
  padding: ${p => p.theme.space[3]}px;
  letter-spacing: 1px;
  cursor: pointer;
  border: none;
  border-radius: ${p => p.theme.radii.medium};

  &:hover {
    background-color: ${p => p.theme.colors.blackAccent};
  }
`;

export const Copy = styled.button`
  position: absolute;
  top: 10%;
  right: 1%;
  background-color: transparent;
  text-transform: none;
  padding: ${p => p.theme.space[3]}px;
  letter-spacing: 1px;
  cursor: pointer;
  border: none;
  border-radius: ${p => p.theme.radii.medium};

  &:hover {
    color: red;
  }
`;
