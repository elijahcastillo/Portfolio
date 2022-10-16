import styled from "styled-components";

export const StyledHome = styled.div`
  margin-top: 70px;

  overflow: hidden;

  .container {
    padding: 100px 60px 0 280px;
    width: 100%;
    max-height: 600px;
    display: flex;
    align-items: center;
    margin: 0;
  }

  //Icons
  .contactIcons {
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: absolute;
    top: 300px;
    left: 50px;
  }

  .icon {
    width: 28px;
    cursor: pointer;
  }

  .icon path {
    fill: ${(props) => props.theme.colors.blueText};
  }

  //Text

  .info {
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 60px;
    font-family: "Ubuntu", sans-serif;
    flex: 1;
  }

  .intro {
    font-size: 3.2em;
    color: ${(props) => props.theme.colors.mainText};
  }

  .title {
    font-size: 1.3em;
    color: ${(props) => props.theme.colors.greyText};
  }

  .title-desc {
    font-size: 1em;
    color: #737373;
    max-width: 400px;
  }

  .contactBtn {
    width: 130px;
    height: 45px;
    margin-top: 20px;
    border: none;
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.darkBlue};
    color: white;
    cursor: pointer;
  }

  //Picture
  .picture {
    flex: 1;
  }
  .picture svg {
    width: 600px;
    height: auto;
  }

  .myImg {
    width: 160px;
    height: 140px;
    z-index: 1;
  }

  @media only screen and (max-width: 1200px) {
    .container {
      flex-direction: column-reverse;
      padding: 100px 60px 0 50px;
      max-height: 850px;
    }
  }

  @media only screen and (max-width: 680px) {
    .container {
      flex-direction: column-reverse;
      padding: 0px 60px 0 50px;
      max-height: 850px;
    }
    .picture svg {
      width: 140%;
      margin-left: -8%;
    }

    .contactIcons {
      top: 220px;
      left: 25px;
    }
  }
`;
