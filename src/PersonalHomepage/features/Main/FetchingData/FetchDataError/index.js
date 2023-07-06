import { Container, WarningIcon, Warning, Info, Link } from "./styled";
import { Button } from "../../../../MainButton/styled";
import { AboutMe } from "../../../../AboutMe";

const Error = () => (
  <Container>
    <WarningIcon />
    <Warning>Ooops! Something went wrong... </Warning>
    <Info>
      Sorry, failed to load Github projects.
      <br /> You can check them directly on Github.
    </Info>
    <Button>
      <Link
        href={`${AboutMe.github}`}
        title={` ${AboutMe.github}`}
        rel="noreferrer noopener"
      >
        Go to Github
      </Link>
    </Button>
  </Container>
);
export default Error;
