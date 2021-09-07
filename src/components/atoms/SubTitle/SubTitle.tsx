import { themeProps } from 'assets/css/theme';
import styled from 'styled-components';

export const SubTitle = styled.h3`
  color: ${({ theme }: themeProps) => theme.colors.blackLight};
  font-size: 20px;
  margin: 0;
  margin-bottom: 15px;
  @media (min-width: 768px) {
    font-size: 30px;
  }
`;
