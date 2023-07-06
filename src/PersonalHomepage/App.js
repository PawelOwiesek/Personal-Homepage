import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { GlobalStyles } from "./GlobalStyles";
import { selectLightTheme } from "./common/ThemeSlider/themeSlice";
import { darkTheme, lightTheme } from "./theme";
import ThemeButton from "./common/ThemeSlider";
import Header from "./common/Header";
import SkillSection from "./common/SectionSkills";
import { skills, skillsToLearn } from "./AboutMe";
import Repositories from "./features/Main/Repositories";
import Footer from "./common/Footer";

function App() {
  const isLigthTheme = useSelector(selectLightTheme);

  return (
    <>
      <ThemeProvider theme={isLigthTheme ? darkTheme : lightTheme}>
        <GlobalStyles />
        <ThemeButton />
        <Header />
        <SkillSection title="My skillset includes 🛠️" content={skills} />
        <SkillSection
          title="What I want to learn next 🚀"
          content={skillsToLearn}
        />
        <Repositories />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
