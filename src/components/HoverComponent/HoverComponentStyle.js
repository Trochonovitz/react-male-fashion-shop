import styled, { css } from 'styled-components';

const ElementMixin = css`
  width: 30px;
  height: 30px;
  background-color: white;
  border: 1px solid black;
  margin-bottom: 10px;
  align-self: flex-end;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  width: 100%;

  right: 30px;
  top: 30px;

  /* transform: scale(0);
  transition: transform 1s 1s ease-in-out;

  ${({ isHovering }) =>
    isHovering &&
    css`
      transform: scale(1);
    `}; */
`;

export const LikeProduct = styled.div`
  ${ElementMixin};
`;

export const CompareProducts = styled.div`
  ${ElementMixin};
`;

export const SearchProducts = styled.div`
  ${ElementMixin};
`;
