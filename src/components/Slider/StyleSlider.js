import styled from 'styled-components';
import devices from '../../theme/mainTheme';

export const StyledImage = styled.img``;

export const StyledInfo = styled.div`
  position: absolute;
  z-index: 1;

  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);

  display: flex;
  flex-flow: column nowrap;

  @media ${devices.tablet} {
    top: 25%;
    right: 35%;
    width: 55%;
    transform: translate(0, 0);
  }

  @media ${devices.laptop} {
    right: 45%;
    width: 45%;
  }

  @media ${devices.laptopL} {
    right: 48%;
    width: 40%;
  }
`;
