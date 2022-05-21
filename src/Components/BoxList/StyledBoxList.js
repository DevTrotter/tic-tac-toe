import styled from "styled-components";

export const StyledBoxList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 250px);
  grid-auto-rows: 250px;
  align-items: center;
  justify-items: center;
  justify-content: center;
  border-radius: 36px;
  overflow: hidden;
  svg {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(3, 150px);
    grid-auto-rows: 150px;
    svg {
      width: 80px;
      height: 80px;
    }
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(3, 90px);
    grid-auto-rows: 90px;
    svg {
      width: 60px;
      height: 60px;
    }
  }
`;
