import styled from "styled-components";

export const StyledAbout = styled.div`
  margin-top: 150px;
  font-family: "Ubuntu", sans-serif;

  .aboutBanner {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    .bannerTitle {
      font-size: 2.5em;
      color: ${(props) => props.theme.colors.mainText};
    }

    .bannerDesc {
      color: ${(props) => props.theme.colors.greyText};
      font-weight: 600;
    }
  }

  .aboutContainer {
    padding: 80px 10%;
    display: flex;
    gap: 60px;
    min-height: 530px;
    .aboutImg {
      width: 40%;
      flex: 1;
      border-radius: 5px;
    }

    .aboutText {
      display: flex;
      flex-direction: column;
      gap: 40px;
      flex: 1;
    }

    .text {
      font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;
      color: ${(props) => props.theme.colors.greyText};
      font-weight: 600;
      font-size: 1.2em;
      line-height: 28px;
    }
    .aboutInfo {
      display: flex;
      justify-content: space-around;
      .infoBox {
        display: flex;
        flex-direction: column;
        width: 100px;
        text-align: center;

        h1 {
          color: ${(props) => props.theme.colors.mainText};
        }
        p {
          color: ${(props) => props.theme.colors.greyText};
          font-weight: 600;
          line-height: 20px;
        }
      }
    }
  }

  .aboutBtn {
    width: 150px;
    height: 45px;
    border-radius: 5px;
    border: none;
    background-color: ${(props) => props.theme.colors.darkBlue};
    color: white;
    cursor: pointer;
    margin-top: 30px;
  }

  @media only screen and (max-width: 1100px) {
    .aboutContainer {
      min-height: 600px;
      margin-top: 80px;
      padding: 0px 30px;
      flex-direction: column;
      align-items: center;
    }

    .aboutImg {
      width: 65% !important;
    }

    .text {
      text-align: center;
    }

    .aboutBtn {
      margin: 0 auto;
    }
  }

  @media only screen and (max-width: 680px) {
    .aboutImg {
      width: 100% !important;
    }
  }
`;
