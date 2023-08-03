import styled from "styled-components";

export const Container = styled.section`
  width: 1216px;
  background-color: ${({ theme }) => theme.skillSection.background};
  border-radius: 4px;
  box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03),
    0px -2px 50px 0px rgba(9, 10, 51, 0.02);

  @media (max-width: ${({ theme }) => theme.breakpoint.ipadMax}) {
    margin: 0px 14px 50px;
    padding: 16px;
    width: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    width: 288px;
    margin: 0 16px 35px;
  }
`;

export const SkillHeader = styled.h2`
  padding: 32px 0 0 32px;
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 1.5px;
  color: ${({ theme }) => theme.titles.color};

  @media (max-width: ${({ theme }) => theme.breakpoint.ipad}) {
    padding: 0;
    margin: 0;
    font-size: 18px;
    letter-spacing: 0.9px;
  }
`;

export const Divider = styled.div`
  width: 1151px;
  height: 1px;
  margin: 15px 0 39px 32px;
  background-color: ${({ theme }) => theme.divider.background};

  @media (max-width: ${({ theme }) => theme.breakpoint.ipadMax}) {
    margin: 12px 0;
    width: auto;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: auto 320px auto;
  gap: 8px 115px;
  grid-template-rows: repeat(8 1fr);
  padding: 30px 32px;
  margin-bottom: 72px;

  @media (max-width: ${({ theme }) => theme.breakpoint.ipadMax}) {
    grid-template-columns: auto auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin-bottom: 0;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  height: 25px;
  color: ${({ theme }) => theme.basic.text};
  list-style-type: none;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4%;
  letter-spacing: 0.9px;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  &::before {
    content: "";
    display: inline;
    align-self: center;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    margin-right: 16px;
    background-color: ${({ theme }) => theme.buttons.background};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 14px;
    letter-spacing: 0.7px;
  }
`;
