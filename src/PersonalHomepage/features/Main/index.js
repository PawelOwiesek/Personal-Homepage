import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGitData } from "./gitDataSlice";
import { selectRepositoresData } from "./gitDataSlice";
import {
  Wrapper,
  GitIco,
  Title,
  SubTitle,
  List,
  ListItem,
  RepoTitle,
  Description,
  DemoLink,
  Link,
} from "./styled";

const Repositories = () => {
  const dispatch = useDispatch();
  const repositories = useSelector(selectRepositoresData);

  useEffect(() => {
    dispatch(fetchGitData());
  }, [dispatch]);

  return (
    <Wrapper>
      <GitIco />
      <Title>Portfolio</Title>
      <SubTitle>My recent projects</SubTitle>
      <List>
        {repositories.map((item) => (
          <ListItem key={item.id}>
            <RepoTitle>{item.name}</RepoTitle>
            <Description>{item.description}</Description>
            <DemoLink>
              Demo: <Link href={item.homepage}>{item.homepage}</Link>
            </DemoLink>
            <DemoLink>
              Code: <Link href={item.html_url}>{item.html_url}</Link>
            </DemoLink>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};

export default Repositories;
