import React from 'react';
import PropTypes from 'prop-types';

import NarrowButton from '../NarrowButton/NarrowButton';

import {
  StyledWrapper,
  StyledInfoWrapper,
  StyledImg,
  StyledHeader,
} from './CategoriesCardStyle';

const CategoriesCard = ({ imgLink, title }) => (
  <StyledWrapper>
    <StyledImg src={imgLink} alt="category no 1" />

    <StyledInfoWrapper>
      <StyledHeader>{title}</StyledHeader>
      <NarrowButton type="NarrowButton">SHOP NOW</NarrowButton>
    </StyledInfoWrapper>
  </StyledWrapper>
);

CategoriesCard.propTypes = {
  imgLink: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default CategoriesCard;
