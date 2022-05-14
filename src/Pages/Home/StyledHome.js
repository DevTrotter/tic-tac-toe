import styled from "styled-components";

export const StyledHome = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Poppins";
  font-style: normal;
  text-align: justify;
  color: white;
  background: #0f0c29; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #24243e,
    #302b63,
    #0f0c29
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #24243e,
    #302b63,
    #0f0c29
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  h1 {
    font-weight: 400;
    font-size: 36px;
    line-height: 36px;
  }

  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ul {
      list-style: none;
      li {
        font-weight: 300;
        font-size: 24px;
        line-height: 36px;
      }
    }
  }
`;
