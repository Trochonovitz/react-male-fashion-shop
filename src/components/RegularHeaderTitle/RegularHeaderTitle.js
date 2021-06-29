import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledHeader = styled.h1`
  padding: 20px 0;
  font-size: 2rem;
`;

const RegularHeaderTitle = ({ children }) => (
  <StyledHeader>{children}</StyledHeader>
);

RegularHeaderTitle.propTypes = {
  children: PropTypes.objectOf(),
};

RegularHeaderTitle.defaultProps = {
  children: null,
};

export default RegularHeaderTitle;
