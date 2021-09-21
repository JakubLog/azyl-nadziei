import { themeProps } from 'assets/css/theme';
import styled from 'styled-components';

export const Button = styled.button<{ isLight?: boolean }>`
  min-width: 175px;
  background-color: ${({ theme, isLight }: themeProps) => (isLight ? theme.colors.blue : theme.colors.blueDark)};
  border: 0;
  padding: 12px;
  font-size: 16px;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-top: 15px;
  &:first-child {
    margin-top: 20px;
  }
  transition: background-color 0.3s linear, opacity 0.2s linear;
  box-shadow: ${({ theme }: themeProps) => theme.shadows.primary};
  &:hover,
  &:focus {
    cursor: pointer;
    background-color: ${({ theme, isLight }: themeProps) => (isLight ? theme.colors.blueDark : theme.colors.blueDarken)};
    opacity: 1;
  }
  @media (min-width: 768px) {
    margin-top: 20px;
    min-width: 225px;
    font-size: 20px;
    padding: 15px 20px;
  }
`;
