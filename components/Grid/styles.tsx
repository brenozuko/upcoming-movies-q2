import styled from "styled-components";

export const Container = styled.div`
  margin-top: 140px;
  background-color: #000;
  padding-bottom: 60px;
  min-height: 100vh;
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  margin-top: 29px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 26px;
    line-height: 32px;
  }
`;

export const GridContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
  @media (min-width: 1024px) {
    justify-content: space-between;
  }
`;
