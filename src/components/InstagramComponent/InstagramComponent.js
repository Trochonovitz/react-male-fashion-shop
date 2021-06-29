import React, { useState } from 'react';

import {
  StyledWrappper,
  StyledGalleryWrapper,
  StyledImg,
  StyledTitle,
  StyledParagraph,
  StyledRedTitle,
  StyledInfo,
} from './InstagramComponentStyle';

const InstagramComponent = () => {
  const [images, setImages] = useState([
    'https://i.picsum.photos/id/297/800/800.jpg?hmac=3NVy1Y0XxEhVtCRqa3lHrfumNXbGPB8cz0HeJmjOyNw',
    'https://i.picsum.photos/id/593/800/800.jpg?hmac=8AM7X0beAzqNeEMLZTDrlo0fqm5EzxyJX9nmMiO3yX8',
    'https://i.picsum.photos/id/730/800/800.jpg?hmac=E6pJXKEkugWCMF0yE-hHmXpaXi5ntWocmq70xdOprLs',
    'https://i.picsum.photos/id/910/800/800.jpg?hmac=rlllvdhXmB4N1ZS0phIuXbtnIjzo3z0GQEWTyUx1nWI',
    'https://i.picsum.photos/id/692/800/800.jpg?hmac=y60g8MhuSqDrUj0fAH5zBf06IqBK7zL6VrCJ2e2-dRg',
    'https://i.picsum.photos/id/626/800/800.jpg?hmac=FX2x-kE2wlT3WzoJGxFui97gdCQCnORGbsxw-gZ__v0',
  ]);

  return (
    <StyledWrappper>
      <StyledGalleryWrapper>
        {images.map((photo) => (
          <StyledImg src={photo} alt="andrzej" />
        ))}
      </StyledGalleryWrapper>

      <StyledInfo>
        <StyledTitle>Instagram</StyledTitle>
        <StyledParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </StyledParagraph>
        <StyledRedTitle>#Male_Fashion</StyledRedTitle>
      </StyledInfo>
    </StyledWrappper>
  );
};

export default InstagramComponent;
