import styled from 'styled-components';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import { SubTitle } from 'components/atoms/SubTitle/SubTitle';
import { Title } from 'components/atoms/Title/Title';
import { themeProps } from 'assets/css/theme';

export const Wrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 30px;
    @media (min-width: 768px) {
      margin-bottom: 150px;
    }
  }
`;
export const Headers = styled.div`
  text-align: center;
`;
export const StyledTitle = styled(Title)`
  margin-bottom: 3px;
  letter-spacing: 1px;
  @media (min-width: 768px) {
    margin: 0;
  }
`;
export const StyledSubTitle = styled(SubTitle)`
  padding-inline: 30px;
  @media (min-width: 768px) {
    padding: 0;
  }
`;
export const Content = styled.div`
  margin-top: 30px;
  background-color: hsla(235, 100%, 68%, 50%);
  padding: 30px 15px;
  box-shadow: ${({ theme }: themeProps) => theme.shadows.primary};
  @media (min-width: 768px) {
    padding: 80px 100px;
    margin-top: 60px;
  }
`;
export const StyledParagraph = styled(Paragraph)`
  color: white;
  text-align: justify;
  font-weight: 700;
  letter-spacing: 0;
  @media (min-width: 768px) {
    line-height: 1.5;
    font-size: 35px;
  }
`;
