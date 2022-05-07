import styled from "styled-components";

export const StyledHome = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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

  .container-home {
    width: 100%;
    padding: 32px;
  }
`;
