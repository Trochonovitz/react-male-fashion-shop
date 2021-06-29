import React, { useState } from 'react';
import PropTypes from 'prop-types';

import HoverComponent from '../HoverComponent/HoverComponent';

import {
  StyledWrapper,
  StyledImg,
  StyledTitle,
  StyledPrice,
  StyledInfo,
  StyledAddToCartTitle,
} from './ProductCardStyle';

const ProductCard = ({ title, imgLink, price }) => {
  const [isHovering, setHover] = useState(false);

  const handleMouseHover = () => {
    setHover(!isHovering);
  };

  return (
    <StyledWrapper
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseHover}
    >
      {isHovering && <HoverComponent isHovering={isHovering} />}
      <StyledImg src={imgLink} alt="Product visualisation" />
      <StyledInfo>
        {isHovering ? (
          <StyledAddToCartTitle>+ Add To Cart</StyledAddToCartTitle>
        ) : (
          <StyledTitle>{title}</StyledTitle>
        )}
        <StyledPrice>{`$${price}`}</StyledPrice>
      </StyledInfo>
    </StyledWrapper>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  imgLink: PropTypes.bool.isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductCard;
