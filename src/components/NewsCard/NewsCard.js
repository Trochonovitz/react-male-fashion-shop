import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledWrapper,
  StyledImg,
  StyledInfoSection,
  StyledDate,
  StyledTitle,
  StyledNarrowButton,
} from './NewsCardStyle';

const NewsCard = ({ date, title, imgLink }) => (
  <StyledWrapper>
    <StyledImg src={imgLink} alt="andrzej" />
    <StyledInfoSection>
      <StyledDate>{date}</StyledDate>
      <StyledTitle>{title}</StyledTitle>
      <StyledNarrowButton>Read more</StyledNarrowButton>
    </StyledInfoSection>
  </StyledWrapper>
);

NewsCard.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imgLink: PropTypes.string.isRequired,
};

export default NewsCard;
