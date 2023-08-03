import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 66px;
  max-width: 1097px;
  margin-bottom: 63px;
  font-size: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.ipadMax}) {
    max-width: 1280px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.ipad}) {
    max-width: 1024px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    max-width: 767px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    display: flex;
    flex-direction: column;
    max-width: 450px;
    margin-bottom: 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    max-width: 320px;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    margin-left: 16px;
  }
`;

export const HeaderImage = styled.img`
  width: 398px;
  height: 398px;
  border-radius: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoint.ipad}) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    width: 240px;
    height: 240px;
    margin: 6px 0 0 13px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    width: 132px;
    height: 132px;
  }
`;

export const PrevTitle = styled.span`
  font-size: 12px;
  font-weight: 700;
  line-height: 1.3;
  text-transform: uppercase;
  color: ${({ theme }) => theme.basic.text};
  margin-bottom: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin-top: 12px;
    margin-bottom: 0;
  }
`;

export const Title = styled.h1`
  font-size: 38px;
  font-weight: 900;
  letter-spacing: 1.9px;
  margin: 0;
  color: ${({ theme }) => theme.titles.color};

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: 22px;
    letter-spacing: 1.1px;
    margin-top: 8px;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 1px;
  margin: 35px 0 32px 0;
  color: ${({ theme }) => theme.basic.text};

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: 19px;
    margin: 22px 0 28px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 17px;
    letter-spacing: 0.85px;
    margin: 16px 0 24px 0;
  }
`;

export const Envelope = styled.img`
  width: 24px;
  height: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    width: 22px;
    height: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    width: 20px;
    height: 20px;
  }
`;

export const Link = styled.a`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
  text-decoration-line: none;
  color: ${({ theme }) => theme.buttons.text};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 18px;
    letter-spacing: 0.9px;
  }
`;
