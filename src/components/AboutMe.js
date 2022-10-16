import React from "react";
import { StyledAbout } from "../css/About.styled";
import aboutImg from "../assets/About.jpg";

const AboutMe = () => {
  return (
    <StyledAbout>
      <div className="aboutBanner">
        <h1 className="bannerTitle">About Me</h1>
        <p className="bannerDesc">My Introduction</p>
      </div>

      <div className="aboutContainer">
        <img src={aboutImg} className="aboutImg" />
        <div className="aboutText">
          <p className="text">
            This is a really long sentence wiht many cool thinsg to look at and
            see how this will effect the ocerall way the we do work as a team.
            So I can work better with all of you.
          </p>
          <div className="aboutInfo">
            <div className="infoBox">
              <h1>8+</h1>
              <p>Years experince</p>
            </div>

            <div className="infoBox">
              <h1>20+</h1>
              <p>Compleated Projects</p>
            </div>

            <div className="infoBox">
              <h1>2</h1>
              <p>Companies Worked</p>
            </div>
          </div>
          <button className="aboutBtn">Download Resume</button>
        </div>
      </div>
    </StyledAbout>
  );
};

export default AboutMe;
