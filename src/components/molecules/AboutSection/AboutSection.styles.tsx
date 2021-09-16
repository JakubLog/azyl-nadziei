import styled from 'styled-components';
import { themeProps } from 'assets/css/theme';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import { Title } from 'components/atoms/Title/Title';
import { SubTitle } from 'components/atoms/SubTitle/SubTitle';

export const Wrapper = styled.div`
  position: relative;
  box-shadow: ${({ theme }: themeProps) => theme.shadows.primary};
  @media (min-width: 1100px) {
    box-shadow: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1000px;
  }
`;

export const Header = styled.div`
  background-color: rgba(44, 79, 236, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 65px 0 90px 0;
  @media (min-width: 768px) {
    padding: 75px 0 100px 0;
  }
  @media (min-width: 1100px) {
    display: block;
    position: absolute;
    left: 7%;
    top: 0;
    padding: 20px;
    width: 500px;
    height: 250px;
    text-align: left;
    box-shadow: ${({ theme }: themeProps) => theme.shadows.primary};
  }
`;
export const StyledTitle = styled(Title)`
  color: white;
  @media (min-width: 768px) {
    font-size: 60px;
  }
  @media (min-width: 1100px) {
    font-size: 50px;
  }
`;
export const StyledSubTitle = styled(SubTitle)`
  margin-top: -8px;
  color: white;
  opacity: 0.8;
  letter-spacing: 1px;
  font-weight: 400;
  @media (min-width: 768px) {
    font-size: 30px;
    margin-top: -20px;
  }
`;
export const ImageWrapper = styled.div`
  height: 600px;
  background-color: ${({ theme }: themeProps) => theme.colors.blueDarken};
  opacity: 0.7;
  position: relative;
  box-shadow: ${({ theme }: themeProps) => theme.shadows.primary};
  overflow: hidden;
  @media (min-width: 768px) {
    height: 700px;
  }
  @media (min-width: 1100px) {
    position: absolute;
    width: 500px;
    height: 800px;
    right: 12.5%;
    top: 50%;
    z-index: 10;
    opacity: 1;
    transform: translateY(-50%);
  }
`;
export const Image = styled.img`
  min-height: 100%;
  min-width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.9;
`;
export const Content = styled.div`
  background-color: rgba(44, 79, 236, 0.4);
  position: absolute;
  top: 170px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 620px;
  padding: 30px 20px;
  @media (min-width: 768px) {
    top: 210px;
    width: 85%;
    height: 720px;
  }
  @media (min-width: 1100px) {
    width: 75%;
    padding: 30px;
    padding-right: 530px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: ${({ theme }: themeProps) => theme.shadows.primary};
    &::before {
      content: '';
      position: absolute;
      right: -15px;
      bottom: -55px;
      height: 800px;
      width: 500px;
      background-color: rgba(44, 79, 236, 0.2);
      box-shadow: ${({ theme }: themeProps) => theme.shadows.primary};
    }
  }
`;
export const InnerContent = styled.div`
  height: 100%;
  background-color: white;
  padding: 12px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
export const StyledParagraph = styled(Paragraph)`
  text-align: justify;
  letter-spacing: 2px;
  display: -webkit-box;
  -webkit-line-clamp: 27;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media (min-width: 768px) {
    line-height: 1.5;
  }
  @media (min-width: 1100px) {
    -webkit-line-clamp: 21;
    letter-spacing: 1px;
  }
`;
