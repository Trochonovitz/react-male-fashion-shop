import styled from 'styled-components';

export const StyledNarrowButton = styled.button`
  align-self: flex-start;
  cursor: pointer;

  background: transparent;
  border: none;
  margin-left: 20px;
  padding: 0 0 10px 0;

  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  letter-spacing: 3px;
  text-transform: uppercase;

  position: relative;

  :hover {
    ::after {
      background-color: red;
      transform: scaleX(0.45);
    }
  }

  ::after {
    content: '';

    width: 100%;
    height: 2px;
    background-color: black;

    position: absolute;
    bottom: 0;
    left: 0;

    transform: scaleX(1);
    transform-origin: left;
    transition: transform 400ms ease-in-out, background-color 400ms linear;
  }
`;
