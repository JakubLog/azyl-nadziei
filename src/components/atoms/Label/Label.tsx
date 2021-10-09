import { themeProps } from 'assets/css/theme';
import styled from 'styled-components';

export const Label = styled.label`
  font-size: 20px;
  letter-spacing: 1px;
  padding-left: 3px;
  color: ${({ theme }: themeProps) => theme.colors.blueLight};
  text-shadow: ${({ theme }: themeProps) => theme.shadows.text};
`;
