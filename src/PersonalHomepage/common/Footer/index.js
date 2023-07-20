import {
  Container,
  Content,
  Email,
  FacebookIcon,
  GitIcon,
  Header,
  LinkedIn,
  Socials,
} from "./styled";

const Footer = () => (
  <Container>
    <Header>Let's talk!</Header>
    <Email>PawelOwiesek@gmail.com</Email>
    <Content>
      I’m always open to new projects whenever I have the time. If you have a
      website, dashboard or mobile app in mind and need some help to make your
      ideas come to life, feel free to conatct me
    </Content>
    <Socials>
      <GitIcon />
      <FacebookIcon />
      <LinkedIn />
    </Socials>
  </Container>
);

export default Footer;
