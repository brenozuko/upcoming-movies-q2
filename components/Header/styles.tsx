import styled from "styled-components";

export const Container = styled.div`
  background-color: #121212;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  z-index: 10;
`;

export const Content = styled.div`
  @media (min-width: 768px) {
    max-width: 1280px;
    margin: 0 auto;
  }
`;
