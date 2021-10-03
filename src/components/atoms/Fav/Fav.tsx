import { themeProps } from 'assets/css/theme';
import styled from 'styled-components';

export const Fav = styled.span`
  opacity: 0.8;
  color: ${({ theme }: themeProps) => theme.colors.blueDarken};
`;
