import Navbar from "./components/Navbar";
import GlobalStyle from "./css/Global.styled";
import { ThemeProvider } from "styled-components";
import Home from "./components/Home";
import { useState } from "react";

const globalTheme = {
  blueText: "#7a8ae3",
  greyText: "#6c6c6d",
};

const lightTheme = {
  colors: {
    mainBackground: "#FFFFFF",
    mainText: "#000000",
    blueText: globalTheme.blueText,
    greyText: globalTheme.greyText,
  },
};

const darkTheme = {
  colors: {
    mainBackground: "#282828",
    mainText: "#ffffff",
    blueText: globalTheme.blueText,
    greyText: globalTheme.greyText,
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
    </ThemeProvider>
  );
}

export default App;
