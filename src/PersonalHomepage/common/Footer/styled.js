import styled from "styled-components";
import { ReactComponent as gitIcon } from "../../Images/mark-github.svg";
import { ReactComponent as facebookIcon } from "../../Images/Facebook_black.svg";
import { ReactComponent as linkedIn } from "../../Images/LinkedIN_black.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 670px;
  color: ${({ theme }) => theme.titles.color};

  @media (max-width: ${({ theme }) => theme.breakpoint.ipadMax}) {
    max-width: max-content;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin: 0 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    max-width: 288px;
  }
`;

export const Header = styled.h2`
  font-size: 12px;
  font-weight: 700;
  line-height: 1.3;
  text-transform: uppercase;
  margin: 120px 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin: 48px 0 0;
  }
`;

export const Email = styled.a`
  font-size: 32px;
  font-weight: 900;
  letter-spacing: 1.6px;
  margin: 24px 0;
  cursor: pointer;
  color: ${({ theme }) => theme.titles.color};
  text-decoration: none;
  transition: 0.3s linear;

  &:hover {
    color: ${({ theme }) => theme.buttons.background};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 18px;
    letter-spacing: 0.9px;
    margin: 12px 0;
  }
`;

export const Content = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.9px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 14px;
    line-height: normal;
    letter-spacing: 0.7px;
  }
`;

export const Socials = styled.div`
  margin-top: 56px;
  display: flex;
  gap: 24px;
  color: ${({ theme }) => theme.svgIcon.color};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin-top: 40px;
  }
`;

export const GitIcon = styled(gitIcon)`
  cursor: pointer;
  fill: ${({ theme }) => theme.titles.color};
  transition: 0.3s linear;

  &:hover {
    fill: ${({ theme }) => theme.buttons.background};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    width: 31px;
    height: 31px;
  }
`;

export const FacebookIcon = styled(facebookIcon)`
  cursor: pointer;
  fill: ${({ theme }) => theme.titles.color};
  transition: 0.3s linear;

  &:hover {
    fill: ${({ theme }) => theme.buttons.background};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    width: 31px;
    height: 31px;
  }
`;

export const LinkedIn = styled(linkedIn)`
  cursor: pointer;
  fill: ${({ theme }) => theme.titles.color};
  transition: 0.3s linear;

  &:hover {
    fill: ${({ theme }) => theme.buttons.background};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    width: 31px;
    height: 31px;
  }
`;

export const Link = styled.a``;
