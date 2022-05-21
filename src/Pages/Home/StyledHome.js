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

  .disabled {
    opacity: 0.6;
  }

  .container-home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #232323;
    border-radius: 24px;
    padding: 24px;
    border: 1px solid white;

    span {
      margin-top: 12px;
      margin-bottom: 12px;
    }
    nav {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      ul {
        list-style: none;
        li {
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 300;
          font-size: 24px;
          line-height: 36px;
          margin: 12px 0px;
          a {
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            color: white;
            svg {
              margin: 0 12px;
            }
          }
        }
      }
    }
  }
`;
