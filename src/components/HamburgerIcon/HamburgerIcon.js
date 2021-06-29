import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const HamburgerMixin = css`
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: black;

  border-radius: 3px;
`;

const Hamburger = styled.button`
  background: transparent;
  border: 1px solid black;
  border-radius: 3px;

  display: inline-block;
  margin-right: 20px;
  padding: 8px;

  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const HamburgerBox = styled.span`
  width: 20px;
  height: 20px;

  display: inline-block;
  position: relative;
`;

const HamburgerInner = styled.span`
  ${HamburgerMixin}

  left: 0;
  top: 50%;
  transform: translateY(-50%);

  &::after,
  &::before {
    ${HamburgerMixin}
    content: '';
    left: 0;
  }

  &::after {
    top: 7px;
  }

  &::before {
    top: -7px;
  }
`;

const HamburgerIcon = ({ openNavigationFn }) => (
  <Hamburger onClick={openNavigationFn}>
    <HamburgerBox>
      <HamburgerInner />
    </HamburgerBox>
  </Hamburger>
);

HamburgerIcon.propTypes = {
  openNavigationFn: PropTypes.func.isRequired,
};

export default HamburgerIcon;
