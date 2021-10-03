import { themeProps } from 'assets/css/theme';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 80px;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 20px;
  letter-spacing: 1px;
  color: ${({ theme }: themeProps) => theme.colors.brown};
  @media (min-width: 768px) {
    margin-top: 285px;
    background-color: rgba(255, 255, 255, 0.6);
    height: 250px;
    display: grid;
    grid-template-columns: 90% 10%;
    padding: 20px 30px;
    align-items: unset;
    box-shadow: 0 -2px 12px -2px rgba(0, 0, 0, 0.1);
    position: relative;
  }
  @media (min-width: 1100px) {
    grid-template-columns: 80% 20%;
  }
  @media (min-width: 1325px) {
    grid-template-columns: 70% 30%;
  }
  @media (min-width: 1500px) {
    grid-template-columns: 60% 40%;
  }
  @media (min-width: 1700px) {
    grid-template-columns: 50% 50%;
  }
`;

export const InfoSection = styled.div`
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const Image = styled.img`
  display: none;
  @media (min-width: 768px) {
    display: block;
    float: left;
    margin-right: 20px;
  }
`;

export const GoodByeText = styled(Paragraph)`
  display: none;
  @media (min-width: 768px) {
    display: block;
    font-size: 22px;
    color: ${({ theme }: themeProps) => theme.colors.blackLight};
  }
  @media (min-width: 951px) {
    font-size: 25px;
  }
`;

export const Informations = styled.div`
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
    position: absolute;
    left: 30px;
    bottom: 20px;
    display: flex;
    color: ${({ theme }: themeProps) => theme.colors.brown};
    * {
      &:last-child {
        margin-left: 20px;
      }
    }
  }
`;

export const CatImage = styled.img`
  display: none;
  @media (min-width: 768px) {
    display: block;
    height: 535px;
    width: 808px;
    position: absolute;
    bottom: 0;
    right: -88px;
    z-index: -1;
  }
`;

export const SocialLinks = styled.div`
  & > * {
    margin: 0 !important;
    padding: 0 !important;
    &:not(:last-child) {
      margin-right: 10px !important;
      margin-top: 5px !important;
      @media (min-width: 768px) {
        margin-top: 0 !important;
      }
    }
  }
  button,
  svg {
    width: 20px;
    height: 20px;
  }
`;
