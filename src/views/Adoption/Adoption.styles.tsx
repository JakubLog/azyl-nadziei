import styled from 'styled-components';
import { themeProps } from 'assets/css/theme';

export const Wrapper = styled.div`
  min-height: calc(100vh - 260px);
`;

export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  * {
    &:first-child {
      margin-right: 10px;
    }
  }
`;
export const Icon = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${({ theme }: themeProps) => theme.colors.blueDarken};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  box-shadow: ${({ theme }: themeProps) => theme.shadows.primary};
`;
export const Content = styled.p`
  letter-spacing: 1px;
  font-weight: 700;
`;
