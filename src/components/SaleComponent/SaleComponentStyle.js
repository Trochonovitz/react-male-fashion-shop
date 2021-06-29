import styled from 'styled-components';
import devices from '../../theme/mainTheme';

export const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  background-color: #f3f2ee;

  @media ${devices.tablet} {
    padding: 40px;
  }

  @media ${devices.laptop} {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 80px 40px;
  }

  @media ${devices.laptopL} {
    padding: 80px 150px;
  }
`;

export const StyledInfo = styled.div`
  @media ${devices.laptop} {
    padding-top: 20px;
  }
`;

export const StyledProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const StyledProductWrapperInfo = styled(StyledProductWrapper)`
  justify-content: center;
  align-items: flex-start;
  padding: 10px 0 0 20px;
`;

export const StyledParagraph = styled.p`
  font-size: 1.65rem;
  font-weight: 600;
  padding: 10px 0 10px 20px;

  ${({ middle }) => (middle ? 'color: black' : 'color: lightgrey')}
`;

export const StyledImg = styled.img`
  width: 90%;
  margin: 30px auto;
`;

export const PromoSticker = styled.div`
  background-color: black;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  right: 20px;
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${devices.tablet} {
    right: 40px;
  }
`;

export const StyledSpan = styled.span`
  font-weight: 600;
  font-size: 1.2rem;
  padding: 5px;
`;

export const StyledTitle = styled.h1`
  font-weight: 600;
  font-size: 1.6rem;
  padding: 0 0 20px 0;
`;

export const StyledTimer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;
