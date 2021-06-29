import styled from 'styled-components';
import devices from '../../theme/mainTheme';

export const StyledWrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  margin: 30px 0;

  @media ${devices.mobileL} {
    padding: 0 20px;
  }

  @media ${devices.tablet} {
    padding: 0 40px;
  }

  @media ${devices.laptopL} {
    padding: 0 150px;
  }
`;

export const StyledHeaderWrapper = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const StyledHeader = styled.h1`
  font-weight: bold;
  font-size: 1.3rem;
  padding: 10px;
  text-decoration: none;

  cursor: pointer;

  color: lightgrey;
`;

export const StyledItemsList = styled.div`
  @media ${devices.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${devices.laptop} {
    display: flex;
    justify-content: space-between;
    grid-template-columns: repeat(3, 1fr);
  }
`;
