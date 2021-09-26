import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import styled from 'styled-components';

export const List = styled.dl`
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: auto;
  dt {
    font-weight: 700;
    &:not(:last-child) {
      margin-bottom: 4px;
    }
  }
  dd {
    opacity: 0.7;
    letter-spacing: 1px;
  }
`;

export const AboutParagraph = styled(Paragraph)`
  opacity: 0.7;
  letter-spacing: 2%;
  line-height: 1.1;
  font-size: 20px;
  text-align: justify;
`;

export const Information = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #f85f5f;
  opacity: 0.8;
  font-size: 14px;
  text-align: center;
  padding-block: 3px;
  color: white;
  letter-spacing: 2%;
`;
