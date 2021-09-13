import styled from 'styled-components';
import { themeProps } from 'assets/css/theme';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import { Title } from 'components/atoms/Title/Title';
import { SubTitle } from 'components/atoms/SubTitle/SubTitle';

export const Wrapper = styled.div`
  position: relative;
  box-shadow: ${({ theme }: themeProps) => theme.shadows.primary};
`;

export const Header = styled.div`
  background-color: rgba(44, 79, 236, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 65px 0 90px 0;
`;
export const StyledTitle = styled(Title)`
  color: white;
`;
export const StyledSubTitle = styled(SubTitle)`
  margin-top: -8px;
  color: white;
  opacity: 0.8;
  letter-spacing: 1px;
  font-weight: 400;
`;
export const ImageWrapper = styled.div`
  height: 600px;
  background-color: ${({ theme }: themeProps) => theme.colors.blueDarken};
  opacity: 0.7;
  position: relative;
  box-shadow: ${({ theme }: themeProps) => theme.shadows.primary};
  overflow: hidden;
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
`;
export const InnerContent = styled.div`
  height: 100%;
  background-color: white;
  padding: 12px;
`;
export const StyledParagraph = styled(Paragraph)`
  text-align: justify;
  letter-spacing: 2px;
  display: -webkit-box;
  -webkit-line-clamp: 27;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
