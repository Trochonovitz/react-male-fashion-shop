import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  StyledWrapper,
  StyledHeaderSection,
  StyledHeader,
  StyledTitle,
  StyledNewsWrapper,
} from './NewsComponentStyle';

import NewsCard from '../NewsCard/NewsCard';

const NewsComponent = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await axios.get('/news');
      setNews(response.data);
    };

    fetchNews();
  }, []);

  return (
    <StyledWrapper>
      <StyledHeaderSection>
        <StyledHeader>Latest News</StyledHeader>
        <StyledTitle>Fashion New Trends</StyledTitle>
      </StyledHeaderSection>
      <StyledNewsWrapper>
        {news.map(({ date, title, imgLink }) => (
          <NewsCard date={date} title={title} imgLink={imgLink} key={title} />
        ))}
      </StyledNewsWrapper>
    </StyledWrapper>
  );
};

export default NewsComponent;
