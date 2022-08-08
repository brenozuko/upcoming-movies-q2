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
  display: flex;
  align-items: center;
  @media (min-width: 1024px) {
    max-width: 1280px;
    margin: 0 auto;
  }
`;

export const SearchBar = styled.fieldset`
  background: #d9d9d9;
  border-radius: 15px;
  align-items: center;
  width: 150px;
  position: relative;

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
  }

  @media (min-width: 1024px) {
    width: 592px;
    margin-left: 100px;
  }
`;
