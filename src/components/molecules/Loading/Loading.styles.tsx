import styled from 'styled-components';
import { themeProps } from 'assets/css/theme';

export const Wrapper = styled.div<{ fullView?: boolean }>`
  ${({ fullView }) =>
    fullView
      ? `
      width: 100vw;
      position: absolute;
      height: 100px !important;
      left: 0;
    `
      : null};
  height: 100%;
  min-height: 500px;
  background-color: ${({ theme }: themeProps) => theme.colors.blue};
  display: flex;
  align-items: center;
  justify-content: center;
`;
