import { Link, NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

import devices from '../../theme/mainTheme';

export const MixinLink = css`
  text-decoration: none;
  color: grey;
  font-weight: bold;
`;

const MixinRedUnderline = css`
  content: '';
  height: 2px;
  background-color: red;

  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const StyledWrapper = styled.div`
  @media ${devices.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row-reverse nowrap;

    background-color: black;
    height: 45px;

    padding: 0 40px;
  }

  @media ${devices.laptopL} {
    padding: 0px 150px;
  }
`;

export const StyledUnorderedList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  list-style: none;

  margin: 40px 0;
`;

export const StyledNavigationMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  padding: 30px;

  @media ${devices.tablet} {
    flex-flow: row wrap;
    padding: 20px 40px;
    position: relative;
  }

  @media ${devices.laptopL} {
    padding: 20px 150px;
  }
`;

export const StyledNavigationWrapper = styled.section`
  background-color: white;
  width: 80%;
  height: 100vh;
  background-color: #fff;

  position: absolute;
  left: 0;
  top: 0;
  z-index: 10000;

  transform: translateX(-100%);
  transition: transform 0.3s 0.1s ease-in-out;

  ${({ isNavigationOpen }) =>
    isNavigationOpen &&
    css`
      transform: translateX(0px);
    `};

  @media ${devices.tablet} {
    background-color: transparent;
    transform: translateX(0px);
    position: static;
    height: auto;
    width: 100vw;
  }
`;

export const StyledParagraph = styled.p`
  color: grey;
  font-size: 0.9rem;
  padding: 20px 30px;

  @media ${devices.tablet} {
    color: white;
    padding: 0 0 0 20px;
  }
`;

export const StyledLink = styled(Link)`
  ${MixinLink}

  @media ${devices.tablet} {
    padding: 0 0 0 20px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  ${MixinLink}

  position: relative;
  padding: 0 0 10px 0;

  @media ${devices.mobileL} {
    margin: 20px;
  }

  @media ${devices.tablet} {
    /* :first-child {
      ::after {
        ${MixinRedUnderline}
        transform: scaleX(1);
      }
    } */

    margin: 10px 0 0 30px;

    ::after {
      ${MixinRedUnderline}
      transform: scaleX(0);
      transition: transform 400ms ease-in-out;
    }
    :hover {
      ::after {
        transform: scaleX(1);
      }
    }
  }

  @media ${devices.laptop} {
    margin: 20px 0 0 30px;
  }
`;

export const StyledButton = styled.button`
  ${MixinLink}

  align-self: flex-start;
  position: relative;
  padding: 0 0 10px 0;

  background: transparent;
  border: none;

  font-size: 1rem;
  cursor: pointer;

  @media ${devices.mobileL} {
    margin: 20px;
  }

  @media ${devices.tablet} {
    margin: 10px 0 0 30px;

    ::after {
      ${MixinRedUnderline}
      transform: scaleX(0);
      transition: transform 400ms ease-in-out;
    }
    :hover {
      ::after {
        transform: scaleX(1);
      }
    }
  }

  @media ${devices.laptop} {
    margin: 20px 0 0 30px;
  }
`;
