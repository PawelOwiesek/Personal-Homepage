import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGitData } from "../gitDataSlice";
import { selectRepositoresData, selectDataStatus } from "../gitDataSlice";
import Error from "../FetchingData/FetchDataError/FetchDataError";
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
import Loading from "../FetchingData/FetchDataLoading";

const Repositories = () => {
  const dispatch = useDispatch();
  const repositories = useSelector(selectRepositoresData);
  const dataStatus = useSelector(selectDataStatus);
  useEffect(() => {
    dispatch(fetchGitData());
  }, [dispatch]);

  return (
    <Wrapper>
      <GitIco />
      <Title>Portfolio</Title>
      <SubTitle>My recent projects</SubTitle>
      {dataStatus === "loading" ? (
        <Loading />
      ) : dataStatus === "success" ? (
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
      ) : (
        <Error />
      )}
    </Wrapper>
  );
};

export default Repositories;
