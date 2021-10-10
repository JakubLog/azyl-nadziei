import styled from 'styled-components';
import { themeProps } from 'assets/css/theme';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div<{ isExpanded: boolean }>`
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 10px 0;
  left: 0;
  top: 100%;
  background: ${({ theme }: themeProps) => theme.colors.blueDarken};
  transition: transform 0.5s ease-in-out, opacity 0.4s ease-in-out;
  box-shadow: inset 0px 5px 15px -5px #000000;
  color: white;
  transform: ${({ isExpanded }) => (isExpanded ? 'unset' : 'translateY(100%)')};
  opacity: ${({ isExpanded }) => (isExpanded ? '1' : '0')};
  pointer-events: ${({ isExpanded }) => (isExpanded ? 'unset' : 'none')};
  @media (min-width: 768px) {
    pointer-events: unset;
    position: static;
    width: 50%;
    transform: unset;
    opacity: 1;
    background-color: transparent;
    box-shadow: none;
    color: ${({ theme }: themeProps) => theme.colors.black};
    transition: none;
  }
`;

export const Links = styled.ul`
  list-style-type: none;
  padding: 0;
  height: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    * {
      font-weight: 500;
    }
  }
`;

export const UnderLine = styled.div`
  width: 90px;
  height: 3px;
  background-color: ${({ theme }: themeProps) => theme.colors.blueDarken};
  position: absolute;
  left: 0;
  top: 0;
  @media (max-width: 1540px) {
    display: none;
  }
`;

const activeClassName = 'active-link';
export const Link = styled(NavLink).attrs({ activeClassName, className: 'no-active' })`
  color: white;
  text-decoration: none;
  font-weight: 500;
  opacity: 0.5;
  font-size: 17px;
  cursor: pointer;
  padding: 0 15px;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
  &.${activeClassName} {
    opacity: 1;
  }
  @media (min-width: 768px) {
    color: ${({ theme }: themeProps) => theme.colors.black};
  }
`;
