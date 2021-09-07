import { themeProps } from 'assets/css/theme';
import styled from 'styled-components';

export const Title = styled.h2`
  color: ${({ theme }: themeProps) => theme.colors.blueDarken};
  text-shadow: ${({ theme }: themeProps) => theme.shadows.text};
  font-size: 30px;
  margin: 0;
  margin-bottom: 7px;
  @media (min-width: 768px) {
    font-size: 90px;
    margin-bottom: 15px;
  }
`;
