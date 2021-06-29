import React from 'react';
import PropTypes from 'prop-types';

import { StyledThickButton } from './ThickButtonStyle';

const ThickButton = ({ children, ...buttonProps }) => (
  <StyledThickButton {...buttonProps}>{children}</StyledThickButton>
);

ThickButton.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ThickButton;
