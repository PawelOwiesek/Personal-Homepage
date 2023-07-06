import { ReactComponent as warningIco } from "./warning.svg";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Warning = styled.h3`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1.2px;
  margin: 16px 0 32px;
  color: ${({ theme }) => theme.titles.color};
`;

export const Info = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 1px;
  margin: 0 0 32px;
  color: ${({ theme }) => theme.titles.color};
`;

export const Link = styled.a`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
  text-decoration-line: none;
  color: ${({ theme }) => theme.buttons.text};
`;

export const WarningIcon = styled(warningIco)`
  color: ${({ theme }) => theme.titles.color};
  margin-top: 88px;
`;
