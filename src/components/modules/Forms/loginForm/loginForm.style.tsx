import styled from "styled-components";

export const LoginFormContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginFormWrapper = styled.div`
  width: 80%;

  input[type="text"],
  input[type="password"] {
    color: ${({ theme }) => theme.textColor};
    font-size: 1.2rem;
    margin: 0 auto;
    padding: 0.7rem 2rem;
    border-radius: 0.2rem;
    background-color: ${({ theme }) => theme.cardBackgroundColor};
    border: none;
    width: 100%;
    border-bottom: 0.3rem solid transparent;
    transition: all 0.3s;
  }

  input[type="button"] {
    border: none;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background: ${({ theme }) => theme.primaryColor};
    cursor: pointer;
    padding: 25px 60px;
    margin-top: 30px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
    outline: none;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      z-index: -1;
      transition: all 0.3s;
    }
  }
`;
