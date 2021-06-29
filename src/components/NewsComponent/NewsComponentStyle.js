import styled from 'styled-components';
import devices from '../../theme/mainTheme';

export const StyledWrapper = styled.section`
  padding: 20px;

  @media ${devices.laptopL} {
    padding: 20px 150px;
  }
`;

export const StyledHeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledHeader = styled.p`
  color: red;
  font-size: 0.8rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  font-weight: 600;

  padding: 0 0 15px 0;
`;

export const StyledTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;

  padding: 0 0 15px 0;
`;

export const StyledNewsWrapper = styled.div`
  @media ${devices.tablet} {
    display: flex;
    flex-flow: row wrap;
  }
`;
