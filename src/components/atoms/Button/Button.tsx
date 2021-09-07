import { themeProps } from 'assets/css/theme';
import styled from 'styled-components';

export const Button = styled.button`
  min-width: 175px;
  background-color: ${({ theme }: themeProps) => theme.colors.blueDark};
  border: 0;
  padding: 12px;
  font-size: 16px;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-top: 30px;
  transition: background-color 0.3s linear;
  box-shadow: ${({ theme }: themeProps) => theme.shadows.primary};
  &:hover,
  &:focus {
    cursor: pointer;
    background-color: ${({ theme }: themeProps) => theme.colors.blueDarken};
  }
  @media (min-width: 768px) {
    margin-top: 20px;
    min-width: 225px;
    font-size: 20px;
    padding: 15px 20px;
  }
`;
