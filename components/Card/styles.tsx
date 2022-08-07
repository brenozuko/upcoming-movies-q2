import styled from "styled-components";

export const Container = styled.div`
  background: #1a1a1a;
  border-radius: 15px;
  padding-left: 10px;
  padding-top: 20px;
  padding-bottom: 40px;
  width: 300px;
`;

export const Movie = styled.div`
  display: flex;
`;

export const Poster = styled.div`
  max-width: 115px;
  max-height: 153px;

  img {
    border: 1px solid #ffffff;
    border-radius: 15px;
    width: 100%;
    height: 100%;
  }
`;

export const Overview = styled.div`
  margin-top: 17px;
  h2 {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #fff;
  }

  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    color: #ffffff;
    max-width: 270px;
    margin-top: 6px;
  }
`;

export const MovieInfo = styled.div`
  margin-left: 16px;
  margin-top: 13px;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;

  color: #ffffff;
`;

export const Rate = styled.div`
  display: flex;
  margin-top: 6px;

  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #ffffff;
    margin-left: 5px;
  }
`;

export const Release = styled.p`
  margin-top: 6px;
  max-width: 130px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #ffffff;
`;

export const ToggleOverview = styled.button`

`;
