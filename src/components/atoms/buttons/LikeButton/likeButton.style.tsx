import styled from "styled-components";

export const Button = styled.button`
  margin-top: 30px;
  background-color: transparent;
  border: 0;
  width: 40px;
  font-size: 20px;

  &:hover {
    transform: scale(1.4);
    cursor: pointer;
  }

  &:focus {
    outline: 0;
  }

  &:active {
    outline: 0;
    transform: scale(0.8);
  }
`;
