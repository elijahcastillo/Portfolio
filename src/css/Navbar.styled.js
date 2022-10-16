import styled from "styled-components";

export const StyledNavbar = styled.div`
  height: 70px;
  width: 100%;
  transition: background-color 200ms linear;

  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;

  font-family: "Ubuntu", sans-serif;
  font-size: 1.05em;
  background-color: ${(props) => props.theme.colors.mainBackground};
  color: ${(props) => props.theme.colors.mainText};
  box-shadow: 1px 1px 2px grey;
  z-index: 100;

  .links {
    display: flex;
    gap: 30px;
  }

  .links div:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.blueText};
  }

  .themeChange {
    width: 23px;
  }

  //init none
  .bars {
    display: none;
  }

  .barsIcon {
    width: 35px;
    height: 50px;
  }

  .barsIcon path {
    fill: ${(props) => props.theme.colors.mainText};
  }

  @media only screen and (max-width: 1200px) {
    justify-content: space-between;

    .title {
      margin-left: 50px;
    }

    //Make Links disapear
    .links {
      display: none;
    }

    //add bars icon
    .bars {
      display: block;
      cursor: pointer;
      margin-right: 50px;
    }
  }
`;
