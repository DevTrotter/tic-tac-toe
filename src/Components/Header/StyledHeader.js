import styled from "styled-components";

const StyledHeader = styled.header`
  width: 30%;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 24px;
  background-color: #232323;
  border-radius: 0 0 24px 24px;
  border: 1px solid white;
  border-top: 0;
  z-index: 1;

  a {
    font-family: "Poppins";
    font-style: normal;
    text-align: justify;
    color: white;
    font-weight: 400;
    font-size: 36px;
    line-height: 36px;
    text-decoration: none;
  }

  @media (max-width: 1300px) {
    width: 60%;
  }

  @media (max-width: 500px) {
    padding: 12px 12px;
    a {
      font-size: 24px;
      line-height: 24px;
    }
  }
`;

export default StyledHeader;
