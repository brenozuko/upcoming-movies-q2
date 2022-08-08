import styled from "styled-components";

export const Container = styled.div`
  background-color: #121212;
  padding-top: 30px;
  padding-bottom: 45px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    max-width: 1280px;
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Disclaimer = styled.div`
  max-width: 243px;
  margin-top: 26px;
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 15px;
    text-align: center;
    color: #ffffff;
  }

  @media (min-width: 768px) {
    p {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;

export const IconsContainer = styled.div`
  margin-top: 35px;

  a {
    margin-right: 10px;

    &:nth-child(2) {
      margin-right: 0;
    }
  }
`;
