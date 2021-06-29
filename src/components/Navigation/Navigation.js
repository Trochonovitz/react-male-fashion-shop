import React, { useState } from 'react';
import PropTypes from 'prop-types';

import DropdownMenu from '../DropdownMenu/DropdownMenu';

import {
  StyledWrapper,
  StyledUnorderedList,
  StyledLink,
  StyledParagraph,
  StyledNavigationWrapper,
  StyledNavLink,
  StyledNavigationMenu,
  StyledButton,
} from './NavigationStyle';

const Navigation = ({ isNavigationOpen }) => {
  const [isActiveDropdown, setActiveDropdown] = useState(false);

  const handleActiveDropdown = () => {
    setActiveDropdown(!isActiveDropdown);
  };

  return (
    <StyledNavigationWrapper isNavigationOpen={isNavigationOpen}>
      <StyledWrapper>
        <StyledUnorderedList>
          <li>
            <StyledLink to="/">SIGN IN</StyledLink>
          </li>
          <li>
            <StyledLink to="/">FAQS</StyledLink>
          </li>
          <li>
            <StyledLink to="/">USD</StyledLink>
          </li>
        </StyledUnorderedList>

        <StyledParagraph>
          Free shipping, 30-day return or refund guarantee.
        </StyledParagraph>
      </StyledWrapper>

      <StyledNavigationMenu>
        <StyledNavLink to="/">Home</StyledNavLink>

        <StyledNavLink to="/shop">Shop</StyledNavLink>

        <StyledButton
          type="button"
          onMouseEnter={handleActiveDropdown}
          onMouseLeave={handleActiveDropdown}
          // onClick={handleActiveDropdown}
        >
          Pages
        </StyledButton>

        {isActiveDropdown && <DropdownMenu />}

        <StyledNavLink to="/blog">Blog</StyledNavLink>

        <StyledNavLink to="/contact">Contacts</StyledNavLink>
      </StyledNavigationMenu>
    </StyledNavigationWrapper>
  );
};

Navigation.propTypes = {
  isNavigationOpen: PropTypes.bool.isRequired,
};

export default Navigation;
