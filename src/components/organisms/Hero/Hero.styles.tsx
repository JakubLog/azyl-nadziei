import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding-inline: 35px;
  @media (min-width: 768px) {
    position: relative;
    align-items: flex-end;
    padding-right: 200px;
    padding-left: 50px;
    text-align: right;
  }
`;

export const Image = styled.img`
  width: 250px;
  margin-bottom: 10px;
  z-index: -1;
  @media (min-width: 768px) {
    position: absolute;
    left: 50px;
    top: 50%;
    width: 600px;
    transform: scaleX(-1) translateY(-50%);
  }
`;
