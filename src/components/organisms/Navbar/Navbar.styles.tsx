import styled from 'styled-components';
import { themeProps } from 'assets/css/theme';

export const Wrapper = styled.div`
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: center;
`;

export const Body = styled.div`
  height: 100%;
  width: 100%;
  box-shadow: ${({ theme }: themeProps) => theme.shadows.primary};
  padding: 10px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const Logo = styled.a``;

export const Expand = styled.div`
  width: 50px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
`;
export const ExpandBurger = styled.div`
  height: 4px;
  border-radius: 10px;
  width: 100%;
  background-color: ${({ theme }: themeProps) => theme.colors.blueDarken};
  box-shadow: ${({ theme }: themeProps) => theme.shadows.primary};
  transition: height 0.2s ease-in-out;
  &::before,
  &::after {
    position: absolute;
    content: '';
    height: 4px;
    width: 100%;
    background-color: ${({ theme }: themeProps) => theme.colors.blueDarken};
    box-shadow: ${({ theme }: themeProps) => theme.shadows.primary};
    transition: transform 0.5s ease-in-out, left 0.5s ease-in-out, bottom 0.5s ease-in-out;
  }
  &::before {
    left: 0;
    top: 0;
  }
  &::after {
    left: 0;
    bottom: 0;
  }
  &.active {
    height: 0;
    &::before {
      transform: translateY(15px) rotate(-45deg);
    }
    &::after {
      transform: translateY(-15px) rotate(45deg);
    }
  }
`;
