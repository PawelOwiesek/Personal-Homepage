import styled from "styled-components";
import { ReactComponent as GitIcon } from "../../../Images/Github_black.svg";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 72px 0 0;
  transition: all 5s linear;
  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin: 48px 16px 0;
  }
`;

export const GitIco = styled(GitIcon)`
  color: ${({ theme }) => theme.buttons.background};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    width: 32px;
    height: 32px;
  }
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 1.5px;
  margin: 12px 0 8px;
  color: ${({ theme }) => theme.titles.color};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 18px;
    letter-spacing: 0.9px;
    margin: 12px 0 16px;
  }
`;

export const SubTitle = styled.h3`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 1px;
  margin: 0 0 24px 0;
  color: ${({ theme }) => theme.titles.color};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 17px;
    letter-spacing: 0.85px;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  background-color: ${({ theme }) => theme.basic.background};
  padding: 0;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.ipadMax}) {
    grid-template-columns: auto auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.ipad}) {
    grid-template-columns: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

export const ListItem = styled.li`
  width: 593px;
  display: grid;
  grid-template-rows: repeat(3, auto);
  gap: 24px;
  justify-content: flex-start;
  padding: 56px;
  list-style-type: none;
  transition: 0.3s linear;
  background-color: ${({ theme }) => theme.skillSection.background};
  border: 6px solid ${({ theme }) => theme.divider.background};
  border-radius: 4px;
  box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03),
    0px -2px 50px 0px rgba(9, 10, 51, 0.02);

  &:hover {
    border: 6px solid ${({ theme }) => theme.hover.color};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.ipadMax}) {
    display: flex;
    flex-direction: column;
    width: auto;
    padding: 24px;
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    width: 288px;
  }
`;

export const RepoTitle = styled.h3`
  font-style: 24px;
  font-weight: 700;
  letter-spacing: 1.2px;
  margin: 0;
  color: ${({ theme }) => theme.repoTitle.color};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 16px;
    align-self: flex-start;
  }
`;

export const Description = styled.span`
  display: flex;
  font-style: 18px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.9cap;
  margin: 0;
  color: ${({ theme }) => theme.basic.text};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 14px;
    letter-spacing: 0.7px;
    line-height: normal;
  }
`;

export const DemoLink = styled(Description)`
  display: inline-block;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    display: flex;
    align-self: flex-start;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    display: inline-block;
  }
`;

export const Link = styled.a`
  font-style: 18px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.9px;
  margin: 0 0 8px 8px;
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.linkOnderLine.color};
  opacity: 0.8;
  color: ${({ theme }) => theme.buttons.background};

  &:hover {
    opacity: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 14px;
    line-height: normal;
    letter-spacing: 0.7px;
    word-break: break-word;
  }
`;
