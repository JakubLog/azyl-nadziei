import styled from 'styled-components';
import { themeProps } from 'assets/css/theme';
import { Link as RouterLink } from 'react-router-dom';

export const LinkBlock = styled(RouterLink)`
  color: ${({ theme }: themeProps) => theme.colors.blueDarken};
  opacity: 0.7;
  transition: opacity 0.3s ease-in-out;
  text-decoration: none;
  &:hover {
    opacity: 1;
  }
`;
