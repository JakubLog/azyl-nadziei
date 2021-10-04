import styled, { keyframes } from 'styled-components';
import { themeProps } from 'assets/css/theme';

const fadeInBlock = keyframes`
  from {
    transform: scaleY(0);
  }
`;
const fadeInText = keyframes`
  from {
    opacity: 0;
    transform: translateX(-2%);
  } to {
    opacity: 1;
    transform: translateX(0);
  }
`;
export const Answer = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  margin-top: 15px;
  transform-origin: left top;
  animation: ${fadeInBlock} 0.3s ease-in-out 1 forwards;
  * {
    color: ${({ theme }: themeProps) => theme.colors.blueDarken};
    margin: 0;
    font-weight: 600;
    opacity: 0;
    transform: translateX(-2%);
    animation: ${fadeInText} 0.2s 0.5s ease-in 1 forwards;
  }
`;
