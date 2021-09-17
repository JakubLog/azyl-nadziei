import { themeProps } from 'assets/css/theme';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
    from {
        transform: translateX(-500%);
    }
`;
const slideOut = keyframes`
    to {
        transform: translateX(500%);
    }
`;
const scale = keyframes`
  to {
    transform: scaleX(-100%);
  }
`;

export const Wrapper = styled.div`
  padding: 15px 20px;
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  height: 170px;
  background-color: white;
  border: 4px solid ${({ theme }: themeProps) => theme.colors.error};
  border-radius: 20px;
  box-shadow: ${({ theme }: themeProps) => theme.shadows.primary};
  animation: ${slideIn} 2s forwards, ${slideOut} 2s 5s forwards;
  z-index: 1000;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: ${({ theme }: themeProps) => theme.colors.error};
    opacity: 0.2;
    z-index: -1;
    animation: ${scale} 10s 2s forwards;
    transform-origin: top left;
  }
  @media (max-width: 768px) {
    width: 350px;
  }
`;

export const ErrorTitle = styled.p`
  font-size: 26px;
  letter-spacing: 1px;
  padding-bottom: 10px;
  border-bottom: 3px solid ${({ theme }: themeProps) => theme.colors.error};
  margin: 0;
  color: ${({ theme }: themeProps) => theme.colors.error};
`;

export const Content = styled.div`
  padding-top: 10px;
  color: ${({ theme }: themeProps) => theme.colors.error};
`;

export const StyledParagraph = styled(Paragraph)`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
