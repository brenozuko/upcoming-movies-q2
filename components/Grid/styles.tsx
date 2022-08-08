import styled from "styled-components";

export const Container = styled.div`
  margin-top: 140px;
  background-color: #000;
  padding-bottom: 60px;
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  margin-top: 29px;
  text-align: center;
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
