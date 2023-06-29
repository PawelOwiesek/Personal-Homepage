import {
  Description,
  Envelope,
  HeaderContainer,
  HeaderContent,
  HeaderImage,
  Link,
  MailButton,
  PrevTitle,
  Title,
} from "./styled";
import { myImage } from "../../Images/myImage";
import envelope from "../../Images/Message.svg";
import { AboutMe } from "../../AboutMe";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderImage src={myImage} alt="myImage" />
      <HeaderContent>
        <PrevTitle>This is</PrevTitle>
        <Title>{AboutMe.name}</Title>
        <Description>{AboutMe.content}</Description>
        <MailButton>
          <Envelope src={envelope} alt="Email" />
          <Link
            href="mailto:{AboutMe.email}"
            title="{AboutMe.EmailTitle}"
            rel="noreferrer noopener"
          >
            Hire Me
          </Link>
        </MailButton>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
