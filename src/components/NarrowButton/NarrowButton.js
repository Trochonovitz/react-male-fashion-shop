import React from 'react';
import PropTypes from 'prop-types';

import { StyledNarrowButton } from './NarrowButtonStyle';

const NarrowButton = ({ children, ...buttonProps }) => (
  <StyledNarrowButton {...buttonProps}>{children}</StyledNarrowButton>
);

NarrowButton.propTypes = {
  children: PropTypes.string.isRequired,
};

export default NarrowButton;
