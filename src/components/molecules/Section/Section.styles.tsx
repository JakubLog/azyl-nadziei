import styled from 'styled-components';
import { themeProps } from 'assets/css/theme';
import { Content } from 'components/atoms/Content/Content';
import { SubTitle } from 'components/atoms/SubTitle/SubTitle';

export const Wrapper = styled.div<{ direction: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-inline: 35px;
  text-align: center;
  margin-bottom: 60px;
  @media (min-width: 768px) {
    min-height: 100vh;
    align-items: ${({ direction }) => (direction === 'left' ? 'flex-start' : 'flex-end')};
    ${({ direction }) => (direction === 'left' ? 'padding-left: 10%;' : 'padding-right: 10%;')};
    text-align: ${({ direction }) => (direction === 'left' ? 'left' : 'right')};
    position: relative;
    margin-bottom: 0;
  }
`;

export const ImageWrapper = styled.div<{ direction: string }>`
  width: 100vw;
  height: 250px;
  position: relative;
  margin-bottom: 23px;
  box-shadow: ${({ theme }: themeProps) => theme.shadows.primary};
  overflow: hidden;
  @media (min-width: 768px) {
    position: absolute;
    width: 600px;
    height: 300px;
    top: 100px;
    ${({ direction }) => (direction === 'left' ? 'left: 30%;' : 'right: 30%;')};
    z-index: -1;
    opacity: 0.7;
    border-radius: 20px;
  }
  @media (min-width: 1100px) {
    width: 700px;
    height: 350px;
  } ;
`;

export const Image = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;
`;

export const BeforeImage = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: ${({ theme }: themeProps) => theme.colors.blueDarken};
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: unset;
    align-items: center;
    margin-top: 20px;
    * {
      margin: 0 !important;
      &:not(:last-child) {
        margin-right: 15px !important;
      }
    }
  }
`;

export const StyledSubTitle = styled(SubTitle)`
  @media (min-width: 768px) {
    width: 90%;
  }
  @media (min-width: 1500px) {
    width: 45%;
  }
`;

export const StyledContent = styled(Content)`
  @media (min-width: 768px) {
    width: 90%;
  }
  @media (min-width: 1500px) {
    width: 50%;
  }
`;
