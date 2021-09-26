import { themeProps } from 'assets/css/theme';
import styled from 'styled-components';

export const Input = styled.input`
  border: 3px solid ${({ theme }: themeProps) => theme.colors.blueLight};
  outline: none;
  border-radius: 10px;
  font-size: 22px;
  padding: 8px 15px;
  color: ${({ theme }: themeProps) => theme.colors.blueDark};
  box-shadow: ${({ theme }: themeProps) => theme.shadows.primary};
  transition: border linear 0.2s;
  &:focus {
    color: ${({ theme }: themeProps) => theme.colors.blueDarken};
    border: 3px solid ${({ theme }: themeProps) => theme.colors.blueDark};
  }
  &::placeholder {
    color: ${({ theme }: themeProps) => theme.colors.blueLighten};
  }
`;
