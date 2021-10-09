import styled from 'styled-components';
import { Content } from 'components/atoms/Content/Content';

export const Wrapper = styled.div`
  min-height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding-inline: 35px;
  margin-bottom: 60px;
  * {
    visibility: hidden;
  }
  @media (min-width: 768px) {
    position: relative;
    align-items: flex-end;
    padding-right: 70px;
    text-align: right;
    margin-bottom: 0;
    h2 {
      font-size: 70px;
    }
    h3 {
      font-size: 25px;
    }
    p {
      font-size: 18px;
    }
  }
  @media (min-width: 1100px) {
    padding-right: 200px;
    padding-left: 50px;
    h2 {
      font-size: 90px;
    }
    h3 {
      font-size: 30px;
    }
    p {
      font-size: 25px;
    }
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

export const StyledContent = styled(Content)`
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 768px) {
    width: 50%;
  }
`;
