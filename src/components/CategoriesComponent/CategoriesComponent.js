import React from 'react';
import PropTypes from 'prop-types';

import { StyledWrapper } from './CategoriesComponentStyle';

const CategoriesComponent = ({ children }) => (
  <StyledWrapper>{children}</StyledWrapper>
);

CategoriesComponent.propTypes = {
  children: PropTypes.objectOf(),
};

CategoriesComponent.defaultProps = {
  children: null,
};

export default CategoriesComponent;
