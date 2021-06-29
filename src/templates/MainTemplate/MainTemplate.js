import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import devices from '../../theme/mainTheme';

import GlobalStyle from '../../theme/globalStyle';
import logo from '../../assets/logo.png';
import HamburgerIcon from '../../components/HamburgerIcon/HamburgerIcon';
import Navigation from '../../components/Navigation/Navigation';

import { StyledHeader, StyledImage } from './MainTemplateStyle';

const MainTemplate = () => {
  const [isNavigationOpen, setNavigationOpen] = useState(false);

  return (
    <ThemeProvider theme={devices}>
      <GlobalStyle />

      <StyledHeader>
        <StyledImage src={logo} alt="Male fashion shop logo" />
        <HamburgerIcon
          openNavigationFn={() => setNavigationOpen(!isNavigationOpen)}
        />
        <Navigation isNavigationOpen={isNavigationOpen} />
      </StyledHeader>
    </ThemeProvider>
  );
};

export default MainTemplate;
