import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #121212;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 12;
  border-radius: 15px;
  overflow-y: auto;

  @media (min-width: 1024px) {
    width: 1280px;
    height: 750px;
    left: 50%;
    transform: translate(-50%, 0);
    top: 10%;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 11;
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

export const SearchBar = styled.fieldset`
  background: #d9d9d9;
  border-radius: 15px;
  align-items: center;
  width: 90%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;

  svg {
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
  }

  input {
    background: none;
    border: none;
    padding: 10px;
    width: 100%;
  }

  @media (min-width: 1024px) {
    width: 592px;
  }
`;

export const CloseContainer = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
  cursor: pointer;
  svg {
    path {
      fill: #ffffff;
    }
  }
`;

export const GridContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;
