import styled from 'styled-components';
import devices from '../../theme/mainTheme';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const StyledImage = styled.img`
  padding: 30px;
  cursor: pointer;

  @media ${devices.tablet} {
    position: absolute;
    top: 45px;
    width: 30vw;
    margin-left: 30px;
  }

  @media ${devices.laptopL} {
    width: 20vw;
    margin-left: 140px;
  }
`;
