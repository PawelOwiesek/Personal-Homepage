import {
  HeaderContent,
  HeaderImage,
  HeaderContainer,
  PrevTitle,
  Title,
  Description,
  Envelope,
  Link,
} from "./styled";
import { myImage } from "./images";
import envelope from "../../common/Header/images/Message.svg";
import { AboutMe } from "../../AboutMe";
import { Button } from "../../MainButton/styled";

const Header = () => (
  <HeaderContainer>
    <HeaderImage src={myImage} alt="myImage" />
    <HeaderContent>
      <PrevTitle>This is</PrevTitle>
      <Title>{AboutMe.name}</Title>
      <Description>{AboutMe.content}</Description>
      <Button>
        <Envelope src={envelope} alt="Email" />
        <Link
          href={`mailto:${AboutMe.email}`}
          title={`send Emial to ${AboutMe.email}`}
          rel="noreferrer noopener"
        >
          Hire Me
        </Link>
      </Button>
    </HeaderContent>
  </HeaderContainer>
);

export default Header;
