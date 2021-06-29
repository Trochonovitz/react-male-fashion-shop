import styled from 'styled-components';
import devices from '../../theme/mainTheme';

export const StyledFooter = styled.footer`
  background-color: black;
  color: white;
  padding: 20px;

  @media ${devices.tablet} {
    display: flex;
    flex-flow: row wrap;
    padding: 40px;
  }

  @media ${devices.laptopL} {
    padding: 40px 150px;
  }
`;

export const StyledInfo = styled.div`
  @media ${devices.tablet} {
    display: flex;
    flex-flow: column wrap;
    width: 25%;
    padding: 0 20px;

    :first-child {
      width: 50%;
    }

    :last-child {
      width: 50%;
    }
  }

  @media ${devices.laptopL} {
    :first-child {
      width: 25%;
    }

    :last-child {
      width: 25%;
    }
  }
`;

export const StyledImage = styled.img`
  width: 50%;
  padding: 0 0 20px 0;
  cursor: pointer;

  @media ${devices.tablet} {
  }
`;

export const StyledTitle = styled.h1`
  color: lightgrey;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.1rem;
  font-size: 1.1rem;
  padding: 0 0 20px 0;
`;

export const StyledParagraph = styled.p`
  color: grey;
  font-size: 0.9rem;
  padding: 0 0 20px 0;
`;
