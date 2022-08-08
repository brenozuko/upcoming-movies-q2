import styled from "styled-components";

interface ToggleProps {
  isCardOpen: boolean;
}

interface OverviewProps {
  isCardOpen: boolean;
}

export const Container = styled.div`
  background: #1a1a1a;
  border-radius: 15px;
  padding-left: 10px;
  padding-top: 20px;
  width: 300px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-right: 20px;
  }

  @media (min-width: 1024px) {
    margin-right: 0;
  }
`;

function toggleOverview(isCardOpen: boolean) {
  if (isCardOpen)
    return `
    padding-bottom: 40px;
    max-height: 100vh;
  `;

  return `
    padding: 0;
    max-height: 0;
  `;
}

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

export const Overview = styled.div<OverviewProps>`
  margin-top: 17px;
  ${(props) => toggleOverview(props.isCardOpen)}
  transition: 200ms;
  overflow: hidden;

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

export const ToggleOverview = styled.button<ToggleProps>`
  background: none;
  border: none;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #ffffff;
  display: flex;
  align-items: center;
  margin-top: 22px;

  svg {
    margin-right: 10px;
    transform: rotate(${(props) => (props.isCardOpen ? "180deg" : "0deg")});
    transition: transform 200ms ease-in-out;
  }
`;
