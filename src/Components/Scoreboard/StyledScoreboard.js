import styled from "styled-components";

const StyledScoreboard = styled.div`
  width: 20%;
  position: absolute;
  top: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 24px;
  background-color: #f2f2f2;
  border-radius: 0 0 12px 12px;
  border: 1px solid white;
  border-top: 0;
  z-index: 1;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 36px;
  h1 {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default StyledScoreboard;
