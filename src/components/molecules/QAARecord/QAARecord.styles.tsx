import styled from 'styled-components';
import { themeProps } from 'assets/css/theme';

export const Wrapper = styled.details`
  background-color: #eee;
  padding: 30px 40px;
  position: relative;
  &::before {
    content: '';
    background-color: ${({ theme }: themeProps) => theme.colors.blueLight};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    transform: scaleX(0);
    transition: transform 0.5s ease-in-out;
  }
  &[open] {
    &::before {
      transform: scaleX(1);
    }
  }
  @media (min-width: 768px) {
    width: 70%;
    margin: 0 auto;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: ${({ theme }: themeProps) => theme.shadows.primary};
  }
`;
