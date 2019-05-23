import React from 'react';
import PropTypes from 'prop-types';

import { StyledInput, Label } from './Input.styled';

const Input = React.memo(({ id, label, mask, onChange, props }) => (
  <>
    <Label htmlFor={id}>{label}</Label>
    <StyledInput id={id} aria-label="input" mask={mask} onChange={(e) => onChange(e.target.value)} {...props} />
  </>
));

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  mask: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  id: '',
  label: '',
};

export default Input;
