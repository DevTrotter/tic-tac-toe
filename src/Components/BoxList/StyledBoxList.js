import styled from "styled-components";

export const StyledBoxList = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 250px);
  grid-auto-rows: 250px;
  align-items: center;
  justify-items: center;
  justify-content: center;
  padding: 32px;
  svg {
    width: 100px;
    height: 100px;
  }
`;
