import styled from 'styled-components';
import { themeProps } from 'assets/css/theme';

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
  transform: ${({ isExpanded }) => (isExpanded ? 'unset' : 'translateX(100%)')};
  opacity: ${({ isExpanded }) => (isExpanded ? '1' : '0')};
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
  * {
    font-weight: 500;
    opacity: 0.5;
    font-size: 17px;
    cursor: pointer;
    padding: 0 15px;
    transition: opacity 0.2s ease-in-out;
    &:hover {
      opacity: 0.8;
    }
  }
  .active {
    opacity: 1;
  }
`;
