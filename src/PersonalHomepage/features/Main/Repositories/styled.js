import styled from "styled-components";
import { ReactComponent as GitIcon } from "../../../Images/Github_black.svg";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 72px;
`;

export const GitIco = styled(GitIcon)`
  color: ${({ theme }) => theme.buttons.background};
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 1.5px;
  margin: 12px 0 8px;
  color: ${({ theme }) => theme.titles.color};
`;

export const SubTitle = styled.h3`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 1px;
  margin: 0;
  color: ${({ theme }) => theme.titles.color};
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  background-color: ${({ theme }) => theme.basic.background};
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 56px;
  list-style-type: none;
  background-color: ${({ theme }) => theme.skillSection.background};
  border: 6px solid ${({ theme }) => theme.divider.background};
  border-radius: 4px;
  box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03),
    0px -2px 50px 0px rgba(9, 10, 51, 0.02);
`;

export const RepoTitle = styled.h3`
  font-style: 24px;
  font-weight: 700;
  letter-spacing: 1.2px;
  color: ${({ theme }) => theme.repoTitle.color};
`;

export const Description = styled.p`
  display: flex;
  font-style: 18px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.9cap;
  margin: 24px 0;
  color: ${({ theme }) => theme.basic.text};
`;

export const DemoLink = styled(Description)`
  margin: 0;
`;

export const Link = styled.a`
  font-style: 18px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.9cap;
  margin: 0 0 8px 8px;
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.linkOnderLine.color};

  color: ${({ theme }) => theme.buttons.background};
`;
