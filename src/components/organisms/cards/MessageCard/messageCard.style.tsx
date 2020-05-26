import styled from "styled-components";

export const MessageCardWrapper = styled.div`
  box-shadow: 0 6px 15px rgba(36, 37, 38, 0.08);
  background-color: ${({ theme }) => theme.cardBackgroundColor};
  border-radius: 20px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  padding: 0 0 40px 0;
  max-width: 700px;
  color: ${({ theme }) => theme.cardTextColor};

  &:last-child {
    margin-bottom: 0;
  }

  .img {
    width: 100%;
  }

  .contentWrapper {
    width: 80%;
  }

  .title {
    margin-top: 38px;
  }

  .buttonWrapper {
    width: 82%;
  }
`;
