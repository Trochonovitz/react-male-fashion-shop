import React from 'react';

import logo from '../../assets/logo-footer.png';
import {
  StyledFooter,
  StyledImage,
  StyledParagraph,
  StyledInfo,
  StyledTitle,
} from './FooterStyle';

const Footer = () => (
  <StyledFooter>
    <StyledInfo>
      <StyledImage src={logo} alt="Male fashion shop logo footer" />

      <StyledParagraph>
        The customer is at the heart of our unique business model, which
        includes design.
      </StyledParagraph>
    </StyledInfo>

    <StyledInfo>
      <StyledTitle>Shopping</StyledTitle>
      <StyledParagraph>Clothing Store</StyledParagraph>
      <StyledParagraph>Trending Shoes</StyledParagraph>
      <StyledParagraph>Accessories</StyledParagraph>
      <StyledParagraph>Sale</StyledParagraph>
    </StyledInfo>

    <StyledInfo>
      <StyledTitle>Shopping</StyledTitle>
      <StyledParagraph>Contact Us</StyledParagraph>
      <StyledParagraph>Payment Methods</StyledParagraph>
      <StyledParagraph>Delivery</StyledParagraph>
      <StyledParagraph>Return & Exchanges</StyledParagraph>
    </StyledInfo>

    <StyledInfo>
      <StyledTitle>Newsletter</StyledTitle>
      <StyledParagraph>
        Be the first to know about new arrivals, look books, sales & promos!
      </StyledParagraph>
    </StyledInfo>
  </StyledFooter>
);

export default Footer;
