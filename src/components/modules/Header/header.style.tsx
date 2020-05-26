import styled from "styled-components";

export const Logo = styled.svg`
  width: 220px;
  fill: ${({ theme }) => (theme.style === "light" ? "black" : "white")};
`;

export const HeaderWrapper = styled.header`
  padding: 49px 0 44px 0;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.textColor};
  .logo {
    width: 200px;
  }
`;
