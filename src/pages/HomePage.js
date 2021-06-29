import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import MainTemplate from '../templates/MainTemplate/MainTemplate';
import Slider from '../components/Slider/Slider';
import CategoriesCard from '../components/CategoriesCard/CategoriesCard';
import Carousel from '../components/Carousel/Carousel';
import SaleComponent from '../components/SaleComponent/SaleComponent';
import InstagramComponent from '../components/InstagramComponent/InstagramComponent';
import NewsComponent from '../components/NewsComponent/NewsComponent';
import Footer from '../components/Footer/Footer';
import CategoriesComponent from '../components/CategoriesComponent/CategoriesComponent';

const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const HomePage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get('/categories');

      setCategories(response.data);
    };

    fetchCategories();
  }, []);

  return (
    <StyledWrapper>
      <MainTemplate />
      <Slider />
      <CategoriesComponent>
        {categories.map(({ title, imgLink }) => (
          <CategoriesCard title={title} imgLink={imgLink} key={title} />
        ))}
      </CategoriesComponent>
      <Carousel />
      <SaleComponent />
      <InstagramComponent />
      <NewsComponent />
      <Footer />
    </StyledWrapper>
  );
};

export default HomePage;
