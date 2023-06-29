import sun from "../../Images/brightness 1.svg";
import { Wrapper, Button, Sun, ThemeText } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectThemeState, toggleTheme } from "../../themeSlice";

const ThemeButton = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectThemeState);

  return (
    <Wrapper>
      <ThemeText>
        DARK MODE <span>{theme ? "ON" : "OFF"}</span>
      </ThemeText>
      <Button onClick={() => dispatch(toggleTheme())}>
        <Sun>
          <img src={sun} alt="" />
        </Sun>
      </Button>
    </Wrapper>
  );
};

export default ThemeButton;
