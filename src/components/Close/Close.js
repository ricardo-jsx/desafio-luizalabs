import React from 'react';
import PropTypes from 'prop-types';

import { CloseContainer } from './Close.styled';
import { ReactComponent as CloseIcon } from './close.svg';

const Close = ({ children }) => {
  const [isVisible, setIsVisible] = React.useState(true);

  return (
    isVisible && (
      <CloseContainer>
        <CloseIcon onClick={() => setIsVisible(false)} role="img" aria-label="Close" />
        {children}
      </CloseContainer>
    )
  );
};

Close.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Close;
