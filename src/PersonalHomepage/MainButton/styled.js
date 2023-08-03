import styled from "styled-components";

export const Button = styled.button`
  display: inline-flex;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background-color: ${({ theme }) => theme.buttons.background};
  border: 1px solid ${({ theme }) => theme.divider.background};
  border-radius: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    gap: 12px;
  }
`;
