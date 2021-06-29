import styled from 'styled-components';
import devices from '../../theme/mainTheme';

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  position: relative;
`;

export const StyledImg = styled.img`
  margin-bottom: 20px;
  width: 100%;
`;

export const StyledInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
`;

export const StyledTitle = styled.h1`
  padding-bottom: 10px;
  font-weight: lighter;

  @media ${devices.laptop} {
    font-size: 1rem;
  }
`;

export const StyledAddToCartTitle = styled.h1`
  padding-bottom: 10px;
  font-weight: bold;
  color: red;
  cursor: pointer;
`;

export const StyledPrice = styled.p`
  font-size: 1.4rem;
  font-weight: bold;

  @media ${devices.laptop} {
    font-size: 1rem;
  }
`;
