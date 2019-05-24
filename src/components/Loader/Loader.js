import React from 'react';
import PropTypes from 'prop-types';

const Loader = ({ children, loading, renderLoading }) => <div role="alert">{loading ? renderLoading() : children}</div>;

Loader.propTypes = {
  loading: PropTypes.bool,
  renderLoading: PropTypes.func.isRequired,
};

Loader.defaultProps = {
  loading: false,
};

export default Loader;
