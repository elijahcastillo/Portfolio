import React from "react";
import { StyledHome } from "../css/Home.styled";

import elijah from "../assets/MeTran.png";

//svgs
import { ReactComponent as GitIcon } from "../assets/github-alt.svg";
import { ReactComponent as LinkedIcon } from "../assets/linkedin-alt.svg";
import { ReactComponent as GlobeIcon } from "../assets/globe.svg";

const Home = () => {
  return (
    <StyledHome>
      <div className="contactIcons">
        <a href="https://github.com/elijahcastillo" target="_blank">
          <GitIcon className="icon" />
        </a>
        <LinkedIcon className="icon" />
        <GlobeIcon className="icon" />
      </div>

      <div className="container">
        <div className="info">
          <h1 className="intro">Hello, Im Elijah!</h1>
          <h2 className="title">Full Stack Developer</h2>
          <h3 className="title-desc">
            Experienced full stack developer with quality work and knowledge,
            looking for a great employeer
          </h3>
          <button className="contactBtn">Contact Me</button>
        </div>

        <div className="picture">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="blob"
          >
            <mask id="mask0" mask-type="alpha">
              <path
                fill="#7A8AE3"
                d="M37.7,-60.8C52.2,-57.1,69.3,-53.5,74.4,-43.4C79.6,-33.3,72.7,-16.6,70.7,-1.1C68.7,14.4,71.6,28.7,65.8,37.6C60,46.4,45.3,49.8,32.9,55.1C20.5,60.4,10.2,67.6,-1.7,70.6C-13.7,73.7,-27.5,72.5,-36.7,65.4C-45.9,58.2,-50.5,45,-56.1,33.1C-61.6,21.2,-68.1,10.6,-69.4,-0.8C-70.8,-12.2,-67,-24.4,-59.4,-32.6C-51.7,-40.8,-40.1,-45.1,-29.5,-51.1C-19,-57,-9.5,-64.7,1.1,-66.6C11.7,-68.5,23.3,-64.6,37.7,-60.8Z"
                transform="translate(100 100)"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                fill="#7A8AE3"
                d="M37.7,-60.8C52.2,-57.1,69.3,-53.5,74.4,-43.4C79.6,-33.3,72.7,-16.6,70.7,-1.1C68.7,14.4,71.6,28.7,65.8,37.6C60,46.4,45.3,49.8,32.9,55.1C20.5,60.4,10.2,67.6,-1.7,70.6C-13.7,73.7,-27.5,72.5,-36.7,65.4C-45.9,58.2,-50.5,45,-56.1,33.1C-61.6,21.2,-68.1,10.6,-69.4,-0.8C-70.8,-12.2,-67,-24.4,-59.4,-32.6C-51.7,-40.8,-40.1,-45.1,-29.5,-51.1C-19,-57,-9.5,-64.7,1.1,-66.6C11.7,-68.5,23.3,-64.6,37.7,-60.8Z"
                transform="translate(100 100)"
              />
              <image href={elijah} className="myImg" x="18" y="45" />
            </g>
          </svg>
        </div>
      </div>
    </StyledHome>
  );
};

export default Home;
