import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHeader = styled.p`
  color: red;
  font-weight: 600;
  text-transform: uppercase;
  padding: 20px 0;
`;

const RedHeaderTitle = ({ children }) => (
  <StyledHeader>{children}</StyledHeader>
);

RedHeaderTitle.propTypes = {
  children: PropTypes.node,
};

RedHeaderTitle.defaultProps = {
  children: null,
};

export default RedHeaderTitle;
