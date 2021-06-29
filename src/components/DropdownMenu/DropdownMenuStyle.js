import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import devices from '../../theme/mainTheme';
import { MixinLink } from '../Navigation/NavigationStyle';

export const StyledUnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;

  padding: 0 0 10px 20px;

  @media ${devices.tablet} {
    position: absolute;
    top: 76%;
    right: 125px;

    background: black;
    padding: 10px;
  }

  @media ${devices.laptop} {
    right: 125px;
  }

  @media ${devices.laptopL} {
    right: 235px;
  }
`;

export const StyledListElement = styled.li`
  padding: 5px;

  @media ${devices.tablet} {
    padding: 10px;
  }
`;

export const StyledLink = styled(NavLink)`
  ${MixinLink}

  @media ${devices.tablet} {
    color: lightgrey;
    font-size: 0.8rem;
  }
`;
