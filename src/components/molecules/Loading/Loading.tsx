import React from 'react';
import styled, { keyframes } from 'styled-components';
import { themeProps } from 'assets/css/theme';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    } to {
        transform: rotate(360deg);
    }
`;

export const Wrapper = styled.div`
  height: 100%;
  min-height: 500px;
  background-color: ${({ theme }: themeProps) => theme.colors.blue};
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Item = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${({ theme }: themeProps) => theme.colors.blueLighten};
  animation: ${rotate} 2s forwards infinite;
  border-radius: 50%;
  position: relative;
  &::after,
  &::before {
    content: '';
    position: absolute;
  }
  &::after {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    height: 50%;
    background-color: ${({ theme }: themeProps) => theme.colors.blue};
    border-radius: 50%;
  }
  &::before {
    transform: translateX(-50%);
    left: 50%;
    width: 25%;
    height: 50%;
    background-color: ${({ theme }: themeProps) => theme.colors.blue};
  }
  @media (min-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const Loading: React.FC = () => {
  return (
    <Wrapper>
      <Item />
    </Wrapper>
  );
};

export default Loading;
