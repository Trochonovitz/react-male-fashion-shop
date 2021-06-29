import React from 'react';
import Timer from 'react-compound-timer';

import RedHeaderTitle from '../RedHeaderTitle/RedHeaderTitle';
import ThickButton from '../ThickButton/ThickButton';

import {
  StyledWrapper,
  StyledParagraph,
  StyledProductWrapper,
  StyledImg,
  PromoSticker,
  StyledSpan,
  StyledProductWrapperInfo,
  StyledTitle,
  StyledTimer,
  StyledInfo,
} from './SaleComponentStyle';

const SaleComponent = () => (
  <StyledWrapper>
    <StyledInfo>
      <StyledParagraph>Clothings Hot</StyledParagraph>
      <StyledParagraph middle>Shoe Collection</StyledParagraph>
      <StyledParagraph>Accessories</StyledParagraph>
    </StyledInfo>

    <StyledProductWrapper>
      <StyledImg
        src="https://preview.colorlib.com/theme/malefashion/img/product-sale.png"
        alt="sale"
      />
      <PromoSticker>
        Sale Of <StyledSpan>$29.99</StyledSpan>
      </PromoSticker>
    </StyledProductWrapper>

    <StyledProductWrapperInfo>
      <RedHeaderTitle>Deal of the Week</RedHeaderTitle>
      <StyledTitle>Multi-pocket Chest Bag Black</StyledTitle>

      <StyledTimer>
        <Timer initialTime={2602000000} direction="backward">
          {() => (
            <>
              <Timer.Days /> Days
              <Timer.Hours /> Hours
              <Timer.Minutes /> Minutes
              <Timer.Seconds /> Seconds
            </>
          )}
        </Timer>
      </StyledTimer>

      <ThickButton>Shop now</ThickButton>
    </StyledProductWrapperInfo>
  </StyledWrapper>
);

export default SaleComponent;
