import React from 'react';
import { Wrapper, Item } from './Loading.styles';

interface props {
  fullView?: boolean;
}

const Loading: React.FC<props> = ({ fullView }) => {
  return (
    <Wrapper fullView={fullView}>
      <Item />
    </Wrapper>
  );
};

export default Loading;
