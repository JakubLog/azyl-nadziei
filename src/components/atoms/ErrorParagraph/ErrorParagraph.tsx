import styled, { keyframes } from 'styled-components';
import { themeProps } from 'assets/css/theme';

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(-12px);
    } to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const ErrorParagraph = styled.p`
  margin: 0;
  color: red;
  text-shadow: ${({ theme }: themeProps) => theme.shadows.text};
  animation: ${fadeIn} 0.3s ease-in 1 forwards;
  padding-left: 3px;
  margin-bottom: 10px;
`;
