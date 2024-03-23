import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  color: #fff;
`;

export const TextError = styled(ErrorMessage)`
  font-size: ${p => p.theme.fontSizes.xs};
  color: ${p => p.theme.colors.error};
`;

export const RegisterRejected = styled.p`
  color: rgba(220, 38, 38, 1);
  font-weight: 600;
  border: 1px solid rgba(220, 38, 38, 1);
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  background-color: rgba(254, 226, 226, 1);
  text-align: center;
`;

export const StyledForm = styled(Form)`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 400px;
  max-width: 400px;
  font-weight: ${p => p.theme.fontWeights.bold};
  margin: ${p => p.theme.space[0]}px auto;
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const Input = styled(Field)`
  display: block;
  font-family: ${p => p.theme.fonts.regular};
  width: 100%;
  border-radius: ${p => p.theme.radii.normal};
  border: transparent;
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.m};
  background-color: rgb(225, 225, 225);

  :active {
    transition: 0.3s all;
    top: 2px;
  }
`;

export const Label = styled.label`
  display: block;
  line-height: ${p => p.theme.lineHeights.body};
  text-align: left;
  margin-bottom: ${p => p.theme.space[4]}px;
  margin-top: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Button = styled.button`
  position: relative;
  background-color: rgb(68, 18, 232);
  color: ${p => p.theme.colors.white};
  text-transform: uppercase;
  border: ${p => p.theme.borders.none};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-top: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.m};
  letter-spacing: 2px;
  display: block;
  appearance: none;
  border-radius: ${p => p.theme.radii.normal};
  width: 100%;
  font-weight: ${p => p.theme.fontWeights.normal};
  letter-spacing: 0.5rem;
  transition: 0.3s all;
  cursor: pointer;

  :hover {
    background-color: rgb(41, 4, 164);
  }

  :active {
    transition: 0.3s all;
    top: 2px;
  }
`;
