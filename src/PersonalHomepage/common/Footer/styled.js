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
`;

export const Header = styled.h2`
  font-size: 12px;
  font-weight: 700;
  line-height: 1.3;
  text-transform: uppercase;
  margin-top: 120px;
`;

export const Email = styled.p`
  font-size: 32px;
  font-weight: 900;
  letter-spacing: 1.6px;
  margin: 24px 0;
`;

export const Content = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.9px;
`;

export const Socials = styled.div`
  margin-top: 56px;
  display: flex;
  gap: 24px;
  color: ${({ theme }) => theme.svgIcon.color};
`;

export const GitIcon = styled(gitIcon)``;
export const FacebookIcon = styled(facebookIcon)``;
export const LinkedIn = styled(linkedIn)``;
