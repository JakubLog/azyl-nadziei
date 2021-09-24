import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import { Title } from 'components/atoms/Title/Title';
import { themeProps } from 'assets/css/theme';

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 550px;
  height: 650px;
  background-color: white;
  box-shadow: ${({ theme }: themeProps) => theme.shadows.primary};
  overflow: hidden;
  @media (min-width: 600px) {
    border-radius: 20px;
  }
`;
export const BackgroundColor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.6;
`;
export const StyledTitle = styled(Title)`
  font-size: 50px;
  color: white;
  text-shadow: none;
  letter-spacing: 2px;
  font-weight: 400;
  height: 100px;
  background-color: ${({ theme }: themeProps) => theme.colors.blue};
  padding: 20px 30px;
  margin-bottom: 0px;
`;
export const Content = styled.div`
  position: relative;
  height: 475px;
  padding-inline: 30px;
  padding-bottom: 15px;
  overflow: auto;
`;
export const Buttons = styled.div`
  height: 80px;
  display: flex;
  align-items: flex-end;
`;
export const StyledButton = styled(Button)`
  border-radius: 0;
  flex: 1;
  font-size: 30px;
  height: 100%;
  margin: 0;
`;
export const RightCorner = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 20px;
  color: ${({ theme }: themeProps) => theme.colors.blueLighten};
`;
