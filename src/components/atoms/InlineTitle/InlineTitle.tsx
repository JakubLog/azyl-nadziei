import { themeProps } from 'assets/css/theme';
import styled from 'styled-components';
import { Title } from '../Title/Title';

export const InlineTitle = styled(Title)<{ isDisabled?: boolean }>`
  font-size: 40px;
  margin: 0;
  width: 100%;
  font-weight: 400;
  position: relative;
  letter-spacing: 0;
  text-align: center;
  margin-bottom: 20px;
  margin-top: ${({ isDisabled }) => (isDisabled ? '30px' : '15px')};
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 4px;
    background-color: ${({ theme }: themeProps) => theme.colors.blueLighten};
    z-index: -2;
  }
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 220px;
    height: 100%;
    background-color: white;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
`;
