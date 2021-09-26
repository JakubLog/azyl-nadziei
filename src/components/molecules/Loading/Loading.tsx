import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './Loading.styles';
import { LoadingIcon } from 'components/atoms/LoadingIcon/LoadingIcon';

interface props {
  fullView?: boolean;
}

const Loading: React.FC<props> = ({ fullView }) => {
  return (
    <Wrapper fullView={fullView}>
      <LoadingIcon />
    </Wrapper>
  );
};

Loading.propTypes = {
  fullView: PropTypes.bool
};

export default Loading;
