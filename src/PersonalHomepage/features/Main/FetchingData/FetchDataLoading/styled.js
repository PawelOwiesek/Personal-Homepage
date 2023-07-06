import styled from "styled-components";
import { ReactComponent as spinner } from "./spinner.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 88px;
`;

export const Warning = styled.h2`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.titles.color};
`;

export const Spinner = styled(spinner)`
  margin-top: 48px;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
