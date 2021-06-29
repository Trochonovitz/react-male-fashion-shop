import styled from 'styled-components';
import devices from '../../theme/mainTheme';

export const StyledWrappper = styled.section`
  padding: 20px;

  @media ${devices.tablet} {
    padding: 40px;
  }

  @media ${devices.laptop} {
    display: flex;
    align-items: center;
    padding: 80px 40px;
  }

  @media ${devices.laptopL} {
    padding: 80px 150px;
  }
`;

export const StyledGalleryWrapper = styled.div`
  @media ${devices.tablet} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const StyledInfo = styled.div`
  @media ${devices.laptop} {
    padding: 40px;
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  padding: 15px 0;

  @media ${devices.tablet} {
    padding: 0;
  }
`;

export const StyledTitle = styled.h1`
  font-weight: 600;
  font-size: 1.8rem;
  padding: 20px 0;
`;

export const StyledParagraph = styled.p`
  font-size: 0.9rem;
  padding: 20px 0 0;
`;

export const StyledRedTitle = styled(StyledTitle)`
  color: red;
`;
