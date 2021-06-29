import React from 'react';

import {
  StyledUnorderedList,
  StyledListElement,
  StyledLink,
} from './DropdownMenuStyle';

const DropdownMenu = () => (
  <StyledUnorderedList>
    <StyledListElement>
      <StyledLink to="/about">About Us</StyledLink>
    </StyledListElement>
    <StyledListElement>
      <StyledLink to="/shop-details">Shop Details</StyledLink>
    </StyledListElement>
    <StyledListElement>
      <StyledLink to="/shopping-cart">Shopping Cart</StyledLink>
    </StyledListElement>
    <StyledListElement>
      <StyledLink to="/checkout">Check Out</StyledLink>
    </StyledListElement>
    <StyledListElement>
      <StyledLink to="/blog">Blog Details</StyledLink>
    </StyledListElement>
  </StyledUnorderedList>
);

export default DropdownMenu;
