import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledWrapper,
  LikeProduct,
  CompareProducts,
  SearchProducts,
} from './HoverComponentStyle';

const HoverComponent = ({ isHovering }) => (
  <StyledWrapper isHovering={isHovering}>
    <LikeProduct />
    <CompareProducts />
    <SearchProducts />
  </StyledWrapper>
);

HoverComponent.propTypes = {
  isHovering: PropTypes.bool.isRequired,
};

export default HoverComponent;
