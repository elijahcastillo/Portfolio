import Navbar from "./components/Navbar";
import GlobalStyle from "./css/Global.styled";
import { ThemeProvider } from "styled-components";
import Home from "./components/Home";
import { useState } from "react";
import AboutMe from "./components/AboutMe";

const globalTheme = {
  blueText: "#7a8ae3",
  darkBlue: "#485fe4",
  greyText: "#8b8b8c",
};

const lightTheme = {
  colors: {
    mainBackground: "#FFFFFF",
    mainText: "#000000",
    blueText: globalTheme.blueText,
    greyText: globalTheme.greyText,
    darkBlue: globalTheme.darkBlue,
  },
};

const darkTheme = {
  colors: {
    mainBackground: "#24252f",
    mainText: "#ffffff",
    blueText: globalTheme.blueText,
    greyText: globalTheme.greyText,
    darkBlue: globalTheme.darkBlue,
  },
};
// ${props => props.theme.colors.lightBlue};

function App() {
  const [theme, setTheme] = useState(false);
  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Navbar setTheme={setTheme} theme={theme} />
      <Home />
      <AboutMe />
    </ThemeProvider>
  );
}

export default App;
