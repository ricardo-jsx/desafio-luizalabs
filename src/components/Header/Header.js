import React from 'react';
import PropTypes from 'prop-types';

import { HeaderContainer, Title, Content } from './Header.styled';

const Header = ({ title, children }) => (
  <HeaderContainer>
    <Title>{title}</Title>
    <Content>{children}</Content>
  </HeaderContainer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Header.defaultProps = {
  children: null,
};

export default Header;
