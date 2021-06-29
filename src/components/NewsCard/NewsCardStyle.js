import styled from 'styled-components';

import devices from '../../theme/mainTheme';
import NarrowButton from '../NarrowButton/NarrowButton';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 0 0 150px 0;

  @media ${devices.tablet} {
    width: 50%;
  }

  @media ${devices.laptop} {
    width: 33%;
  }
`;

export const StyledImg = styled.img`
  width: 100%;

  @media ${devices.tablet} {
    padding: 10px;
  }
`;

export const StyledInfoSection = styled.div`
  width: 80%;
  background-color: white;
  padding: 30px 50px 30px 30px;

  position: absolute;
  bottom: -35%;
`;

export const StyledDate = styled.p`
  color: grey;
  font-size: 0.9rem;
  font-weight: 400;

  padding: 0 0 15px 0;
`;

export const StyledTitle = styled.h1`
  font-weight: 600;
  font-size: 1rem;
  text-transform: capitalize;
`;

export const StyledNarrowButton = styled(NarrowButton)`
  margin: 0;
  padding: 15px 0 0 0;
`;
