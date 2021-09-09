import styled from 'styled-components';
import { themeProps } from 'assets/css/theme';
import { Button } from 'components/atoms/Button/Button';
import { SubTitle } from 'components/atoms/SubTitle/SubTitle';
import { Title } from 'components/atoms/Title/Title';
import { Content } from 'components/atoms/Content/Content';

export const Wrapper = styled.div`
  margin-bottom: 60px;
  padding-block: 35px;
  background-color: ${({ theme }: themeProps) => theme.colors.blueDarkenLow};
  @media (min-width: 768px) {
    min-height: 100vh;
    background-color: unset;
  }
`;

export const Header = styled.div`
  width: 100%;
  margin-bottom: 35px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: ${({ theme }: themeProps) => theme.shadows.primary};
  padding: 20px 30px;
  text-align: center;
  @media (min-width: 768px) {
    box-shadow: none;
    padding: 0;
    background-color: unset;
    margin-bottom: 60px;
  }
`;

export const StyledTitle = styled(Title)``;

export const StyledSubTitle = styled(SubTitle)``;

export const ContainerPositioner = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      height: 150px;
      width: 100%;
      background-color: rgba(44, 79, 236, 20%);
      z-index: -1;
    }
  }
`;

export const Container = styled.div`
  position: relative;
  min-height: 600px;
  overflow: hidden;
  @media (min-width: 768px) {
    height: 500px;
    width: 65%;
    border-radius: 10px;
    box-shadow: ${({ theme }: themeProps) => theme.shadows.primary};
  }
`;

export const BackgroundImage = styled.img`
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  box-shadow: ${({ theme }: themeProps) => theme.shadows.primary};
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  @media (min-width: 768px) {
    width: 500px;
    opacity: 0.8;
  }
`;

export const Description = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: rgba(44, 79, 236, 70%);
  @media (min-width: 768px) {
    min-height: 100%;
    bottom: auto;
    top: 0;
    width: 25%;
  }
`;

export const ContentWrapper = styled.div`
  padding: 15px 20px;
`;

export const DescriptionTitle = styled(Title)`
  color: white;
  font-weight: 400;
  letter-spacing: 2px;
  @media (min-width: 768px) {
    font-size: 45px;
    padding-left: 5px;
  }
`;

export const StyledContent = styled(Content)`
  color: rgba(255, 255, 255, 0.7);
  text-align: justify;
  font-weight: 700;
  line-height: 1.5;
  @media (min-width: 768px) {
    font-weight: 400;
    font-size: 18px;
    line-height: 1.3;
  }
`;

export const StyledButton = styled(Button)`
  margin: 0;
  width: 100%;
  border-radius: 0;
  background-color: rgba(209, 200, 255, 0.5);
  padding-block: 20px;
  &:hover {
    background-color: rgba(209, 200, 255, 0.8);
  }
  @media (min-width: 768px) {
    position: absolute;
    bottom: 0;
  }
`;
