import styled from 'styled-components';
import devices from '../../theme/mainTheme';

export const StyledWrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  @media ${devices.mobileL} {
    padding: 0 20px;
  }

  @media ${devices.tablet} {
    padding: 0 40px;
  }

  @media ${devices.laptopL} {
    padding: 0px 150px;
  }
`;
