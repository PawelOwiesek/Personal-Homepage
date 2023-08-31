import { AboutMe } from "../../AboutMe";
import {
  Container,
  Content,
  Email,
  FacebookIcon,
  GitIcon,
  Header,
  Link,
  LinkedIn,
  Socials,
} from "./styled";

const Footer = () => (
  <Container>
    <Header>Let's talk!</Header>
    <Email
      href={`mailto:${AboutMe.email}`}
      title={`send Emial to ${AboutMe.email}`}
      rel="noreferrer noopener"
    >
      PawelOwiesek@gmail.com
    </Email>
    <Content>
      I’m always open to new projects whenever I have the time. If you have a
      website, dashboard or mobile app in mind and need some help to make your
      ideas come to life, feel free to conatct me 🖐
    </Content>
    <Socials>
      <Link href="https://github.com/PawelOwiesek">
        <GitIcon />
      </Link>
      <Link href="https://www.facebook.com/pawel.owiesek">
        <FacebookIcon />
      </Link>
      <Link href="https://www.linkedin.com/in/pawel-owiesek-9b5687244/">
        <LinkedIn />
      </Link>
    </Socials>
  </Container>
);

export default Footer;
