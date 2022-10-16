import React from "react";
import { StyledNavbar } from "../css/Navbar.styled";

//svgs
import { ReactComponent as MoonIcon } from "../assets/moon.svg";
import { ReactComponent as SunIcon } from "../assets/sun.svg";
import { ReactComponent as BarsIcon } from "../assets/bars.svg";

const Navbar = ({ setTheme, theme }) => {
  return (
    <StyledNavbar>
      <div className="title">Elijah</div>
      <div className="links">
        <div>Home</div>
        <div>About</div>
        <div>Skills</div>
        <div>Portfolio</div>
        <div>Contact</div>
        <div onClick={() => setTheme((prev) => !prev)}>
          {theme ? (
            <SunIcon className="themeChange" />
          ) : (
            <MoonIcon className="themeChange" />
          )}
        </div>
      </div>
      <div className="bars">
        <BarsIcon className="barsIcon" />
        <div onClick={() => setTheme((prev) => !prev)}>
          {theme ? (
            <SunIcon className="themeChange" />
          ) : (
            <MoonIcon className="themeChange" />
          )}
        </div>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
