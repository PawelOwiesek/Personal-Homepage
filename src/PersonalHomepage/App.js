import { ThemeProvider } from "styled-components";
import Header from "./common/Header";
import { GlobalStyles } from "./GlobalStyles";
import { useSelector } from "react-redux";
import { selectThemeState } from "./themeSlice";
import { darkTheme, lightTheme } from "./theme";
import ThemeButton from "./common/ThemeSlider";

function App() {
  const isLigthTheme = useSelector(selectThemeState);

  return (
    <div>
      <ThemeProvider theme={isLigthTheme ? darkTheme : lightTheme}>
        <GlobalStyles />
        <ThemeButton />
        <Header />
      </ThemeProvider>
    </div>
  );
}

export default App;
