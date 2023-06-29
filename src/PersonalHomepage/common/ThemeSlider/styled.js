import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
`;
export const Button = styled.button`
  width: 48px;
  height: 26px;
  border: 1px solid;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.basic.background};
`;

export const Sun = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.basic.background};
`;

export const ThemeText = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 15.6px;
  color: ${({ theme }) => theme.basic.background};
`;