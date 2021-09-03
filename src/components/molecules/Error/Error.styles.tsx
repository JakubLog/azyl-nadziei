import { themeProps } from 'assets/css/theme';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 15px 20px;
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  height: 170px;
  background-color: white;
  border: 3px solid ${({ theme }: themeProps) => theme.colors.error};
  border-radius: 20px;
  box-shadow: ${({ theme }: themeProps) => theme.shadows.primary};
  @media (max-width: 768px) {
    width: 350px;
  }
`;

export const ErrorTitle = styled.p`
  font-size: 26px;
  letter-spacing: 1px;
  padding-bottom: 10px;
  border-bottom: 3px solid ${({ theme }: themeProps) => theme.colors.error};
  margin: 0;
  color: ${({ theme }: themeProps) => theme.colors.error};
`;

export const Content = styled.div`
  padding-top: 10px;
  color: ${({ theme }: themeProps) => theme.colors.error};
`;

export const StyledParagraph = styled(Paragraph)`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
