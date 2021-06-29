import React from 'react';
import styled from 'styled-components';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

import { StyledInfo, StyledImage } from './StyleSlider';

import HeroImage from '../../assets/hero-1.jpg';
import HeroImage2 from '../../assets/hero-2.jpg';

import RedHeaderTitle from '../RedHeaderTitle/RedHeaderTitle';
import ThickButton from '../ThickButton/ThickButton';
import RegularHeaderTitle from '../RegularHeaderTitle/RegularHeaderTitle';

const StyledSwiperContainer = styled(Swiper)`
  width: 100%;
  height: 100vh;
  margin: 20px 0;
  position: relative;
`;

SwiperCore.use([Navigation, Pagination]);

const Slider = () => (
  <StyledSwiperContainer
    spaceBetween={50}
    slidesPerView={1}
    navigation
    onSlideChange={() => console.log('slide change')}
  >
    <SwiperSlide>
      <StyledInfo>
        <RedHeaderTitle>Summer Collection</RedHeaderTitle>
        <RegularHeaderTitle>Fall - Winder Collections 2030</RegularHeaderTitle>
        <p>
          A specialist label creating luxury exxentials. Ethically crafted with
          an unwavering commitment to exceptional quality.
        </p>
        <ThickButton>Shop Now →</ThickButton>
      </StyledInfo>
      <StyledImage src={HeroImage} />
    </SwiperSlide>
    <SwiperSlide>
      <StyledImage src={HeroImage2} />
    </SwiperSlide>
    <SwiperSlide>
      <StyledImage src={HeroImage} />
    </SwiperSlide>
    <SwiperSlide>
      <StyledImage src={HeroImage2} />
    </SwiperSlide>
  </StyledSwiperContainer>
);

export default Slider;
