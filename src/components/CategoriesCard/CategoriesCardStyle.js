import styled from 'styled-components';
import devices from '../../theme/mainTheme';

export const StyledWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;

  @media ${devices.tablet} {
    flex-flow: row-reverse;

    :nth-child(1) {
      align-items: center;
    }

    :nth-child(2) {
      flex-direction: column;
      align-self: flex-start;
    }

    :nth-child(3) {
      align-items: center;
    }
  }

  @media ${devices.laptop} {
    position: relative;
  }
`;

export const StyledInfoWrapper = styled.div`
  @media ${devices.laptop} {
    position: absolute;
    right: 30%;
  }
`;

export const StyledHeader = styled.h1`
  padding: 20px;
  font-size: 2rem;
`;

export const StyledImg = styled.img`
  padding: 20px;
`;
