import styled from "styled-components";

export const Container = styled.div`
  background: #1a1a1a;
  border-radius: 15px;
  padding-left: 10px;
  padding-top: 20px;
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

export const Overview = styled.div``;

export const MovieInfo = styled.div`
  margin-left: 16px;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;

  color: #ffffff;
`;

export const Rate = styled.div``;

export const Release = styled.p``;
