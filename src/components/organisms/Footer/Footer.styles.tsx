import { themeProps } from 'assets/css/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 80px;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 20px;
  letter-spacing: 1px;
  color: ${({ theme }: themeProps) => theme.colors.brown};
`;
