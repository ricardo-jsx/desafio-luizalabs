import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './Button.styled';

const Button = ({ children, onClick, ...props }) => (
  <StyledButton onClick={onClick} {...props}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
