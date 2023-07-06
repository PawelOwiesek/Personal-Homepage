import { Container, Spinner, Warning } from "./styled";

const Loading = () => (
  <Container>
    <Warning>Please wait, projects are being loaded...</Warning>
    <Spinner />
  </Container>
);

export default Loading;
